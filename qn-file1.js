var quiz=[];

var quiz_1=[
	{
		question: 'பஞ்சமி என்னும் திதி எந்த எண்ணை குறிக்கிறது?',
		a: 'ஒன்று',
		b: 'ஐந்து',
		c: 'நான்கு',
		d: 'ஒன்பது',
		correct: 'b',
		e_question: 'Which number is refered the panjami thidhi?',
		e_a: 'One',
		e_b: 'Five',
		e_c: 'Four',
		e_d: 'Nine',
		e_correct: 'e_b',
		hint:'பஞ்சபூதங்கள் என்பது நீர், நிலம், நெருப்பு, காற்று, ஆகாயம் ஆகியனவாகும்.'
	},
	{
		question: '"கர்ணத்தின் வர்க்கம் ஆனது எதிர்ப்பக்கம் மற்றும் அடுத்துள்ள பக்கத்தின் வர்க்கத்தின் கூடுதலுக்கு சமம்" என்பது எந்த தேற்றத்தில் இடம்பெறும்?',
		a: 'பெர்னௌலி தேற்றம்',
		b: 'ஆர்க்கிமிடிஸ் தேற்றம்',
		c: 'பிதாகரஸ் தேற்றம்',
		d: 'கால்மார்க்ஸ் தேற்றம்',
		correct: 'c',
		e_question: 'Which theorem having this purticular thing, "The square of the hypotenuse side is equal to the sum of squares of the other two sides"?',
		e_a: 'Bernoulli\'s Theorem',
		e_b: 'Archimedes Theorem',
		e_c: 'Pythagorus Theorem',
		e_d: 'Karlmarx Theorem',
		e_correct: 'e_c',
		hint: 'பதிலின் ஒரு வார்த்தையில் தந்தையின் மறுபெயர் இருக்கும்.'
	},
	{
		question: 'பின்வரும் நபர்களில் வேறு விளையாட்டை சேர்ந்தவர் யார்?',
		a: 'விராட் கோலி',
		b: 'யுவராஜ் சிங்',
		c: 'ரோகித் ஷர்மா',
		d: 'விஸ்வநாதன் ஆனந்த்',
		correct: 'd',
		e_question: 'Who is odd game person in below?',
		e_a: 'Virat kohli',
		e_b: 'Yuvaraj sing',
		e_c: 'Rohith Sharma',
		e_d: 'Visvanathan ananth',
		e_correct: 'e_d',
		hint: 'பதிலுக்கானவர் சதுரங்க விளையாட்டை சேர்ந்தவர்'
	},
    {
		question: 'சிவப்பு நிற மின் விளக்கு எரியும் அறையில் பச்சை நிற இலை எந்த நிறத்தில் தெரியும்?',
		a: 'சிவப்பு',
		b: 'பச்சை',
		c: 'கருப்பு',
		d: 'மஞ்சள்',
		correct: 'c',
		e_question: 'Which color is visible a green color leaf in a red color electric bulb lighted in a room?',
		e_a: 'Red',
		e_b: 'Green',
		e_c: 'Black',
		e_d: 'Yellow',
		e_correct: 'e_c',
		hint: 'சிவப்பு நிற ஒளியில் மற்ற நிற பொருட்களில் நிறத்தை வெளிவிடாது.'
	},
	{
		question: 'நடிகர் சூர்யாவின் இயற்பெயர் என்ன?',
		a: 'சரவணன்',
		b: 'முருகன்',
		c: 'சூர்யப்பெருமாள்',
		d: 'கார்த்திகேயன்',
		correct: 'a',
		e_question: 'What is actor surya\'s real name?',
		e_a: 'Saravanan',
		e_b: 'Murugan',
		e_c: 'Surya perumal',
		e_d: 'Karthigeyan',
		e_correct: 'e_a',
		hint: 'பதில் முருகனின் மறுபெயர் ஆனால் நிஜ பெயர் அல்ல.'
	},
	{
		question: 'இந்தியாவின் தற்போதைய குடியரசு தலைவர் பெயர் என்ன?',
		a: 'மன்மோகன் சிங்',
		b: 'நரேந்திர மோடி',
		c: 'ராம் நாத் கோவிந்',
		d: 'பிரதீபா பாட்டில்',
		correct: 'c',
		e_question: 'What is the current president name in india?',
		e_a: 'Manmohan sing',
		e_b: 'Narendira modi',
		e_c: 'Ram nath kovind',
		e_d: 'Pratibha patil',
		e_correct: 'e_c',
		hint: 'முதல் இருவர் பிரதமர். கடை இருவர் ஜனாதிபதி.'	
	},
	{
		question: 'மகாபாரதத்தில் குருட்ஷேத்திரப்போரில் கர்ணனுக்கு தேரோட்டியாக இருந்தவர் யார்?',
		a: 'சல்லியன்',
		b: 'அஸ்வத்தாமன்',
		c: 'சிகண்டி',
		d: 'விதுரன்',
		correct: 'a',
		e_question: 'Who is the chariot driver for karnan in kurukchetha war in mahabaratha?',
		e_a: 'Salliyan',
		e_b: 'Asvathaman',
		e_c: 'Sigandi',
		e_d: 'Vithuran',
		e_correct: 'e_a',
		hind: 'போரில் கர்ணனுக்கு பிறகு தளபதியாய் இருந்தவர் கர்ணன் இருக்கும் போது தேரோட்டியாய் இருந்தார்.'
	}
	
];

