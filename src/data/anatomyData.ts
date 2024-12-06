import { AnatomySystem } from '../types/anatomy';

export const systems: AnatomySystem[] = [
  {
    id: 'skeletal',
    name: 'Sistema Óseo',
    image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800',
    parts: [
      {
        id: 'skull',
        name: 'Cráneo',
        position: 'top-[10%] left-[50%] -translate-x-1/2',
        description: 'El cráneo protege el cerebro y da forma a la cara. Está compuesto por 22 huesos.',
        recommendations: [
          'Usar casco durante actividades de riesgo',
          'Mantener una buena postura para evitar tensión',
          'Consumir alimentos ricos en calcio y vitamina D'
        ]
      },
      {
        id: 'spine',
        name: 'Columna Vertebral',
        position: 'top-[40%] left-[50%] -translate-x-1/2',
        description: 'La columna vertebral protege la médula espinal y proporciona soporte estructural al cuerpo.',
        recommendations: [
          'Mantener una buena postura',
          'Realizar ejercicios de fortalecimiento',
          'Evitar cargar peso excesivo'
        ]
      }
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Sistema Cardiovascular',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800',
    parts: [
      {
        id: 'heart',
        name: 'Corazón',
        position: 'top-[30%] left-[45%]',
        description: 'El corazón es el músculo que bombea sangre a todo el cuerpo.',
        recommendations: [
          'Realizar ejercicio cardiovascular regularmente',
          'Mantener una dieta baja en grasas saturadas',
          'Controlar el estrés'
        ]
      },
      {
        id: 'arteries',
        name: 'Arterias',
        position: 'top-[50%] right-[30%]',
        description: 'Las arterias transportan sangre oxigenada desde el corazón al resto del cuerpo.',
        recommendations: [
          'Mantener niveles saludables de colesterol',
          'Evitar el tabaco',
          'Controlar la presión arterial'
        ]
      }
    ]
  },
  {
    id: 'digestive',
    name: 'Sistema Digestivo',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800',
    parts: [
      {
        id: 'stomach',
        name: 'Estómago',
        position: 'top-[45%] left-[50%] -translate-x-1/2',
        description: 'El estómago digiere los alimentos mediante ácidos y enzimas.',
        recommendations: [
          'Masticar bien los alimentos',
          'Evitar comidas muy condimentadas',
          'Mantener horarios regulares de comida'
        ]
      },
      {
        id: 'intestines',
        name: 'Intestinos',
        position: 'top-[60%] left-[50%] -translate-x-1/2',
        description: 'Los intestinos absorben nutrientes y eliminan desechos.',
        recommendations: [
          'Consumir suficiente fibra',
          'Mantenerse hidratado',
          'Incluir probióticos en la dieta'
        ]
      }
    ]
  },
  {
    id: 'nervous',
    name: 'Sistema Nervioso',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800',
    parts: [
      {
        id: 'brain',
        name: 'Cerebro',
        position: 'top-[15%] left-[50%] -translate-x-1/2',
        description: 'El cerebro es el centro de control del sistema nervioso.',
        recommendations: [
          'Dormir suficientes horas',
          'Realizar ejercicios mentales',
          'Mantener una dieta rica en omega-3'
        ]
      },
      {
        id: 'spinal-cord',
        name: 'Médula Espinal',
        position: 'top-[40%] left-[50%] -translate-x-1/2',
        description: 'La médula espinal conecta el cerebro con el resto del cuerpo.',
        recommendations: [
          'Mantener una buena postura',
          'Evitar movimientos bruscos',
          'Realizar ejercicios de estiramiento'
        ]
      }
    ]
  }
];