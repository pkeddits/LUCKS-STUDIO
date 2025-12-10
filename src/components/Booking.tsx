import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, CreditCard, Check, Banknote, Store, Copy, ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BookingData {
  service: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  paymentMethod: string;
}

interface ExistingBooking {
  id: string;
  date: string;
  time: string;
  service: string;
  name: string;
  phone: string;
  paymentmethod: string;
  status: string;
  createdat: string;
  price: number;
}

const Booking = () => {
  const [bookingData, setBookingData] = useState<BookingData>({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    paymentMethod: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [existingBookings, setExistingBookings] = useState<ExistingBooking[]>([]);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [pixKey, setPixKey] = useState('');

  const services = [
    { name: 'Corte Masculino', price: 45 },
    { name: 'Barba Completa', price: 35 },
    { name: 'Corte + Barba', price: 70 },
    { name: 'Pigmentação', price: 80 },
    { name: 'Design de Sobrancelha', price: 25 },
    { name: 'Pacote Premium', price: 150 }
  ];

  const timeSlots = [
    '09:00','10:00','11:00','12:00','13:00','14:00',
    '15:00','16:00','17:00','18:00','19:00'
  ];

  const paymentMethods = [
    { id: 'pix', name: 'PIX', icon: <Banknote className="w-5 h-5" /> },
    { id: 'store', name: 'Pagar na Loja', icon: <Store className="w-5 h-5" /> },
    { id: 'schedule_only', name: 'Apenas Agendar', icon: <Calendar className="w-5 h-5" /> }
  ];

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .order('createdat', { ascending: false });

        if (error) {
          console.error('❌ Erro ao carregar agendamentos:', error);
          setExistingBookings([]);
        } else {
          console.log('📅 Agendamentos carregados:', data);
          setExistingBookings(data || []);
        }
      } catch (error) {
        console.error('❌ Erro ao carregar agendamentos:', error);
        setExistingBookings([]);
      }
    };

    loadBookings();

    const interval = setInterval(() => {
      loadBookings();
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (showPaymentScreen && bookingData.paymentMethod === 'pix') {
      const pixKeyEmail = 'felipeplima2007@gmail.com';
      setPixKey(pixKeyEmail);
    }
  }, [showPaymentScreen, bookingData.paymentMethod]);

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 30);
    return maxDate.toISOString().split('T')[0];
  };

  const isTimeSlotTaken = (date: string, time: string) => {
    if (!date || !time) return false;
    
    const taken = existingBookings.some(booking => 
      booking.date === date && 
      booking.time === time && 
      booking.status === 'confirmed'
    );
    
    console.log(`🕐 Verificando ${date} ${time}:`, taken ? 'OCUPADO' : 'LIVRE');
    return taken;
  };

  const getAvailableTimeSlots = () => {
    if (!bookingData.date) {
      return timeSlots.map(time => ({ time, available: true }));
    }
    
    return timeSlots.map(time => ({
      time,
      available: !isTimeSlotTaken(bookingData.date, time)
    }));
  };

  const handleInputChange = (field: keyof BookingData, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const getSelectedServicePrice = () => {
    const service = services.find(s => s.name === bookingData.service);
    return service ? service.price : 0;
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    alert('Chave PIX copiada!');
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar todos os campos
    if (!bookingData.service || !bookingData.date || !bookingData.time || !bookingData.name || !bookingData.phone || !bookingData.paymentMethod) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    // Validar data não pode ser no passado
    const today = new Date();
    const selectedDate = new Date(bookingData.date + 'T00:00:00');
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      alert('Não é possível agendar para datas passadas.');
      return;
    }

    // Verificar se horário ainda está disponível
    if (isTimeSlotTaken(bookingData.date, bookingData.time)) {
      alert('Este horário já foi ocupado. Por favor, escolha outro horário.');
      return;
    }

    console.log('📝 Dados do agendamento:', bookingData);

    // Se for PIX, mostrar tela de pagamento
    if (bookingData.paymentMethod === 'pix') {
      setShowPaymentScreen(true);
      return;
    }

    // Para outros métodos, processar diretamente
    await processBooking();
  };

  const processPayment = async () => {
    setIsProcessing(true);
    
    // Simular processamento do pagamento PIX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    await processBooking();
  };

  const processBooking = async () => {
    try {
      const newBooking = {
        id: Date.now().toString(),
        service: bookingData.service,
        date: bookingData.date,
        time: bookingData.time,
        name: bookingData.name,
        phone: bookingData.phone,
        paymentmethod: bookingData.paymentMethod,
        price: getSelectedServicePrice(),
        status: 'confirmed',
        createdat: new Date().toISOString()
      };

      console.log('💾 Salvando agendamento:', newBooking);

      const { data, error } = await supabase
        .from('bookings')
        .insert([newBooking])
        .select();

      if (error) {
        console.error('❌ Erro ao salvar no Supabase:', error);
        throw error;
      }

      console.log('✅ Agendamento salvo no Supabase:', data);
      if (data && data.length > 0) {
        setExistingBookings([...existingBookings, data[0]]);
      }

      // Preparar mensagem WhatsApp
      const finalPrice = bookingData.paymentMethod === 'pix'
        ? (getSelectedServicePrice() * 0.95).toFixed(0)
        : getSelectedServicePrice();

      const message = `Olá! Agendamento confirmado na Luck's Studio Barbearia!

📅 *Detalhes:*
• Nome: ${bookingData.name}
• Serviço: ${bookingData.service}
• Data: ${new Date(bookingData.date + 'T00:00:00').toLocaleDateString('pt-BR')}
• Horário: ${bookingData.time}
• Valor: R$ ${finalPrice},00
${bookingData.paymentMethod === 'pix' ? '• Desconto PIX aplicado (5%)\n• PAGAMENTO CONFIRMADO VIA PIX ✅' : ''}`;
      
      console.log('📱 Abrindo WhatsApp...');
      
      // Abrir WhatsApp
      const whatsappUrl = `https://wa.me/5511950774538?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Se for PIX, mostrar alerta sobre comprovante
      if (bookingData.paymentMethod === 'pix') {
        setTimeout(() => {
          alert('📱 Por favor, envie o comprovante do PIX via WhatsApp para confirmar seu agendamento!');
        }, 2000);
      }

      setIsBooked(true);
      setShowPaymentScreen(false);
      
    } catch (error) {
      console.error('❌ Erro ao processar agendamento:', error);
      alert('Erro ao salvar agendamento. Tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  const resetBooking = () => {
    setBookingData({
      service: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      paymentMethod: ''
    });
    setIsBooked(false);
    setShowPaymentScreen(false);
    setIsProcessing(false);
  };

  // Tela de confirmação
  if (isBooked) {
    return (
      <section id="booking" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-green-500/40 text-center">
            <div className="text-green-500 mb-6 flex justify-center">
              <Check className="h-16 w-16" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Agendamento Confirmado! ✅
            </h2>
            <p className="text-gray-300 mb-6">
              Seu horário foi reservado com sucesso. Você foi redirecionado para o WhatsApp.
            </p>
            <button
              onClick={resetBooking}
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Fazer Novo Agendamento
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Tela de pagamento PIX
  if (showPaymentScreen && bookingData.paymentMethod === 'pix') {
    const servicePrice = getSelectedServicePrice();
    const pixValue = (servicePrice * 0.95).toFixed(0);

    return (
      <section id="booking" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
            <button
              onClick={() => setShowPaymentScreen(false)}
              className="flex items-center text-yellow-500 hover:text-yellow-400 mb-6"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Pagamento PIX
              </h2>
              
              <div className="bg-black/50 p-6 rounded-lg mb-6">
                <p className="text-gray-300 mb-2">Valor original: R$ {servicePrice},00</p>
                <p className="text-green-400 mb-2">Desconto PIX (5%): -R$ {(servicePrice * 0.05).toFixed(0)},00</p>
                <p className="text-2xl font-bold text-yellow-500">
                  Total: R$ {pixValue},00
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-lg mb-6">
                <p className="text-gray-400 mb-2">Chave PIX:</p>
                <div className="flex items-center justify-center space-x-2">
                  <code className="text-yellow-500 bg-gray-800 px-3 py-1 rounded">
                    {pixKey}
                  </code>
                  <button
                    onClick={copyPixKey}
                    className="text-yellow-500 hover:text-yellow-400"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <button
                onClick={processPayment}
                disabled={isProcessing}
                className="w-full bg-green-500 text-white px-6 py-4 rounded-lg font-bold hover:bg-green-600 transition-colors disabled:opacity-50"
              >
                {isProcessing ? 'Processando...' : 'Confirmar Pagamento'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Formulário principal
  return (
    <section id="booking" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Agende seu </span>
            <span className="text-yellow-500">Horário</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve seu horário de forma rápida e prática
          </p>
        </div>

        <form onSubmit={handleInitialSubmit} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Serviço */}
            <div>
              <label className="block text-white font-bold mb-3">
                <CreditCard className="inline w-5 h-5 mr-2" />
                Serviço
              </label>
              <select
                value={bookingData.service}
                onChange={(e) => handleInputChange('service', e.target.value)}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                required
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - R$ {service.price},00
                  </option>
                ))}
              </select>
            </div>

            {/* Data */}
            <div>
              <label className="block text-white font-bold mb-3">
                <Calendar className="inline w-5 h-5 mr-2" />
                Data
              </label>
              <input
                type="date"
                value={bookingData.date}
                onChange={(e) => handleInputChange('date', e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                required
              />
            </div>

            {/* Horário */}
            <div>
              <label className="block text-white font-bold mb-3">
                <Clock className="inline w-5 h-5 mr-2" />
                Horário
              </label>
              <select
                value={bookingData.time}
                onChange={(e) => handleInputChange('time', e.target.value)}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                required
                disabled={!bookingData.date}
              >
                <option value="">Selecione um horário</option>
                {getAvailableTimeSlots().map(({ time, available }) => (
                  <option 
                    key={time} 
                    value={time} 
                    disabled={!available}
                    style={{ color: available ? 'white' : 'red' }}
                  >
                    {time} {!available ? '(Ocupado)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Nome */}
            <div>
              <label className="block text-white font-bold mb-3">
                <User className="inline w-5 h-5 mr-2" />
                Nome Completo
              </label>
              <input
                type="text"
                value={bookingData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                placeholder="Seu nome completo"
                required
              />
            </div>

            {/* Telefone */}
            <div>
              <label className="block text-white font-bold mb-3">
                <Phone className="inline w-5 h-5 mr-2" />
                WhatsApp
              </label>
              <input
                type="tel"
                value={bookingData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-500 focus:outline-none"
                placeholder="(11) 99999-9999"
                required
              />
            </div>

            {/* Método de Pagamento */}
            <div className="md:col-span-2">
              <label className="block text-white font-bold mb-3">
                Método de Pagamento
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => handleInputChange('paymentMethod', method.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      bookingData.paymentMethod === method.id
                        ? 'border-yellow-500 bg-yellow-500/10'
                        : 'border-gray-600 hover:border-yellow-500/50'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2 text-white">
                      {method.icon}
                      <span>{method.name}</span>
                    </div>
                    {method.id === 'pix' && (
                      <p className="text-sm text-green-400 mt-2">5% de desconto</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-yellow-500 text-black px-6 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors text-lg"
          >
            Confirmar Agendamento
          </button>
        </form>

        {/* Debug info */}
        <div className="mt-4 p-4 bg-gray-800 rounded text-white text-sm">
          <p>📊 Debug: {existingBookings.length} agendamentos carregados</p>
          <p>💾 Persistência: Supabase</p>
          {bookingData.date && (
            <p>🕐 Horários disponíveis para {bookingData.date}: {getAvailableTimeSlots().filter(slot => slot.available).length}/11</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Booking;