var quiz_2=[
	{
		question: 'ஜாதகக்கட்டத்தில் ராசியை குறிக்கும் கிரகம் எது?',
		a: 'சூரியன்',
		b: 'சந்திரன்',
		c: 'செவ்வாய்',
		d: 'சனி',
		correct: 'b',
		e_question: 'Which planet is refered the zodiac sign in astrology?',
		e_a: 'Sun',
		e_b: 'Moon',
		e_c: 'Mars',
		e_d: 'Saturn',
		e_correct: 'e_b',
		hint: 'தலைக்கோள் பிறந்த மாதத்தையும் துணைக்கோள் ராசியையும் குறிக்கும் என்பது ஜாதகக்கட்டத்தின் அம்சமாகும்.'
	},
	{
		question: '"2 * 3 + 8 / 4 - 2" என்ற கணித சமன்பாட்டிற்கு சரியான பதில் எது?',
		a: '5',
		b: '6',
		c: '7',
		d: 'இவற்றில் எதுவும் இல்லை',
		correct: 'b',
		e_question: 'Which is the correct answer of this mathematical equation, "2 * 3 + 8 / 4 - 2"?',
		e_a: '5',
		e_b: '6',
		e_c: '7',
		e_d: 'None of the above',
		e_correct: 'e_b',
		hint: 'சன்முகம் என்பது எத்தனை முகத்தை குறிக்குமோ அந்த எண்.'

	},
	{
		question: 'பின்வரும் நபர்களில் யார் இசையமைப்பாளர் இல்லை?',
		a: 'விஜய் ஆண்டனி',
		b: 'ஸ்ருதி ஹாசன்',
		c: 'ஆண்டனி',
		d: 'சிலம்பரசன்',
		correct: 'c',
		e_question: 'Who is not a music director in below?',
		e_a: 'Vijay antony',
		e_b: 'Shruthi haasan',
		e_c: 'Antony',
		e_d: 'Silambarasan',
		e_correct: 'e_c',
		hint: 'ஸ்ருதி ஹாசன் "உன்னை போல் ஒருவன்" திரைப்படத்திற்கும் சிலம்பரசன் "சக்க போடு போடு ராஜா" திரைப்படத்திற்கும் இசையமைத்துள்ளார்.'
	},
    {
		question: ' பின்வரும் நிறங்களில் அதிக அலைநீளம் கொண்டது எது?',
		a: 'சிவப்பு',
		b: 'ஊதா',
		c: 'நீலம்',
		d: 'பச்சை',
		correct: 'a',
		e_question: 'Which is the highest wavelength in below color?',
		e_a: 'Red',
		e_b: 'Violet',
		e_c: 'Blue',
		e_d: 'Green',
		e_correct: 'e_a',
		hint: 'ஏழு நிங்களில் இறுதியானது அதிக அலை நீளம் கொண்டது.'
	}, 
 	{
		question: '"உன்னோடு நான் இருந்த ஒவ்வொரு மணித்துளியும் மரணப்படுக்கையிலும் மறக்காது கண்மனியே" என்ற வசனம் இடம் பெறும் திரைப்படம் எது?',
		a: 'அஞ்சலி',
		b: 'இருவர்',
		c: 'மௌன ராகம்',
		d: 'மின்னலே',
		correct: 'b',
		e_question: 'In which movie this dialogue is presented, "Unnodu naan vazhum ovvoru manithuliyum marana padykkaiyilum marakaadhu kanmaniye"?',
		e_a: 'Anjali',
		e_b: 'Iruvar',
		e_c: 'Mouna raagam',
		e_d: 'Minnale',
		e_correct: 'e_b',
		hint: 'இயக்குனர் - மனிரத்னம், நடிகர் - பிரகாஷ் ராஜ், குரல் கொடுத்தவர் - அரவிந்த் சாமி '
	},
    {
		question: 'சிங்கப்பூரில் சுதந்திர தினம் எந்த தேதியில் கொண்டாடப்படுகிறது?',
		a: 'ஆகஸ்ட் 15',
		b: 'செப்டம்பர் 19',
		c: 'ஆகஸ்ட் 9',
		d: 'ஜனவரி 26',
		correct: 'c',
		e_question: 'Which day is celebrated as a indepence day in singapore?',
		e_a: 'August 15',
		e_b: 'September 19',
		e_c: 'August 9',
		e_d: 'Janaury 26',
		e_correct: 'e_c',
		hint: 'இந்திய சுதந்திர தினத்திற்கு சில தினங்களுக்கு முன்பு.'
	},
	
	{
		question: 'ராமாயணத்தில் தன் வலிமையை பிறர் சொல்லும் வரை அறியாதிருக்கும் சாபம் பெற்றவர் யார்?',
		a: 'ராவணன்',
		b: 'அனுமான்',
		c: 'வாலி',
		d: 'கும்ப கர்ணன்',
		correct: 'b',
		e_question: 'Who is got a curse that can\'t know own power until other tell in ramayana?',
		e_a: 'Ravanan',
		e_b: 'Anuman',
		e_c: 'Vaali',
		e_d: 'Kumba karnan',
		e_correct: 'e_b',
		hint: 'குரங்கு போல் காட்சி அளிப்பவர்.'
	}
];

