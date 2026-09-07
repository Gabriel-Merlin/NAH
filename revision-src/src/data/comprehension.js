// Compréhensions ORALE (écoute via synthèse vocale) et ÉCRITE, par niveau.
// Chaque activité : { id, type:'comprehension', lang, listen, level, topic, text,
//   questions:[{ q, choices, answer (index), explain }] }.
// La correction (bonnes réponses + transcription) s'affiche à la fin.

const mk = (o) => ({ type: 'comprehension', icon: o.listen ? '🎧' : '📖', ...o })

// ======================= ANGLAIS =======================
export const EN_COMPREHENSION = [
  mk({
    id: 'cmp-en-a2-read', lang: 'en', listen: false, level: 'A2', title: 'Read — My weekend',
    topic: 'My weekend',
    text: `On Saturday morning, I get up at nine o'clock. I have breakfast with my family and then I do my homework. In the afternoon, I play football with my friends in the park. On Sunday, we visit my grandparents. My grandmother cooks a big lunch and we eat together. I love the weekend because I can relax and see the people I love.`,
    questions: [
      { q: 'What time does the writer get up on Saturday?', choices: ['At 7', 'At 9', 'At 11'], answer: 1, explain: '“I get up at nine o’clock.”' },
      { q: 'What does the writer do on Saturday afternoon?', choices: ['Homework', 'Play football', 'Visit grandparents'], answer: 1, explain: 'Football in the park in the afternoon.' },
      { q: 'Who cooks lunch on Sunday?', choices: ['The writer', 'The mother', 'The grandmother'], answer: 2, explain: '“My grandmother cooks a big lunch.”' },
      { q: 'Why does the writer love the weekend?', choices: ['To work', 'To relax and see loved ones', 'To travel'], answer: 1, explain: '“I can relax and see the people I love.”' },
    ],
  }),
  mk({
    id: 'cmp-en-a2-listen', lang: 'en', listen: true, level: 'A2', title: 'Listen — At the shop',
    topic: 'At the shop',
    text: `Hello! Can I help you? Yes, please. I am looking for a blue T-shirt. What size do you need? Medium, please. Here you are. It costs fifteen pounds. Can I pay by card? Of course. Thank you very much. Have a nice day!`,
    questions: [
      { q: 'What is the customer looking for?', choices: ['A blue T-shirt', 'A red jacket', 'Blue jeans'], answer: 0, explain: '“a blue T-shirt”.' },
      { q: 'What size does the customer want?', choices: ['Small', 'Medium', 'Large'], answer: 1, explain: '“Medium, please.”' },
      { q: 'How much does it cost?', choices: ['£15', '£50', '£13'], answer: 0, explain: '“It costs fifteen pounds.”' },
      { q: 'How does the customer pay?', choices: ['Cash', 'By card', 'By cheque'], answer: 1, explain: '“Can I pay by card?”' },
    ],
  }),
  mk({
    id: 'cmp-en-b1-read', lang: 'en', listen: false, level: 'B1', title: 'Read — A summer job',
    topic: 'A summer job',
    text: `Last summer, Emma worked in a small café by the sea. She started early, at seven in the morning, and served coffee to tourists. The job was tiring but she earned enough money to buy a new laptop. She also improved her English because many customers came from abroad. At the end of August, the owner offered her a job for the next summer. Emma was proud: it was her first real work experience.`,
    questions: [
      { q: 'Where did Emma work?', choices: ['In a shop', 'In a café by the sea', 'In an office'], answer: 1, explain: '“a small café by the sea”.' },
      { q: 'What did she buy with her money?', choices: ['A phone', 'A laptop', 'A bike'], answer: 1, explain: '“to buy a new laptop”.' },
      { q: 'Why did her English improve?', choices: ['She took a class', 'Customers came from abroad', 'She read books'], answer: 1, explain: '“many customers came from abroad”.' },
      { q: 'What did the owner offer at the end?', choices: ['More money', 'A job next summer', 'A holiday'], answer: 1, explain: '“offered her a job for the next summer”.' },
    ],
  }),
  mk({
    id: 'cmp-en-b1-listen', lang: 'en', listen: true, level: 'B1', title: 'Listen — Booking a room',
    topic: 'Booking a hotel room',
    text: `Good evening, Sea View Hotel, how can I help you? Hello, I'd like to book a double room for two nights, please. Certainly. When would you like to arrive? On Friday the tenth. And how many people? Two adults. The room is ninety euros per night, breakfast included. That's fine. Could I have your name, please? Yes, it's David Miller. Perfect, your room is booked. See you on Friday!`,
    questions: [
      { q: 'What type of room does the man want?', choices: ['A single room', 'A double room', 'A family room'], answer: 1, explain: '“a double room”.' },
      { q: 'How many nights?', choices: ['One', 'Two', 'Three'], answer: 1, explain: '“for two nights”.' },
      { q: 'What is included in the price?', choices: ['Dinner', 'Breakfast', 'Parking'], answer: 1, explain: '“breakfast included”.' },
      { q: 'When will the man arrive?', choices: ['Friday the 10th', 'Saturday', 'Sunday'], answer: 0, explain: '“On Friday the tenth.”' },
    ],
  }),
  mk({
    id: 'cmp-en-b2-read', lang: 'en', listen: false, level: 'B2', title: 'Read — Remote work',
    topic: 'Remote work',
    text: `Since the pandemic, remote work has become common in many companies. Employees who work from home often say they are more productive and save time because they no longer commute. However, remote work also has drawbacks. Some workers feel isolated and find it harder to separate their professional and personal lives. To address these issues, many firms now offer a hybrid model: staff spend a few days in the office and the rest at home. Managers must learn to trust their teams and to measure results rather than hours.`,
    questions: [
      { q: 'What is one advantage of remote work mentioned?', choices: ['Higher salary', 'No commuting', 'More holidays'], answer: 1, explain: '“they no longer commute”.' },
      { q: 'What is a drawback?', choices: ['Feeling isolated', 'Too many meetings', 'Lower wages'], answer: 0, explain: '“Some workers feel isolated”.' },
      { q: 'What is the “hybrid model”?', choices: ['Only working at home', 'A mix of office and home', 'Working at night'], answer: 1, explain: '“a few days in the office and the rest at home”.' },
      { q: 'What should managers focus on?', choices: ['Hours worked', 'Results', 'Attendance'], answer: 1, explain: '“measure results rather than hours”.' },
    ],
  }),
  mk({
    id: 'cmp-en-b2-listen', lang: 'en', listen: true, level: 'B2', title: 'Listen — Job interview',
    topic: 'A job interview',
    text: `Thank you for coming today. Could you tell me about yourself? Of course. I recently graduated in business management and I did a six-month internship in marketing. Why do you want to work for our company? I admire your brand and I believe my digital skills could help you reach younger customers. What is your greatest weakness? Sometimes I focus too much on details, but I am learning to manage my time better. Great. We will contact you next week.`,
    questions: [
      { q: 'What did the candidate study?', choices: ['Law', 'Business management', 'Engineering'], answer: 1, explain: '“I recently graduated in business management”.' },
      { q: 'How long was the internship?', choices: ['Three months', 'Six months', 'One year'], answer: 1, explain: '“a six-month internship”.' },
      { q: 'Why does the candidate want the job?', choices: ['High salary', 'To reach younger customers with digital skills', 'Short hours'], answer: 1, explain: '“my digital skills could help you reach younger customers”.' },
      { q: 'What weakness does the candidate mention?', choices: ['Being late', 'Focusing too much on details', 'Poor English'], answer: 1, explain: '“I focus too much on details”.' },
    ],
  }),
]