var quiz_3=[
	{
		question: '"பதினாறும் பெற்று ____________ வாழ்க". இதில் விடுபட்ட சொல் எது?',
		a: 'நிம்மதியாக',
		b: 'பெருவாழ்வு',
		c: 'அமைதியாக',
		d: 'வெற்றியுடன்',
		correct: 'b',
		e_question: '"Padhinarum petru ____________ Vazhga." What is the missed word is this sentence?',
		e_a: 'Nimmadhiyaga',
		e_b: 'Peruvazhvu',
		e_c: 'Amaidhiyaga',
		e_d: 'Vetriyudan',
		e_correct: 'e_b',
		hint:'ஒரு பதிலில் மீத மூன்றும் அடங்கும்.'
	},
	{
		question: 'பின்வருவனவற்றில் எந்த விளையாட்டை வீட்டின் உள்ளே விளையாட முடியாது?',
		a: 'பல்லாங்குழி',
		b: 'தாயம்',
		c: 'ஆடு புலி ஆட்டம்',
		d: 'பட்டம்',
		correct: 'd',
		e_question: 'Which game is can\'t play in outside of given below?',
		e_a: 'Pallanguzhi',
		e_b: 'Thaayam',
		e_c: 'Aadu puli aattam',
		e_d: 'Kite',
		e_correct: 'e_d',
		hint:'காற்றின் துணை கொண்டு விளையாடுவது.'
	},
	{
		question: 'பின்வரும் துறைகளில் இந்தியாவில் எந்த துறை PAN அட்டையை வெளியிட்டது?',
		a: 'காவல் துறை',
		b: 'மின்சார துறை',
		c: 'தகவல் தொடர்பு துறை',
		d: 'வருமான வரி துறை',
		correct: 'd',
		e_question: 'In below department which is released the PAN card in india?',
		e_a: 'Police department',
		e_b: 'Electrical department',
		e_c: 'Information technology department',
		e_d: 'Income tax department',
		e_correct: 'e_d',
		hint:'PAN அட்டை வரி சார்ந்த ஒன்று.'
	},
	{
		question: 'பின்வருவனவற்றில் அரிசியின் ஒரு வகை எது?',
		a: 'பொன்னி',
		b: 'சுகிமா',
		c: 'அகிம்சா',
		d: 'பஷ்மினா',
		correct: 'a',
		e_question: 'Which is a variety of rice in below?',
		e_a: 'Ponni',
		e_b: 'Suhima',
		e_c: 'Ahimsa',
		e_d: 'Pashmina',
		e_correct: 'e_a',
		hint:'தங்கத்தின் மறு பெயரில் பதிலின் பாதி.'
	},
	{
		question: ' பின்வரும் பெண்ணினங்களில் மனிதர்களின் இரத்தத்தை வேட்டையாடும் உயிரினம் எது?',
		a: 'வௌவால்',
		b: 'தேனீ',
		c: 'உண்ணி',
		d: 'கொசு',
		correct: 'd' ,
		e_question: 'In below female thing which is hunt the human blood?',
		e_a: 'Bat',
		e_b: 'Bee',
		e_c: 'Flea',
		e_d: 'Mosqouto',
		e_correct: 'e_d',
		hint:'ஒரு முறைக்கு ஒன்பது லட்சம் முட்டைகளை இடும் உயிரி.'
	}, 
 	{
		question: '"உன்னோடு நான் வாழும் ஒவ்வொரு மணித்துளியும் மரணப்படுக்கையிலும் மறக்காது கண்மனியே" என்ற வசனம் இடம் பெற்ற திரைப்படத்தின் இயக்குனர் யார்?',
		a: 'மனிரத்னம்',
		b: 'ஷங்கர்',
		c: 'கௌதம் வாசுதேவ் மேனன்',
		d: 'பாரதி ராஜா',
		correct: 'a',
		e_question: 'Who is the director of the movie of this dialogue, "Unnodu naan vazhum ovvoru manithuliyum marana padykkaiyilum marakaadhu kanmaniye"?',
		e_a: 'Manirathnam',
		e_b: 'Shankar',
		e_c: 'Goutham vasudev menon',
		e_d: 'Barathi raja',
		e_correct: 'e_a',
		hint: 'திரைப்படம் - இருவர்'
	},
	{
		question: 'பின்வருவனவற்றில் விஷ்ணுவின் எந்த அவதாரம் ஆமை வடிவம் பெற்றது?',
		a: 'மச்ச அவதாரம்',
		b: 'கூர்ம அவதாரம்',
		c: 'வராக அவதாரம்',
		d: 'நரசிம்ம அவதாரம்',
		correct: 'b',
		e_question: 'Which is a turtle form in vishnu\'s avathar in below?',
		e_a: 'Macha avathar',
		e_b: 'Koorma avathar',
		e_c: 'Varaha avathar',
		e_d: 'Narasimha avathar',
		e_correct: 'e_b',
		hint:'பத்து அவதாரங்களில் இரண்டாவது.'
	}

]

var quiz_4=[
	{
		question:'பின்வரும் பாடலாசிரியர்களில் மலரின் பெயர் கொண்டவர் யார் ?',
		a: 'வைரமுத்து',
		b: 'தாமரை',
		c: 'வாலி',
		d: 'நா.முத்துக்குமார்',
		correct: 'b',
		e_question: 'Which Lyrisist having a flower name in below?',
		e_a: 'Vairamuthu',
		e_b: 'Thamarai',
		e_c: 'Vaali',
		e_d: 'Na.Muthukumar',
		e_correct: 'e_b',
		hint: 'நவரத்தின பெயரில் உள்ளவர் அல்ல.'
	},
	{
		question:'பின்வரும் ஊர்களில் நாயின் பெயர் கொண்ட ஊர் எது ?',
		a: 'ராஜபாளயம்',
		b: 'சேலம்',
		c: 'கோவை',
		d: 'ஊட்டி',
		correct: 'a',
		e_question: 'In below Which place is having a dog name?',
		e_a: 'Rajapalayam',
		e_b: 'Selam',
		e_c: 'Kovai',
		e_d: 'Ooty',
		e_correct: 'e_a',
		hint:'மன்னரின் ஒரு பெயர் பதிலின் ஒரு பாதி. '
	},
	{
		question:'உடம்பில் "Gastric Ulcer"ஆல் பாதிக்க கூடிய பாகம் எது?',
		a: 'நுரையீரல்',
		b: 'இதயம்',
		c: 'வயிறு',
		d: 'கல்லீரல்',
		correct: 'c',
		e_question: 'Which part will affect for "Gastric Ulcer" in body?',
		e_a: 'Lungues',
		e_b: 'Heart',
		e_c: 'Stomach',
		e_d: 'Liver',
		e_correct: 'e_c',
		hint:'பதில் கடை இரண்டில் ஒன்று.'
	},
	{
		question:'விவசாய நிலம் சார்ந்த இடம் எவ்வாறு வகைபடுத்தப்பட்டுள்ளது?',
		a: 'குறிஞ்சி',
		b: 'முல்லை',
		c: 'மருதம்',
		d: 'நெய்தல்',
		correct: 'c',
		e_question: 'How differentiated the forming based land?',
		e_a: 'Kurinji',
		e_b: 'Mullai',
		e_c: 'Marutham',
		e_d: 'Neithal',
		e_correct: 'e_c',
		hint:'குறிஞ்சி - மலையும் மலை சார்ந்த இடமும், முல்லை - காடும் காடு சார்ந்த இடமும்.'
	},
	{
		question:'பின்வரும் உடல் பாகங்களில் எது "சிரம்" என்று அழைக்கப்படுகிறது?',
		a: 'கால்',
		b: 'தலை',
		c: 'கை',
		d: 'பாதம்',
		correct: 'b',
		e_question: 'Which is called as "Siram" in below body parts?',
		e_a: 'Leg',
		e_b: 'Head',
		e_c: 'Hand',
		e_d: 'Feet',
		e_correct: 'e_b',
		hint:'சிரம் கரம் புறம் நீட்டாதே என்று பேருந்தில் எழுதியிருக்கும்.'
	},
	{
		question:'பின்வரும் மாவட்டங்களில் எதில் சிப்பியை காண முடியாது?',
		a: 'கன்னியாகுமரி',
		b: 'சென்னை',
		c: 'காஞ்சிபுரம்',
		d: 'ஈரோடு',
		correct: 'd',
		e_question: 'In below district in which place we can\'t see oysters?',
		e_a: 'Kanniyakumari',
		e_b: 'Chennai',
		e_c: 'Kanchipuram',
		e_d: 'Erode',
		e_correct: 'e_d',
		hint:'சிப்பி கடரோர மாவட்டங்களிலும் அதற்கு அருகில் உள்ள மாவட்டங்களிலும் காணப்படும்.'
	},

	{
		question: 'பின்வரும் இ.பி.கோ.  பிரிவுகளில் "ஏமாற்றுவது" எதன் கீழ் வரும்?',
		a: '420',
		b: '100',
		c: '123',
		d: '234',
		correct: 'a',
		e_question: 'Which section is refered as "Cheeting" in below IPC section',
		e_a: '420',
		e_b: '100',
		e_c: '123',
		e_d: '234',
		e_correct: 'e_a',
		hint:'திருடனை இப்படியும் கூறுவர்.'
	}
];