// ======================= ESPAGNOL =======================
export const ES_COMPREHENSION = [
  mk({
    id: 'cmp-es-a2-read', lang: 'es', listen: false, level: 'A2', title: 'Lectura — Mi familia',
    topic: 'Mi familia',
    text: `Me llamo Lucía y tengo dieciséis años. Vivo en Sevilla con mis padres y mi hermano pequeño. Mi padre es médico y mi madre trabaja en un banco. Los fines de semana comemos todos juntos y por la tarde paseamos por el parque. Me gusta mucho mi familia porque siempre me ayuda.`,
    questions: [
      { q: '¿Cuántos años tiene Lucía?', choices: ['14', '16', '18'], answer: 1, explain: '“tengo dieciséis años”.' },
      { q: '¿Dónde vive?', choices: ['En Madrid', 'En Sevilla', 'En Valencia'], answer: 1, explain: '“Vivo en Sevilla”.' },
      { q: '¿Qué hace su madre?', choices: ['Es médica', 'Trabaja en un banco', 'Es profesora'], answer: 1, explain: '“mi madre trabaja en un banco”.' },
      { q: '¿Qué hacen los fines de semana?', choices: ['Comen juntos', 'Van al cine', 'Trabajan'], answer: 0, explain: '“comemos todos juntos”.' },
    ],
  }),
  mk({
    id: 'cmp-es-a2-listen', lang: 'es', listen: true, level: 'A2', title: 'Escucha — En el restaurante',
    topic: 'En el restaurante',
    text: `Buenas tardes. ¿Qué desea comer? De primero, una ensalada, por favor. Muy bien. ¿Y de segundo? Pollo con patatas. ¿Para beber? Agua, por favor. ¿Quiere postre? Sí, un helado de chocolate. Enseguida se lo traigo. Muchas gracias.`,
    questions: [
      { q: '¿Qué pide de primero el cliente?', choices: ['Una sopa', 'Una ensalada', 'Pasta'], answer: 1, explain: '“una ensalada”.' },
      { q: '¿Qué pide de segundo?', choices: ['Pescado', 'Pollo con patatas', 'Carne'], answer: 1, explain: '“Pollo con patatas”.' },
      { q: '¿Qué quiere beber?', choices: ['Vino', 'Agua', 'Zumo'], answer: 1, explain: '“Agua, por favor”.' },
      { q: '¿Qué postre pide?', choices: ['Fruta', 'Helado de chocolate', 'Tarta'], answer: 1, explain: '“un helado de chocolate”.' },
    ],
  }),
  mk({
    id: 'cmp-es-b1-read', lang: 'es', listen: false, level: 'B1', title: 'Lectura — Un intercambio',
    topic: 'Un intercambio escolar',
    text: `El año pasado, Marco participó en un intercambio con un instituto de Barcelona. Vivió dos semanas en casa de una familia española y asistió a clases en catalán y en castellano. Al principio le costó entender, pero poco a poco mejoró su nivel. Además, hizo nuevos amigos y descubrió la comida mediterránea. Cuando volvió a Francia, decidió seguir estudiando español para poder viajar por Latinoamérica algún día.`,
    questions: [
      { q: '¿Dónde fue Marco de intercambio?', choices: ['A Madrid', 'A Barcelona', 'A México'], answer: 1, explain: '“un instituto de Barcelona”.' },
      { q: '¿Cuánto tiempo se quedó?', choices: ['Una semana', 'Dos semanas', 'Un mes'], answer: 1, explain: '“Vivió dos semanas”.' },
      { q: '¿Qué le costó al principio?', choices: ['Hacer amigos', 'Entender', 'Comer'], answer: 1, explain: '“le costó entender”.' },
      { q: '¿Qué decidió al volver?', choices: ['Dejar el español', 'Seguir estudiando español', 'Vivir en España'], answer: 1, explain: '“decidió seguir estudiando español”.' },
    ],
  }),
  mk({
    id: 'cmp-es-b1-listen', lang: 'es', listen: true, level: 'B1', title: 'Escucha — De compras',
    topic: 'De compras',
    text: `Hola, ¿en qué puedo ayudarle? Busco unos zapatos negros para el trabajo. ¿Qué número calza? El cuarenta y dos. Estos son muy cómodos y cuestan sesenta euros. ¿Puedo probármelos? Claro, aquí tiene. Me quedan bien, me los llevo. ¿Paga en efectivo o con tarjeta? Con tarjeta, gracias.`,
    questions: [
      { q: '¿Qué busca el cliente?', choices: ['Zapatos negros', 'Una camisa', 'Un bolso'], answer: 0, explain: '“unos zapatos negros para el trabajo”.' },
      { q: '¿Qué número calza?', choices: ['40', '42', '44'], answer: 1, explain: '“El cuarenta y dos”.' },
      { q: '¿Cuánto cuestan?', choices: ['16 €', '60 €', '66 €'], answer: 1, explain: '“cuestan sesenta euros”.' },
      { q: '¿Cómo paga?', choices: ['En efectivo', 'Con tarjeta', 'Con cheque'], answer: 1, explain: '“Con tarjeta, gracias”.' },
    ],
  }),
  mk({
    id: 'cmp-es-b2-read', lang: 'es', listen: false, level: 'B2', title: 'Lectura — El comercio electrónico',
    topic: 'El comercio electrónico',
    text: `El comercio electrónico ha transformado la manera de consumir. Hoy en día, muchos clientes prefieren comprar por internet porque pueden comparar precios y recibir los productos en casa. Sin embargo, este crecimiento plantea retos: la protección de los datos personales, el impacto medioambiental de las entregas y la competencia para las pequeñas tiendas del centro. Para sobrevivir, muchos comercios locales han creado su propia página web y ofrecen la recogida en tienda.`,
    questions: [
      { q: '¿Por qué prefieren comprar por internet muchos clientes?', choices: ['Es más caro', 'Pueden comparar precios y recibir en casa', 'Es más lento'], answer: 1, explain: '“pueden comparar precios y recibir los productos en casa”.' },
      { q: '¿Cuál es uno de los retos citados?', choices: ['La protección de los datos', 'La falta de productos', 'El exceso de tiendas'], answer: 0, explain: '“la protección de los datos personales”.' },
      { q: '¿A quién hace competencia el comercio electrónico?', choices: ['A los bancos', 'A las pequeñas tiendas del centro', 'A los transportes'], answer: 1, explain: '“la competencia para las pequeñas tiendas”.' },
      { q: '¿Qué hacen los comercios locales para sobrevivir?', choices: ['Cerrar', 'Crear su web y ofrecer recogida en tienda', 'Bajar los sueldos'], answer: 1, explain: '“han creado su propia página web y ofrecen la recogida en tienda”.' },
    ],
  }),
  mk({
    id: 'cmp-es-b2-listen', lang: 'es', listen: true, level: 'B2', title: 'Escucha — Entrevista de trabajo',
    topic: 'Una entrevista de trabajo',
    text: `Gracias por venir. ¿Puede hablarme de su experiencia? Claro. Terminé mis estudios de gestión y realicé unas prácticas en una empresa de marketing durante seis meses. ¿Por qué quiere trabajar aquí? Admiro su empresa y creo que mis conocimientos digitales pueden ayudar a atraer a clientes jóvenes. ¿Cuál es su mayor defecto? A veces soy demasiado perfeccionista, pero estoy aprendiendo a organizar mejor mi tiempo. Muy bien, le llamaremos la semana que viene.`,
    questions: [
      { q: '¿Qué estudió el candidato?', choices: ['Derecho', 'Gestión', 'Medicina'], answer: 1, explain: '“mis estudios de gestión”.' },
      { q: '¿Cuánto duraron las prácticas?', choices: ['Tres meses', 'Seis meses', 'Un año'], answer: 1, explain: '“durante seis meses”.' },
      { q: '¿Cómo puede ayudar a la empresa?', choices: ['Con conocimientos digitales', 'Con más horas', 'Con un salario bajo'], answer: 0, explain: '“mis conocimientos digitales pueden ayudar a atraer a clientes jóvenes”.' },
      { q: '¿Cuál es su defecto?', choices: ['Llega tarde', 'Es demasiado perfeccionista', 'Habla poco'], answer: 1, explain: '“soy demasiado perfeccionista”.' },
    ],
  }),
]

// Index de niveau pour le rangement en sous-chapitres (0 = A2, 1 = B1, 2 = B2).
export const LEVEL_INDEX = { A2: 0, B1: 1, B2: 2 }