var quiz_5=[
	{
		question:'புலி பசித்தாலும் எதை தின்னாது?',
		a: 'மாமிசம்',
		b: 'புல்',
		c: 'மஞ்சள்',
		d: 'அரிசி',
		correct: 'b',
		e_question: 'Which thing The tiger is not eat even it is hungry?',
		e_a: 'Meat',
		e_b: 'Grass',
		e_c: 'Turmaric',
		e_d: 'Rice',
		e_correct: 'e_b',
		hint:'ஆடு மாடு உண்ணும் சைவப்பொருளை உண்ணாது என்பது பொருள்.'
	},
	{
		question:'பின்வரும் இடங்களில் எதில் உள்ளே நுழைய platform ticket வைத்திருக்க வேண்டும்?',
		a: 'பேருந்து நிலையம்',
		b: 'ரயில் நிலையம்',
		c: 'விமான நிலையம்',
		d: 'தியேட்டர்',
		correct: 'b',
		e_question: 'In below place, Which must having platform ticket for enter inside it?',
		e_a: 'Bus stand',
		e_b: 'Railway station',
		e_c: 'Airport',
		e_d: 'Theater',
		e_correct: 'e_b',
		hint:'பயணச்சீட்டும் அல்ல இருக்கை சீட்டும் அல்ல.'
	},
	{
		question:'"இவன் தீ என்று புரிகிறதா"  என்ற வரிகள் கொண்ட பாடலை இசையமைத்தவர் யார்?',
		a: 'இளைய ராஜா',
		b: 'ஷங்கர் எஹ்சான் லாய்',
		c: 'A.R.ரஹ்மான்',
		d: 'ஹாரிஸ் ஜெயராஜ்',
		correct: 'b',
		e_question: 'Who is composed this line having song, "Ivan thee endru therigiratha"?',
		e_a: 'Ilaiya raja',
		e_b: 'Shankar ehsan loy',
		e_c: 'A.R.Rahman',
		e_d: 'Harris jayaraj',
		e_correct: 'e_b',
		hint:'தமிழகத்தின் இயக்குனரின் பெயர் இவர் பெயரில் உண்டு.'
	},
	{
		question:'பின்வரும் மாவட்டங்களில் எதில் அதன் எல்லையை ஆந்திராவுடன் பகிர முடியாது?',
		a: 'திருவள்ளுர்',
		b: 'தர்மபுரி',
		c: 'வேலூர்',
		d: 'கிருஷ்ணகிரி',
		correct: 'b',
		e_question: 'In below district which is can\'t share its border with andhra?',
		e_a: 'Thiruvalluvar',
		e_b: 'Dharmapuri',
		e_c: 'Vellore',
		e_d: 'Krishnagiri',
		e_correct: 'e_b',
		hint: 'ஒரு திரைப்படம்'
	},
	{
		question:'ஒரு மாதத்தின் 13ஆம் நாள் வெள்ளிக்கிழமை என்றால் அம்மாதத்தின் முதல் நாள் எந்த கிழமை?',
		a: 'வெள்ளி',
		b: 'புதன்',
		c: 'திங்கள்',
		d: 'ஞாயிறு',
		correct: 'd',
		e_question: 'If a 13th day of month is friday, then what is first day of that month?',
		e_a: 'Friday',
		e_b: 'Wednesday',
		e_c: 'Monday',
		e_d: 'Sunday',
		e_correct: 'e_d',
		hint:'1ஆம் நாள் வரும் கிழமை 8, 15, 22, 29 ஆகிய தினங்களிலும் வரும்.'
	},
	{
		question:'"டெஸ்லா" கார் நிறுவனத்தின் முதலாளி யார்?',
		a: 'பில்கேட்ஸ்',
		b: 'அணில் அம்பானி',
		c: 'எலான் மஸ்க்',
		d: 'ரத்தன் டாட்டா',
		correct: 'c',
		e_question: 'Who is the owner of "Tesla" car company?',
		e_a: 'Billgates',
		e_b: 'Anil Ambani',
		e_c: 'Elan Musk',
		e_d: 'Rathan Tata',
		e_correct: 'e_c'
	},
	{
		question:'2011 ஆம் ஆண்டு நடைபெற்ற சர்வதேச ஒரு நாள் போட்டிகளில் அதிக ரன்கள் எடுத்த கிரிக்கெட் வீரர் யார்?',
		a: 'ஜோனாதன் ட்ரோட்',
		b: 'ஷேன் வாட்சன்',
		c: 'விராட் கோலி',
		d: 'கௌதம் கம்பீர்',
		correct: 'c',
		e_question: 'Which cricketer scored the most number of runs in one day Internationals held in the year 2011?',
		e_a: 'Jonathan Trott',
		e_b: 'Shane Watson',
		e_c: 'Virat Kohli',
		e_d: 'Gautham Gambir',
		e_correct: 'e_c'
	}
];

quiz[0]=quiz_1;
quiz[1]=quiz_2;
quiz[2]=quiz_3;
quiz[3]=quiz_4;
quiz[4]=quiz_5;