/* AB Travels — website interactions.
   Language toggle, quote widget, route shortcuts and WhatsApp messages.
   No backend, no storage: every form only builds a WhatsApp message. */
(function () {
  "use strict";

  var WA_NUMBER = "923143176560";
  var WA_BASE = "https://wa.me/" + WA_NUMBER;
  var STORE_KEY = "abt-lang";

  var EN = {
    title: "AB Travels — Air Tickets, Umrah Packages & Visa Services",
    desc: "AB Travels (Ahmed Brothers Travels) books domestic and international air tickets, Umrah and Hajj packages, visa files, hotels and tours. Send your route on WhatsApp and get clear fares the same day.",
    waText: "Assalam o Alaikum AB Travels!\nI would like a quote.\nRoute:\nDates:\nPassengers:",

    "a11y.skip": "Skip to content",
    "brand.sub": "Ahmed Brothers Travels",
    "nav.book": "Book",
    "nav.routes": "Popular routes",
    "nav.services": "Services",
    "nav.why": "Why us",
    "nav.contact": "Contact",
    "cta.wa": "WhatsApp",
    "cta.call": "Call now",
    "cta.quote2": "Message us on WhatsApp",
    "menu.open": "Open menu",
    "menu.close": "Close menu",

    "hero.eyebrow": "Air tickets · Umrah · Visa · Tours",
    "hero.h1": "Tickets, Umrah and visas — sorted without the runaround.",
    "hero.lead": "Send us your route and dates on WhatsApp. We compare fares, share clear options, and hand over a proper e-ticket with an invoice — usually the same day.",
    "hero.chip1": "Same-day quotes",
    "hero.chip2": "Family & group bookings",
    "hero.chip3": "Visa file support",
    "hero.note": "Real fares are confirmed on WhatsApp — no booking happens on this website.",

    "pass.tag": "Umrah · Return",
    "pass.badge": "On request",
    "pass.from": "Karachi",
    "pass.to": "Jeddah",
    "pass.pax": "Passengers",
    "pass.paxv": "2 adults",
    "pass.fare": "Fare",
    "pass.farev": "Ask today",
    "pass.bag": "Baggage",
    "pass.note": "Sample route — tell us yours and we’ll quote it.",

    "sc.tabFlights": "Flights",
    "sc.tabUmrah": "Umrah",
    "sc.tabVisa": "Visa",
    "sc.tabHotels": "Hotels",
    "sc.tabTours": "Tours",
    "sc.oneway": "One way",
    "sc.return": "Return",
    "sc.direct": "Direct flights only",
    "sc.from": "From",
    "sc.to": "To",
    "sc.depart": "Departure",
    "sc.returnDate": "Return",
    "sc.addDate": "Add date",
    "sc.selectCity": "Select city",
    "sc.pax": "Travellers & cabin",
    "sc.adults": "Adults",
    "sc.adultsNote": "12 years and above",
    "sc.children": "Children",
    "sc.childrenNote": "2 to 11 years",
    "sc.infants": "Infants",
    "sc.infantsNote": "Under 2 years",
    "sc.cabin": "Cabin",
    "sc.economy": "Economy",
    "sc.premium": "Premium economy",
    "sc.business": "Business",
    "sc.first": "First",
    "sc.done": "Done",
    "sc.quote": "Get quote on WhatsApp",
    "sc.note": "Airline fares change daily — we confirm the best price for your dates on WhatsApp.",
    "sc.traveller": "traveller",
    "sc.travellers": "travellers",
    "sc.cityPlaceholder": "City or airport code",
    "sc.noCity": "No city found — try another name or code.",
    "sc.package": "Package",
    "sc.umrahEco": "Economy",
    "sc.umrahStd": "Standard",
    "sc.umrahPrem": "Premium",
    "sc.umrahCustom": "Custom plan",
    "sc.month": "Travel date",
    "sc.travellersLabel": "Travellers",
    "sc.visaType": "Visa type",
    "sc.visaVisit": "Visit visa",
    "sc.visaUmrah": "Umrah visa",
    "sc.visaFamily": "Family visit",
    "sc.visaStudent": "Student visa",
    "sc.visaWork": "Work visa",
    "sc.country": "Destination country",
    "sc.applicants": "Applicants",
    "sc.city": "City",
    "sc.checkin": "Check-in",
    "sc.checkout": "Check-out",
    "sc.guests": "Guests & rooms",
    "sc.destination": "Destination",
    "sc.travelDate": "Travel date",
    "sc.groupSize": "Group size",
    "sc.quoteUmrah": "Get Umrah quote",
    "sc.quoteVisa": "Get visa quote",
    "sc.quoteHotel": "Get hotel quote",
    "sc.quoteTour": "Get tour quote",
    "sc.required": "Please fill the highlighted fields.",
    "sc.phCountry": "e.g. Saudi Arabia",
    "sc.phCity": "Makkah / Madinah",
    "sc.phDest": "e.g. Istanbul",
    "sc.errFrom": "Choose your departure city first.",
    "sc.errTo": "Choose your destination city.",
    "sc.errSame": "Departure and destination must be different.",
    "sc.errDep": "Choose a departure date.",
    "sc.errRet": "Choose a return date, or switch to one way.",
    "sc.errDepFirst": "Choose the departure date first, then the return date.",
    "sc.retDisabled": "Select Return above to add a return date.",

    "cal.prev": "Previous month",
    "cal.next": "Next month",

    "sup.t1": "Same-day quotes",
    "sup.d1": "Send your route before noon and we usually reply the same day.",
    "sup.t2": "7 days a week",
    "sup.d2": "WhatsApp, call or email — we answer every day.",
    "sup.t3": "Invoice with every booking",
    "sup.d3": "A clear invoice for company claims and visa files.",

    "routes.kicker": "Popular routes",
    "routes.h2": "Fares people ask for every week",
    "routes.lead": "Pick a route to start your quote — or type any city from Pakistan, the Gulf or beyond.",
    "routes.note": "Fares change daily. We confirm the live price for your dates on WhatsApp.",
    "routes.oneway": "One way",
    "routes.return": "Return",
    "routes.live": "Fare confirmed on WhatsApp",
    "routes.get": "Get fare",
    "routes.picked": "Route selected — now pick your dates.",

    "um.kicker": "Umrah season",
    "um.h2": "Umrah packages — ticket, visa, hotel and transport together",
    "um.lead": "Family and group Umrah with near-Haram hotels. Tell us your dates and we build the package around your budget.",
    "um.l1": "Visa and documents handled",
    "um.l2": "Makkah & Madinah hotels",
    "um.l3": "Airport transfers included",
    "um.cta": "Plan my Umrah",
    "um.cardTag": "Umrah package",
    "um.cardMeta": "Ticket · Visa · Hotel · Transport",
    "um.cardFrom": "From",
    "um.cardPrice": "Ask today",
    "um.cardPax": "Per person",
    "um.cardPaxv": "On request",
    "um.cardNote": "Sample — final price depends on dates and hotel.",
    "um.cardNights": "14 nights",

    "services.kicker": "What we do",
    "services.h2": "Everything for one trip, in one place",
    "services.lead": "One team for the ticket, the visa file, the hotel and the airport pickup — so you are not chasing three different people.",
    "s1.t": "Air tickets",
    "s1.d": "Domestic and international, one-way or return. We compare airlines and quote the total — no hidden add-ons.",
    "s2.t": "Umrah & Hajj",
    "s2.d": "Ticket, visa, hotel and transport in one package — with family and group options.",
    "s3.t": "Visa services",
    "s3.d": "Tourist, visit, family and student files. We check documents, guide the form and track appointments.",
    "s4.t": "Hotel booking",
    "s4.d": "Makkah, Madinah and worldwide stays — near-Haram options for every budget.",
    "s5.t": "Tours & transport",
    "s5.d": "Airport transfers, city tours and custom family itineraries.",
    "s6.t": "Group & family tickets",
    "s6.d": "Wedding groups, corporate travel and student groups — seats held together.",

    "why.kicker": "Why AB Travels",
    "why.h2": "Straight answers, no runaround",
    "w1": "Fares compared across airlines",
    "w1d": "We don’t quote the first fare we see — we check a few and tell you the difference.",
    "w2": "Everything on WhatsApp",
    "w2d": "No app, no login, no office visit needed. Your chat is your file.",
    "w3": "Paperwork, sorted",
    "w3d": "Document checklist, form filling and appointment reminders for visa files.",
    "w4": "Invoice with every booking",
    "w4d": "A clear invoice for company claims and visa files — not just a ticket screenshot.",
    "wc.k": "Fastest way",
    "wc.t": "One message with route, dates and passengers is enough to start.",
    "wc.or": "or call",

    "how.kicker": "How it works",
    "how.h2": "Three steps and you’re flying",
    "h1t": "Tell us the plan",
    "h1d": "Route, dates and passengers — a WhatsApp message is enough. Visa files can be sent as photos.",
    "h2t": "Get clear options",
    "h2d": "Two or three fares with the total price, baggage allowance and timings written out.",
    "h3t": "Confirm and fly",
    "h3d": "Pay, receive your e-ticket and invoice, and we stay on chat until you land.",

    "contact.kicker": "Contact",
    "contact.h2": "Send your route, get a fare",
    "contact.lead": "WhatsApp is fastest. Calls and email work too.",
    "c.wa": "WhatsApp",
    "c.waNote": "Fastest — send route and dates",
    "c.phone1": "Mobile",
    "c.phone2": "Alternate number",
    "c.email": "Email",
    "c.hoursT": "Timing",
    "c.hours": "Message anytime — we reply during business hours, 7 days a week.",

    "form.t": "Quick quote request",
    "form.note": "This opens WhatsApp with your details filled in. Nothing is stored on this website.",
    "form.name": "Your name",
    "form.phone": "Mobile number",
    "form.service": "Service",
    "opt.air": "Air ticket",
    "opt.umrah": "Umrah / Hajj package",
    "opt.visa": "Visa services",
    "opt.hotel": "Hotel booking",
    "opt.tour": "Tour / transport",
    "opt.other": "Something else",
    "form.details": "Trip details",
    "form.ph": "e.g. Karachi to Jeddah, 20 Nov, 2 adults",
    "form.submit": "Send on WhatsApp",
    "form.sent": "WhatsApp is opening — press send there.",
    "form.err": "Please add your name and a valid mobile number.",

    "footer.about": "Air tickets, Umrah and Hajj packages, visa files, hotels and tours.",
    "footer.links": "Quick links",
    "footer.services": "Services",
    "footer.f1": "Flight tickets",
    "footer.f2": "Umrah & Hajj",
    "footer.f3": "Visa files",
    "footer.f4": "Hotels & tours",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.note": "Quotes only — tickets are issued after confirmation.",

    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

    msgGreeting: "Assalam o Alaikum AB Travels!",
    msgFlightTitle: "New flight quote request",
    msgGenericTitle: "New quote request",
    msgTrip: "Trip",
    msgOneWay: "One way",
    msgReturn: "Return",
    msgFrom: "From",
    msgTo: "To",
    msgDepart: "Departure",
    msgReturnDate: "Return",
    msgPax: "Passengers",
    msgCabin: "Cabin",
    msgDirect: "Direct flights only",
    msgYes: "Yes",
    msgNo: "No",
    msgAdultOne: "adult",
    msgAdults: "adults",
    msgChildOne: "child",
    msgChildren: "children",
    msgInfantOne: "infant",
    msgInfants: "infants",
    msgAsk: "Please share the best available fare.",
    msgName: "Name",
    msgPhone: "Mobile",
    msgService: "Service",
    msgDetails: "Details"
  };

  var UR = {
    title: "اے بی ٹریولز — ایئر ٹکٹ، عمرہ پیکج اور ویزا سروسز",
    desc: "اے بی ٹریولز گھریلو اور بین الاقوامی ایئر ٹکٹ، عمرہ و حج پیکج، ویزا فائل، ہوٹل اور ٹورز کا کام کرتا ہے۔ اپنا روٹ واٹس ایپ پر بھیجیں اور اسی دن صاف ریٹ حاصل کریں۔",
    waText: "السلام علیکم اے بی ٹریولز!\nمجھے ریٹ چاہیے۔\nروٹ:\nتاریخ:\nمسافر:",

    "a11y.skip": "مواد پر جائیں",
    "brand.sub": "احمد برادرز ٹریولز",
    "nav.book": "بکنگ",
    "nav.routes": "مشہور روٹس",
    "nav.services": "خدمات",
    "nav.why": "ہم کیوں؟",
    "nav.contact": "رابطہ",
    "cta.wa": "واٹس ایپ",
    "cta.call": "ابھی کال کریں",
    "cta.quote2": "واٹس ایپ پر پیغام بھیجیں",
    "menu.open": "مینو کھولیں",
    "menu.close": "مینو بند کریں",

    "hero.eyebrow": "ایئر ٹکٹ · عمرہ · ویزا · ٹورز",
    "hero.h1": "ٹکٹ، عمرہ اور ویزا — بغیر بھاگ دوڑ کے",
    "hero.lead": "اپنا روٹ اور تاریخیں واٹس ایپ پر بھیجیں۔ ہم ریٹ کا موازنہ کر کے صاف آپشنز دیتے ہیں، اور مناسب ای ٹکٹ کے ساتھ انوائس بھی — عموماً اسی دن۔",
    "hero.chip1": "اسی دن ریٹ",
    "hero.chip2": "فیملی اور گروپ بکنگ",
    "hero.chip3": "ویزا فائل میں مدد",
    "hero.note": "اصل ریٹ واٹس ایپ پر کنفرم ہوتے ہیں — اس ویب سائٹ پر کوئی بکنگ نہیں ہوتی۔",

    "pass.tag": "عمرہ · ریٹرن",
    "pass.badge": "درخواست پر",
    "pass.from": "کراچی",
    "pass.to": "جدہ",
    "pass.pax": "مسافر",
    "pass.paxv": "2 افراد",
    "pass.fare": "کرایہ",
    "pass.farev": "آج پوچھیں",
    "pass.bag": "سامان",
    "pass.note": "یہ صرف نمونہ ہے — اپنا روٹ بتائیں، ہم ریٹ بھیج دیں گے۔",

    "sc.tabFlights": "فلائٹس",
    "sc.tabUmrah": "عمرہ",
    "sc.tabVisa": "ویزا",
    "sc.tabHotels": "ہوٹل",
    "sc.tabTours": "ٹورز",
    "sc.oneway": "ایک طرفہ",
    "sc.return": "ریٹرن",
    "sc.direct": "صرف ڈائریکٹ فلائٹس",
    "sc.from": "سے",
    "sc.to": "تک",
    "sc.depart": "روانگی",
    "sc.returnDate": "واپسی",
    "sc.addDate": "تاریخ ڈالیں",
    "sc.selectCity": "شہر چنیں",
    "sc.pax": "مسافر اور کیبن",
    "sc.adults": "بالغ",
    "sc.adultsNote": "12 سال اور زیادہ",
    "sc.children": "بچے",
    "sc.childrenNote": "2 سے 11 سال",
    "sc.infants": "شیر خوار",
    "sc.infantsNote": "2 سال سے کم",
    "sc.cabin": "کیبن",
    "sc.economy": "اکانومی",
    "sc.premium": "پریمیم اکانومی",
    "sc.business": "بزنس",
    "sc.first": "فرسٹ",
    "sc.done": "ٹھیک ہے",
    "sc.quote": "واٹس ایپ پر قیمت لیں",
    "sc.note": "ایئرلائن کے ریٹ روز بدلتے ہیں — آپ کی تاریخوں کا بہترین ریٹ ہم واٹس ایپ پر کنفرم کرتے ہیں۔",
    "sc.traveller": "مسافر",
    "sc.travellers": "مسافر",
    "sc.cityPlaceholder": "شہر یا ایئرپورٹ کوڈ",
    "sc.noCity": "کوئی شہر نہیں ملا — دوسرا نام یا کوڈ لکھیں۔",
    "sc.package": "پیکج",
    "sc.umrahEco": "اکانومی",
    "sc.umrahStd": "اسٹینڈرڈ",
    "sc.umrahPrem": "پریمیم",
    "sc.umrahCustom": "اپنی مرضی کا پلان",
    "sc.month": "سفر کی تاریخ",
    "sc.travellersLabel": "مسافر",
    "sc.visaType": "ویزا کی قسم",
    "sc.visaVisit": "وزٹ ویزا",
    "sc.visaUmrah": "عمرہ ویزا",
    "sc.visaFamily": "فیملی وزٹ",
    "sc.visaStudent": "اسٹوڈنٹ ویزا",
    "sc.visaWork": "ورک ویزا",
    "sc.country": "منزل ملک",
    "sc.applicants": "درخواست دہندگان",
    "sc.city": "شہر",
    "sc.checkin": "چیک اِن",
    "sc.checkout": "چیک آؤٹ",
    "sc.guests": "مہمان اور کمرے",
    "sc.destination": "منزل",
    "sc.travelDate": "سفر کی تاریخ",
    "sc.groupSize": "گروپ کا سائز",
    "sc.quoteUmrah": "عمرہ کا ریٹ لیں",
    "sc.quoteVisa": "ویزا کا ریٹ لیں",
    "sc.quoteHotel": "ہوٹل کا ریٹ لیں",
    "sc.quoteTour": "ٹور کا ریٹ لیں",
    "sc.required": "براہ کرم نمایاں خانے بھریں۔",
    "sc.phCountry": "مثلاً سعودی عرب",
    "sc.phCity": "مکہ / مدینہ",
    "sc.phDest": "مثلاً استنبول",
    "sc.errFrom": "پہلے روانگی کا شہر چنیں۔",
    "sc.errTo": "منزل کا شہر چنیں۔",
    "sc.errSame": "روانگی اور منزل مختلف ہونی چاہیے۔",
    "sc.errDep": "روانگی کی تاریخ چنیں۔",
    "sc.errRet": "واپسی کی تاریخ چنیں یا ایک طرفہ منتخب کریں۔",
    "sc.errDepFirst": "پہلے روانگی کی تاریخ چنیں، پھر واپسی کی۔",
    "sc.retDisabled": "واپسی کی تاریخ کے لیے اوپر ریٹرن منتخب کریں۔",

    "cal.prev": "پچھلا مہینہ",
    "cal.next": "اگلا مہینہ",

    "sup.t1": "اسی دن ریٹ",
    "sup.d1": "دوپہر سے پہلے روٹ بھیجیں، عموماً اسی دن جواب مل جاتا ہے۔",
    "sup.t2": "ہفتے کے ساتوں دن",
    "sup.d2": "واٹس ایپ، کال یا ای میل — ہم روز جواب دیتے ہیں۔",
    "sup.t3": "ہر بکنگ کے ساتھ انوائس",
    "sup.d3": "کمپنی کے خرچ یا ویزا فائل کے لیے صاف انوائس۔",

    "routes.kicker": "مشہور روٹس",
    "routes.h2": "وہ روٹس جن کے ریٹ ہر ہفتے پوچھے جاتے ہیں",
    "routes.lead": "کوئی روٹ چنیں اور ریٹ کی شروعات کریں — یا پاکستان، خلیج یا دنیا کے کسی بھی شہر کا نام لکھیں۔",
    "routes.note": "ریٹ روز بدلتے ہیں۔ آپ کی تاریخوں کا لائیو ریٹ ہم واٹس ایپ پر کنفرم کرتے ہیں۔",
    "routes.oneway": "ایک طرفہ",
    "routes.return": "ریٹرن",
    "routes.live": "ریٹ واٹس ایپ پر کنفرم",
    "routes.get": "ریٹ لیں",
    "routes.picked": "روٹ منتخب — اب تاریخ چنیں۔",

    "um.kicker": "عمرہ سیزن",
    "um.h2": "عمرہ پیکج — ٹکٹ، ویزا، ہوٹل اور ٹرانسپورٹ ایک ساتھ",
    "um.lead": "فیملی اور گروپ عمرہ، حرم کے قریب ہوٹلوں کے ساتھ۔ اپنی تاریخیں بتائیں، ہم آپ کے بجٹ کے مطابق پیکج بناتے ہیں۔",
    "um.l1": "ویزا اور کاغذات کی ذمہ داری ہماری",
    "um.l2": "مکہ اور مدینہ میں ہوٹل",
    "um.l3": "ایئرپورٹ ٹرانسفر شامل",
    "um.cta": "میرا عمرہ پلان بنائیں",
    "um.cardTag": "عمرہ پیکج",
    "um.cardMeta": "ٹکٹ · ویزا · ہوٹل · ٹرانسپورٹ",
    "um.cardFrom": "سے",
    "um.cardPrice": "آج پوچھیں",
    "um.cardPax": "فی شخص",
    "um.cardPaxv": "درخواست پر",
    "um.cardNote": "نمونہ — حتمی قیمت تاریخوں اور ہوٹل پر منحصر ہے۔",
    "um.cardNights": "14 راتیں",

    "services.kicker": "ہم کیا کرتے ہیں",
    "services.h2": "ایک سفر کی ساری چیزیں، ایک ہی جگہ",
    "services.lead": "ٹکٹ، ویزا فائل، ہوٹل اور ایئرپورٹ پک اپ — سب ایک ہی ٹیم سے، تین مختلف لوگوں کے پیچھے نہیں بھاگنا پڑے گا۔",
    "s1.t": "ایئر ٹکٹ",
    "s1.d": "گھریلو اور بین الاقوامی، ایک طرفہ یا ریٹرن۔ کئی ایئرلائنز کا موازنہ کر کے کل قیمت بتاتے ہیں — کوئی چھپا خرچ نہیں۔",
    "s2.t": "عمرہ و حج",
    "s2.d": "ٹکٹ، ویزا، ہوٹل اور ٹرانسپورٹ ایک ہی پیکج میں — فیملی اور گروپ آپشنز کے ساتھ۔",
    "s3.t": "ویزا سروسز",
    "s3.d": "ٹورسٹ، وزٹ، فیملی اور اسٹوڈنٹ فائل۔ کاغذات چیک، فارم بھرنے میں رہنمائی اور اپائنٹمنٹ کی یاد دہانی۔",
    "s4.t": "ہوٹل بکنگ",
    "s4.d": "مکہ، مدینہ اور دنیا بھر میں قیام — ہر بجٹ کے لیے حرم کے قریب آپشنز۔",
    "s5.t": "ٹورز و ٹرانسپورٹ",
    "s5.d": "ایئرپورٹ ٹرانسفر، شہر کی سیر اور فیملی کے لیے اپنی مرضی کا پلان۔",
    "s6.t": "گروپ و فیملی ٹکٹ",
    "s6.d": "شادی کے گروپ، کمپنی کے سفر اور اسٹوڈنٹ گروپ — سب کی سیٹیں ایک ساتھ۔",

    "why.kicker": "اے بی ٹریولز کیوں؟",
    "why.h2": "سیدھی بات، کوئی چکر نہیں",
    "w1": "کئی ایئرلائنز کے ریٹ کا موازنہ",
    "w1d": "ہم سب سے پہلا ریٹ نہیں دے دیتے — چند ایئرلائنز دیکھ کر فرق بتاتے ہیں۔",
    "w2": "سارا کام واٹس ایپ پر",
    "w2d": "کوئی ایپ، لاگ ان یا دفتر آنا ضروری نہیں۔ آپ کی چیٹ ہی آپ کی فائل ہے۔",
    "w3": "کاغذات کی مکمل مدد",
    "w3d": "ویزا فائل کے لیے ڈاکومنٹ لسٹ، فارم اور اپائنٹمنٹ کی یاد دہانی۔",
    "w4": "ہر بکنگ کے ساتھ انوائس",
    "w4d": "کمپنی کے خرچ یا ویزا فائل کے لیے صاف انوائس — صرف ٹکٹ کی تصویر نہیں۔",
    "wc.k": "سب سے تیز طریقہ",
    "wc.t": "روٹ، تاریخ اور مسافروں کی تعداد — ایک پیغام سے شروعات ہو جاتی ہے۔",
    "wc.or": "یا کال کریں",

    "how.kicker": "طریقہ کار",
    "how.h2": "تین قدم اور سفر تیار",
    "h1t": "اپنا پلان بتائیں",
    "h1d": "روٹ، تاریخ اور مسافر — ایک واٹس ایپ پیغام کافی ہے۔ ویزا کاغذات کی تصاویر بھیج دیں۔",
    "h2t": "صاف آپشنز لیں",
    "h2d": "دو یا تین ریٹ، کل قیمت، سامان کی حد اور اوقات لکھ کر۔",
    "h3t": "کنفرم کریں اور اڑیں",
    "h3d": "ادائیگی کریں، ای ٹکٹ اور انوائس لیں — لینڈنگ تک ہم چیٹ پر موجود رہتے ہیں۔",

    "contact.kicker": "رابطہ",
    "contact.h2": "روٹ بھیجیں، ریٹ لیں",
    "contact.lead": "واٹس ایپ سب سے تیز ہے۔ کال اور ای میل بھی کر سکتے ہیں۔",
    "c.wa": "واٹس ایپ",
    "c.waNote": "سب سے تیز — روٹ اور تاریخ بھیجیں",
    "c.phone1": "موبائل",
    "c.phone2": "دوسرا نمبر",
    "c.email": "ای میل",
    "c.hoursT": "اوقات",
    "c.hours": "کسی بھی وقت پیغام بھیجیں — ہم ہفتے کے ساتوں دن کاروباری اوقات میں جواب دیتے ہیں۔",

    "form.t": "فوری ریٹ کی درخواست",
    "form.note": "یہ آپ کی تفصیل کے ساتھ واٹس ایپ کھولے گا۔ اس ویب سائٹ پر کچھ محفوظ نہیں ہوتا۔",
    "form.name": "آپ کا نام",
    "form.phone": "موبائل نمبر",
    "form.service": "سروس",
    "opt.air": "ایئر ٹکٹ",
    "opt.umrah": "عمرہ / حج پیکج",
    "opt.visa": "ویزا سروسز",
    "opt.hotel": "ہوٹل بکنگ",
    "opt.tour": "ٹور / ٹرانسپورٹ",
    "opt.other": "کچھ اور",
    "form.details": "سفر کی تفصیل",
    "form.ph": "مثلاً کراچی سے جدہ، 20 نومبر، 2 افراد",
    "form.submit": "واٹس ایپ پر بھیجیں",
    "form.sent": "واٹس ایپ کھل رہا ہے — وہاں send دبائیں۔",
    "form.err": "براہ کرم اپنا نام اور درست موبائل نمبر لکھیں۔",

    "footer.about": "ایئر ٹکٹ، عمرہ و حج پیکج، ویزا فائل، ہوٹل اور ٹورز۔",
    "footer.links": "فوری لنکس",
    "footer.services": "خدمات",
    "footer.f1": "ایئر ٹکٹ",
    "footer.f2": "عمرہ و حج",
    "footer.f3": "ویزا فائل",
    "footer.f4": "ہوٹل و ٹورز",
    "footer.contact": "رابطہ",
    "footer.rights": "جملہ حقوق محفوظ ہیں۔",
    "footer.note": "صرف ریٹ — ٹکٹ کنفرمیشن کے بعد جاری ہوتا ہے۔",

    monthsShort: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
    monthsFull: ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],

    msgGreeting: "السلام علیکم اے بی ٹریولز!",
    msgFlightTitle: "نئی فلائٹ ریٹ کی درخواست",
    msgGenericTitle: "نئی ریٹ کی درخواست",
    msgTrip: "سفر",
    msgOneWay: "ایک طرفہ",
    msgReturn: "ریٹرن",
    msgFrom: "سے",
    msgTo: "تک",
    msgDepart: "روانگی",
    msgReturnDate: "واپسی",
    msgPax: "مسافر",
    msgCabin: "کیبن",
    msgDirect: "صرف ڈائریکٹ فلائٹس",
    msgYes: "ہاں",
    msgNo: "نہیں",
    msgAdultOne: "بالغ",
    msgAdults: "بالغ",
    msgChildOne: "بچہ",
    msgChildren: "بچے",
    msgInfantOne: "شیر خوار",
    msgInfants: "شیر خوار",
    msgAsk: "براہ کرم بہترین دستیاب کرایہ بتائیں۔",
    msgName: "نام",
    msgPhone: "موبائل",
    msgService: "سروس",
    msgDetails: "تفصیل"
  };

  var LANG = { en: EN, ur: UR };
  var current = "en";

  /* --------------------------------------------------------------- Utilities */

  var $ = function (id) { return document.getElementById(id); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  var dict = function () { return LANG[current]; };
  var pad = function (n) { return n < 10 ? "0" + n : String(n); };
  var startOfMonth = function (date) { return new Date(date.getFullYear(), date.getMonth(), 1); };
  var midnight = function (date) { return new Date(date.getFullYear(), date.getMonth(), date.getDate()); };
  var iso = function (date) { return date.getFullYear() + "-" + pad(date.getMonth() + 1) + "-" + pad(date.getDate()); };
  var fromIso = function (value) {
    var p = value.split("-");
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  };

  function prettyDate(value) {
    if (!value) return "";
    var date = fromIso(value);
    return date.getDate() + " " + dict().monthsShort[date.getMonth()] + " " + date.getFullYear();
  }

  function prettyFullDate(value) {
    if (!value) return "";
    var date = fromIso(value);
    return date.getDate() + " " + dict().monthsFull[date.getMonth()] + " " + date.getFullYear();
  }

  var CITIES = [
    { code: "KHI", city: "Karachi", ur: "کراچی", airport: "Jinnah International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "LHE", city: "Lahore", ur: "لاہور", airport: "Allama Iqbal International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "ISB", city: "Islamabad", ur: "اسلام آباد", airport: "Islamabad International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "PEW", city: "Peshawar", ur: "پشاور", airport: "Bacha Khan International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "MUX", city: "Multan", ur: "ملتان", airport: "Multan International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "SKT", city: "Sialkot", ur: "سیالکوٹ", airport: "Sialkot International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "LYP", city: "Faisalabad", ur: "فیصل آباد", airport: "Faisalabad International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "UET", city: "Quetta", ur: "کوئٹہ", airport: "Quetta International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "SKZ", city: "Sukkur", ur: "سکھر", airport: "Sukkur Airport", country: "Pakistan", countryUr: "پاکستان" },
    { code: "GWD", city: "Gwadar", ur: "گوادر", airport: "Gwadar International", country: "Pakistan", countryUr: "پاکستان" },
    { code: "JED", city: "Jeddah", ur: "جدہ", airport: "King Abdulaziz International", country: "Saudi Arabia", countryUr: "سعودی عرب" },
    { code: "MED", city: "Madinah", ur: "مدینہ", airport: "Prince Mohammad bin Abdulaziz", country: "Saudi Arabia", countryUr: "سعودی عرب" },
    { code: "RUH", city: "Riyadh", ur: "ریاض", airport: "King Khalid International", country: "Saudi Arabia", countryUr: "سعودی عرب" },
    { code: "DMM", city: "Dammam", ur: "دمام", airport: "King Fahd International", country: "Saudi Arabia", countryUr: "سعودی عرب" },
    { code: "DXB", city: "Dubai", ur: "دبئی", airport: "Dubai International", country: "UAE", countryUr: "متحدہ عرب امارات" },
    { code: "AUH", city: "Abu Dhabi", ur: "ابوظہبی", airport: "Zayed International", country: "UAE", countryUr: "متحدہ عرب امارات" },
    { code: "SHJ", city: "Sharjah", ur: "شارجہ", airport: "Sharjah International", country: "UAE", countryUr: "متحدہ عرب امارات" },
    { code: "RKT", city: "Ras Al Khaimah", ur: "راس الخیمہ", airport: "Ras Al Khaimah International", country: "UAE", countryUr: "متحدہ عرب امارات" },
    { code: "DOH", city: "Doha", ur: "دوحہ", airport: "Hamad International", country: "Qatar", countryUr: "قطر" },
    { code: "MCT", city: "Muscat", ur: "مسقط", airport: "Muscat International", country: "Oman", countryUr: "عمان" },
    { code: "KWI", city: "Kuwait", ur: "کویت", airport: "Kuwait International", country: "Kuwait", countryUr: "کویت" },
    { code: "BAH", city: "Bahrain", ur: "بحرین", airport: "Bahrain International", country: "Bahrain", countryUr: "بحرین" },
    { code: "IST", city: "Istanbul", ur: "استنبول", airport: "Istanbul Airport", country: "Türkiye", countryUr: "ترکی" },
    { code: "GYD", city: "Baku", ur: "باکو", airport: "Heydar Aliyev International", country: "Azerbaijan", countryUr: "آذربائیجان" },
    { code: "TAS", city: "Tashkent", ur: "تاشقند", airport: "Tashkent International", country: "Uzbekistan", countryUr: "ازبکستان" },
    { code: "KUL", city: "Kuala Lumpur", ur: "کوالالمپور", airport: "Kuala Lumpur International", country: "Malaysia", countryUr: "ملائیشیا" },
    { code: "BKK", city: "Bangkok", ur: "بنکاک", airport: "Suvarnabhumi", country: "Thailand", countryUr: "تھائی لینڈ" },
    { code: "LHR", city: "London", ur: "لندن", airport: "Heathrow", country: "United Kingdom", countryUr: "برطانیہ" },
    { code: "MAN", city: "Manchester", ur: "مانچسٹر", airport: "Manchester", country: "United Kingdom", countryUr: "برطانیہ" },
    { code: "YYZ", city: "Toronto", ur: "ٹورنٹو", airport: "Pearson International", country: "Canada", countryUr: "کینیڈا" },
    { code: "JFK", city: "New York", ur: "نیویارک", airport: "John F. Kennedy", country: "United States", countryUr: "امریکہ" },
    { code: "PEK", city: "Beijing", ur: "بیجنگ", airport: "Capital International", country: "China", countryUr: "چین" },
    { code: "CAN", city: "Guangzhou", ur: "گوانگژو", airport: "Baiyun International", country: "China", countryUr: "چین" },
    { code: "URC", city: "Urumqi", ur: "ارومچی", airport: "Diwopu International", country: "China", countryUr: "چین" }
  ];

  var CABIN_KEYS = { "Economy": "sc.economy", "Premium economy": "sc.premium", "Business": "sc.business", "First": "sc.first" };

  var state = {
    trip: "oneway",
    from: null,
    to: null,
    dep: null,
    ret: null,
    pax: { adults: 1, children: 0, infants: 0 },
    cabin: "Economy",
    direct: false,
    calTarget: "dep",
    calMonth: startOfMonth(new Date()),
    activeCity: null,
    cityIndex: 0
  };

  var openPop = null;
  var calAnchor = null;

  function placePopover(el, anchor, align) {
    if (!el || !anchor) return;
    var margin = 12;
    var rect = anchor.getBoundingClientRect();
    var width = Math.min(align === "end" ? 336 : 384, window.innerWidth - margin * 2);
    el.style.width = width + "px";
    el.style.position = "fixed";
    el.style.insetInlineStart = "auto";
    el.style.insetInlineEnd = "auto";
    el.style.maxHeight = Math.max(220, window.innerHeight - margin * 2) + "px";
    el.style.overflow = "auto";
    var rtl = document.documentElement.getAttribute("dir") === "rtl";
    var left;
    if (align === "end") {
      left = rtl ? rect.left : rect.right - width;
    } else {
      left = rtl ? rect.right - width : rect.left;
    }
    left = Math.min(Math.max(margin, left), window.innerWidth - width - margin);

    var gap = 8;
    var spaceBelow = window.innerHeight - margin - rect.bottom - gap;
    var spaceAbove = rect.top - gap - margin;
    var height = el.offsetHeight;
    var top;

    if (height <= spaceBelow) {
      top = rect.bottom + gap;
    } else if (height <= spaceAbove) {
      top = rect.top - height - gap;
    } else if (spaceBelow >= spaceAbove) {
      el.style.maxHeight = Math.max(160, spaceBelow) + "px";
      top = rect.bottom + gap;
    } else {
      el.style.maxHeight = Math.max(160, spaceAbove) + "px";
      top = Math.max(margin, rect.top - Math.min(height, spaceAbove) - gap);
    }

    el.style.left = left + "px";
    el.style.top = top + "px";
  }

  function cityByCode(code) {
    for (var i = 0; i < CITIES.length; i += 1) if (CITIES[i].code === code) return CITIES[i];
    return null;
  }

  function cityLabel(city) {
    if (!city) return "";
    return current === "ur" ? city.ur + " (" + city.code + ")" : city.city + " (" + city.code + ")";
  }

  function cabinLabel() {
    var key = CABIN_KEYS[state.cabin] || "sc.economy";
    return dict()[key];
  }

  function paxTotal() {
    return state.pax.adults + state.pax.children + state.pax.infants;
  }

  function paxDetails() {
    var d = dict();
    var parts = [];
    function add(count, one, many) {
      if (!count) return;
      parts.push(count + " " + (count === 1 ? one : many));
    }
    add(state.pax.adults, d.msgAdultOne, d.msgAdults);
    add(state.pax.children, d.msgChildOne, d.msgChildren);
    add(state.pax.infants, d.msgInfantOne, d.msgInfants);
    return parts.join(", ");
  }

  /* ------------------------------------------------------------------ Popovers */

  function closePop() {
    if (!openPop) return;
    openPop.el.hidden = true;
    if (openPop.trigger) openPop.trigger.setAttribute("aria-expanded", "false");
    if (openPop.el === cityPop) {
      fromBtn.setAttribute("aria-expanded", "false");
      toBtn.setAttribute("aria-expanded", "false");
      citySearch.setAttribute("aria-expanded", "false");
    }
    openPop = null;
  }

  function openPopover(el, trigger) {
    closePop();
    el.hidden = false;
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    openPop = { el: el, trigger: trigger };
  }

  /* -------------------------------------------------------------- Language --- */

  function setMeta(name, value) {
    var el = document.querySelector('meta[name="' + name + '"]');
    if (el) el.setAttribute("content", value);
  }

  function applyLang(lang) {
    var d = LANG[lang] || EN;
    current = lang;

    document.documentElement.setAttribute("lang", lang === "ur" ? "ur" : "en");
    document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

    $$("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (d[key] != null) el.textContent = d[key];
    });
    $$("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (d[key] != null) el.setAttribute("placeholder", d[key]);
    });

    document.title = d.title;
    setMeta("description", d.desc);

    $$(".js-wa").forEach(function (a) {
      a.setAttribute("href", WA_BASE + "?text=" + encodeURIComponent(d.waText));
    });

    if (langBtn) {
      if (lang === "ur") {
        langBtn.textContent = "EN";
        langBtn.setAttribute("aria-label", "Switch to English");
        langBtn.setAttribute("lang", "en");
      } else {
        langBtn.textContent = "اردو";
        langBtn.setAttribute("aria-label", "Switch to Urdu");
        langBtn.setAttribute("lang", "ur");
      }
    }

    if (menuBtn) {
      var open = nav && nav.classList.contains("open");
      menuBtn.setAttribute("aria-label", open ? d["menu.close"] : d["menu.open"]);
    }

    citySearch.setAttribute("placeholder", d["sc.cityPlaceholder"]);

    var msg = $("formMsg");
    if (msg && msg.dataset.state === "sent") msg.textContent = d["form.sent"];
    if (msg && msg.dataset.state === "err") msg.textContent = d["form.err"];

    hideAlert();
    $$(".gen-err").forEach(function (el) { el.hidden = true; });

    paintPax();
    paintDates();
    renderRoutes();

    if (openPop && openPop.el === cityPop) renderCities(citySearch.value);
    if (openPop && openPop.el === calPop) renderCalendar();

    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  function savedLang() {
    try {
      var value = localStorage.getItem(STORE_KEY);
      if (value === "ur" || value === "en") return value;
    } catch (e) {}
    return "en";
  }

  /* --------------------------------------------------------------- Elements --- */

  var langBtn = $("langBtn");
  var menuBtn = $("menuBtn");
  var nav = $("nav");
  var fromBtn = $("fromBtn");
  var toBtn = $("toBtn");
  var fromValue = $("fromValue");
  var toValue = $("toValue");
  var swapBtn = $("swapBtn");
  var depBtn = $("depBtn");
  var retBtn = $("retBtn");
  var depValue = $("depValue");
  var retValue = $("retValue");
  var paxBtn = $("paxBtn");
  var paxValue = $("paxValue");
  var cabinValue = $("cabinValue");
  var cityPop = $("cityPop");
  var cityList = $("cityList");
  var citySearch = $("citySearch");
  var paxPop = $("paxPop");
  var paxDone = $("paxDone");
  var calPop = $("calPop");
  var directOnly = $("directOnly");
  var routesGrid = $("routesGrid");
  var searchCard = $("search");
  var toastEl = $("toast");
  var toastTimer = null;

  var alertEl = $("scAlert");

  function showAlert(text) {
    if (!alertEl) return;
    alertEl.textContent = text;
    alertEl.hidden = false;
  }

  function hideAlert() {
    if (!alertEl) return;
    alertEl.hidden = true;
    alertEl.textContent = "";
  }

  function showToast(text) {
    if (!toastEl) return;
    toastEl.textContent = text;
    toastEl.hidden = false;
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.hidden = true; }, 3200);
  }

  /* ------------------------------------------------------------------ Paint --- */

  function paintPax() {
    var d = dict();
    var total = paxTotal();
    if (paxValue) paxValue.textContent = total + " " + (total === 1 ? d["sc.traveller"] : d["sc.travellers"]);
    if (cabinValue) cabinValue.textContent = cabinLabel();
    $("outAdults").textContent = state.pax.adults;
    $("outChildren").textContent = state.pax.children;
    $("outInfants").textContent = state.pax.infants;

    $$(".stepper button[data-dir]").forEach(function (btn) {
      var key = btn.parentNode.parentNode.getAttribute("data-step");
      var dir = Number(btn.getAttribute("data-dir"));
      var value = state.pax[key];
      var blocked =
        (dir < 0 && value <= (key === "adults" ? 1 : 0)) ||
        (dir > 0 && (key === "infants" ? value >= state.pax.adults : value >= 9));
      btn.disabled = blocked;
    });
  }

  function paintDates() {
    var d = dict();
    fromValue.textContent = state.from ? cityLabel(cityByCode(state.from)) : d["sc.selectCity"];
    toValue.textContent = state.to ? cityLabel(cityByCode(state.to)) : d["sc.selectCity"];
    setEmpty(fromValue, !state.from);
    setEmpty(toValue, !state.to);

    depValue.textContent = state.dep ? prettyDate(state.dep) : d["sc.addDate"];
    setEmpty(depValue, !state.dep);

    var isReturn = state.trip === "return";
    retValue.textContent = state.ret ? prettyDate(state.ret) : d["sc.addDate"];
    setEmpty(retValue, !state.ret);
    retBtn.classList.toggle("is-disabled", !isReturn);
    retBtn.setAttribute("aria-disabled", String(!isReturn));
  }

  function setEmpty(el, empty) {
    if (empty) el.setAttribute("data-empty", "true");
    else el.removeAttribute("data-empty");
  }

  function renderRoutes() {
    if (!routesGrid) return;
    var d = dict();
    var routes = [
      { from: "KHI", to: "JED", trip: "return" },
      { from: "LHE", to: "DXB", trip: "return" },
      { from: "ISB", to: "RUH", trip: "oneway" },
      { from: "KHI", to: "DMM", trip: "oneway" },
      { from: "LHE", to: "JED", trip: "return" },
      { from: "ISB", to: "MED", trip: "return" }
    ];

    routesGrid.innerHTML = routes.map(function (route) {
      var a = cityByCode(route.from);
      var b = cityByCode(route.to);
      var fromName = current === "ur" ? a.ur : a.city;
      var toName = current === "ur" ? b.ur : b.city;
      var tag = d["routes." + route.trip];
      return (
        '<article class="rc">' +
          '<div class="rc-top"><span class="rc-tag">' + tag + "</span>" +
          '<span class="rc-fare">' + d["pass.fare"] + "<b>" + d["pass.farev"] + "</b></span></div>" +
          '<div class="rc-route">' +
            '<div class="rc-city"><b>' + a.code + "</b><small>" + fromName + "</small></div>" +
            '<div class="rc-line"><span></span><svg class="ic" width="16" height="16" aria-hidden="true"><use href="#i-plane"/></svg><span></span></div>' +
            '<div class="rc-city"><b>' + b.code + "</b><small>" + toName + "</small></div>" +
          "</div>" +
          '<div class="rc-foot"><span class="rc-note"><svg class="ic" width="13" height="13" aria-hidden="true"><use href="#i-tag"/></svg>' + d["routes.live"] + "</span>" +
          '<button class="rc-btn" type="button" data-route-from="' + a.code + '" data-route-to="' + b.code + '" data-route-trip="' + route.trip + '">' +
          d["routes.get"] + '<svg class="ic" width="13" height="13" aria-hidden="true"><use href="#i-arrow"/></svg></button></div>' +
        "</article>"
      );
    }).join("");
  }

  /* ------------------------------------------------------------------- Tabs --- */

  /* Scroll only the tab strip horizontally — never the page (mobile used to jump). */
  function scrollTabIntoView(tab) {
    var strip = tab.parentNode;
    if (!strip) return;
    var tabBox = tab.getBoundingClientRect();
    var stripBox = strip.getBoundingClientRect();
    var overflowLeft = stripBox.left - tabBox.left;
    var overflowRight = tabBox.right - stripBox.right;
    if (overflowLeft > 0) {
      strip.scrollLeft -= overflowLeft;
    } else if (overflowRight > 0) {
      strip.scrollLeft += overflowRight;
    }
  }

  function revealSearch() {
    if (!searchCard) return;
    var header = document.querySelector(".site-head");
    var offset = (header ? header.getBoundingClientRect().height : 0) + 12;
    var box = searchCard.getBoundingClientRect();
    var viewportH = window.innerHeight;
    if (box.top >= offset && box.top + Math.min(box.height, viewportH - offset) <= viewportH) return;
    var top = box.top + window.pageYOffset - offset;
    try {
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    } catch (e) {
      window.scrollTo(0, Math.max(0, top));
    }
  }

  function selectTab(name, moveFocus) {
    $$(".sc-tab").forEach(function (tab) {
      var selected = tab.getAttribute("data-tab") === name;
      tab.classList.toggle("is-active", selected);
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && moveFocus) scrollTabIntoView(tab);
    });

    $$(".sc-panel").forEach(function (panel) {
      panel.hidden = panel.getAttribute("data-panel") !== name;
    });

    closePop();
    hideAlert();
    $$(".gen-err").forEach(function (el) { el.hidden = true; });
  }

  $$(".sc-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      selectTab(tab.getAttribute("data-tab"), true);
    });
    tab.addEventListener("keydown", function (event) {
      var tabs = $$(".sc-tab");
      var index = tabs.indexOf(tab);
      var next = null;
      if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
      if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (next) {
        event.preventDefault();
        next.focus();
        selectTab(next.getAttribute("data-tab"), true);
      }
    });
  });

  $$("[data-open-tab]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      selectTab(btn.getAttribute("data-open-tab"), true);
      revealSearch();
    });
  });

  /* -------------------------------------------------------------- Trip type --- */

  $$(".seg-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var trip = btn.getAttribute("data-trip");
      state.trip = trip;
      $$(".seg-btn").forEach(function (other) {
        var on = other === btn;
        other.classList.toggle("is-active", on);
        other.setAttribute("aria-pressed", String(on));
      });
      if (trip !== "return") {
        state.ret = null;
      }
      paintDates();
      hideAlert();
    });
  });

  if (directOnly) {
    directOnly.addEventListener("change", function () {
      state.direct = directOnly.checked;
    });
  }

  /* -------------------------------------------------------- Travellers/cabin --- */

  function togglePax() {
    if (openPop && openPop.el === paxPop) {
      closePop();
      return;
    }
    openPopover(paxPop, paxBtn);
    placePopover(paxPop, paxBtn, "end");
  }

  paxBtn.addEventListener("click", togglePax);
  paxDone.addEventListener("click", function () {
    closePop();
    paxBtn.focus();
  });

  $$(".stepper").forEach(function (row) {
    var key = row.getAttribute("data-step");
    $$("button[data-dir]", row).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = Number(btn.getAttribute("data-dir"));
        var next = state.pax[key] + dir;
        if (key === "adults") {
          next = Math.min(9, Math.max(1, next));
          if (state.pax.infants > next) state.pax.infants = next;
        } else if (key === "infants") {
          next = Math.min(state.pax.adults, Math.max(0, next));
        } else {
          next = Math.min(9, Math.max(0, next));
        }
        state.pax[key] = next;
        paintPax();
      });
    });
  });

  $$(".cabin-list [data-cabin]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      state.cabin = btn.getAttribute("data-cabin");
      $$(".cabin-list [data-cabin]").forEach(function (other) {
        other.setAttribute("aria-checked", String(other === btn));
      });
      paintPax();
    });
  });

  /* ------------------------------------------------------------- City picker --- */

  function cityMatches(city, query) {
    if (!query) return true;
    var q = query.toLowerCase();
    return (
      city.city.toLowerCase().indexOf(q) >= 0 ||
      city.code.toLowerCase().indexOf(q) === 0 ||
      city.airport.toLowerCase().indexOf(q) >= 0 ||
      city.country.toLowerCase().indexOf(q) >= 0 ||
      city.ur.indexOf(query) >= 0 ||
      city.countryUr.indexOf(query) >= 0
    );
  }

  function renderCities(query) {
    var list = CITIES.filter(function (city) { return cityMatches(city, query); }).slice(0, 8);
    state.cityIndex = list.length ? 0 : -1;

    if (!list.length) {
      cityList.innerHTML = '<p class="city-empty">' + dict()["sc.noCity"] + "</p>";
      return;
    }

    cityList.innerHTML = list.map(function (city, index) {
      var sub = current === "ur" ? city.countryUr : city.airport + ", " + city.country;
      var name = current === "ur" ? city.ur : city.city;
      return (
        '<button type="button" class="city-option' + (index === 0 ? " is-active" : "") + '" role="option" aria-selected="false" data-code="' + city.code + '">' +
          '<span class="code">' + city.code + "</span>" +
          "<span><strong>" + name + "</strong><small>" + sub + "</small></span>" +
        "</button>"
      );
    }).join("");
  }

  function openCities(which) {
    state.activeCity = which;
    citySearch.value = "";
    renderCities("");
    cityPop.hidden = false;
    var trigger = which === "from" ? fromBtn : toBtn;
    fromBtn.setAttribute("aria-expanded", String(which === "from"));
    toBtn.setAttribute("aria-expanded", String(which === "to"));
    citySearch.setAttribute("aria-expanded", "true");
    openPop = { el: cityPop, trigger: trigger };
    placePopover(cityPop, trigger, "start");
    try { citySearch.focus(); } catch (e) {}
  }

  function chooseCity(code) {
    if (state.activeCity === "from") state.from = code;
    else state.to = code;
    closePop();
    paintDates();
    hideAlert();
    (state.activeCity === "from" ? toBtn : fromBtn).focus();
  }

  fromBtn.addEventListener("click", function () {
    if (openPop && openPop.el === cityPop && state.activeCity === "from") closePop();
    else openCities("from");
  });

  toBtn.addEventListener("click", function () {
    if (openPop && openPop.el === cityPop && state.activeCity === "to") closePop();
    else openCities("to");
  });

  citySearch.addEventListener("input", function () {
    renderCities(citySearch.value);
  });

  citySearch.addEventListener("keydown", function (event) {
    var options = $$(".city-option", cityList);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      if (!options.length) return;
      state.cityIndex = event.key === "ArrowDown"
        ? (state.cityIndex + 1) % options.length
        : (state.cityIndex - 1 + options.length) % options.length;
      options.forEach(function (opt, i) {
        opt.classList.toggle("is-active", i === state.cityIndex);
        opt.setAttribute("aria-selected", String(i === state.cityIndex));
        if (i === state.cityIndex) opt.scrollIntoView({ block: "nearest" });
      });
    } else if (event.key === "Enter") {
      event.preventDefault();
      var active = cityList.querySelector(".city-option.is-active") || cityList.querySelector(".city-option");
      if (active) chooseCity(active.getAttribute("data-code"));
    } else if (event.key === "Escape") {
      closePop();
      fromBtn.focus();
    }
  });

  cityList.addEventListener("mousedown", function (event) {
    var option = event.target.closest ? event.target.closest(".city-option") : null;
    if (!option) return;
    event.preventDefault();
    chooseCity(option.getAttribute("data-code"));
  });

  cityList.addEventListener("mousemove", function (event) {
    var option = event.target.closest ? event.target.closest(".city-option") : null;
    if (!option) return;
    $$(".city-option", cityList).forEach(function (opt) {
      opt.classList.toggle("is-active", opt === option);
    });
  });

  swapBtn.addEventListener("click", function () {
    var from = state.from;
    state.from = state.to;
    state.to = from;
    paintDates();
    hideAlert();
    swapBtn.classList.toggle("is-swapped");
  });

  /* --------------------------------------------------------------- Calendar --- */

  function minDateFor(target) {
    var today = midnight(new Date());
    if (target === "ret" && state.dep) {
      var dep = fromIso(state.dep);
      return dep > today ? dep : today;
    }
    return today;
  }

  function renderCalendar() {
    var d = dict();
    var month = state.calMonth;
    var target = state.calTarget;
    var min = minDateFor(target);
    var selected = target === "ret" ? state.ret : state.dep;
    var firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
    var daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
    var lead = firstDay.getDay();
    var todayIso = iso(midnight(new Date()));

    var html =
      '<div class="cal-head"><strong>' + d.monthsFull[month.getMonth()] + " " + month.getFullYear() + "</strong>" +
      '<div class="cal-nav">' +
      '<button type="button" data-cal="prev" aria-label="' + d["cal.prev"] + '"><svg class="ic" width="15" height="15" aria-hidden="true"><use href="#i-chev-left"/></svg></button>' +
      '<button type="button" data-cal="next" aria-label="' + d["cal.next"] + '"><svg class="ic" width="15" height="15" aria-hidden="true"><use href="#i-chev-right"/></svg></button>' +
      "</div></div>";

    var grid = ['<div class="cal-grid" role="grid">'];
    ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].forEach(function (day) {
      grid.push('<span class="dow" aria-hidden="true">' + day + "</span>");
    });
    for (var i = 0; i < lead; i += 1) grid.push('<span class="blank"></span>');
    for (var day = 1; day <= daysInMonth; day += 1) {
      var date = new Date(month.getFullYear(), month.getMonth(), day);
      var value = iso(date);
      var disabled = date < min;
      var classes = ["day"];
      if (value === todayIso) classes.push("is-today");
      if (value === selected) classes.push("is-selected");
      grid.push(
        '<button type="button" class="' + classes.join(" ") + '" data-day="' + value + '"' +
        (disabled ? " disabled" : "") + ">" + day + "</button>"
      );
    }
    grid.push("</div>");
    calPop.innerHTML = html + grid.join("");
  }

  function positionCalendar(trigger) {
    var rect = trigger.getBoundingClientRect();
    var margin = 12;
    var width = Math.min(320, window.innerWidth - margin * 2);
    var height = Math.min(360, window.innerHeight - margin * 2);
    var left = Math.min(Math.max(margin, rect.left), window.innerWidth - width - margin);
    var top = rect.bottom + 8;
    if (top + height > window.innerHeight - margin) {
      var above = rect.top - height - 8;
      top = above >= margin ? above : Math.max(margin, window.innerHeight - height - margin);
    }
    calPop.style.width = width + "px";
    calPop.style.left = left + "px";
    calPop.style.top = top + "px";
  }

  function openCalendar(target, trigger) {
    if (target === "ret" && !state.dep) {
      showAlert(dict()["sc.errDepFirst"]);
      openCalendar("dep", depBtn);
      return;
    }
    hideAlert();
    state.calTarget = target;
    var selected = target === "ret" ? state.ret : state.dep;
    var base = selected ? fromIso(selected) : new Date();
    state.calMonth = startOfMonth(base);
    renderCalendar();
    calAnchor = trigger;
    openPopover(calPop, trigger);
    positionCalendar(trigger);
  }

  depBtn.addEventListener("click", function () {
    if (openPop && openPop.el === calPop) {
      closePop();
      return;
    }
    openCalendar("dep", depBtn);
  });

  retBtn.addEventListener("click", function () {
    if (state.trip !== "return") {
      showAlert(dict()["sc.retDisabled"]);
      return;
    }
    if (openPop && openPop.el === calPop) {
      closePop();
      return;
    }
    openCalendar("ret", retBtn);
  });

  calPop.addEventListener("click", function (event) {
    var navBtn = event.target.closest ? event.target.closest("[data-cal]") : null;
    if (navBtn) {
      var dir = navBtn.getAttribute("data-cal") === "next" ? 1 : -1;
      state.calMonth = new Date(state.calMonth.getFullYear(), state.calMonth.getMonth() + dir, 1);
      renderCalendar();
      return;
    }
    var dayBtn = event.target.closest ? event.target.closest("[data-day]") : null;
    if (!dayBtn || dayBtn.disabled) return;
    var value = dayBtn.getAttribute("data-day");
    if (state.calTarget === "ret") {
      state.ret = value;
    } else {
      state.dep = value;
      if (state.ret && fromIso(state.ret) < fromIso(value)) state.ret = null;
    }
    paintDates();
    hideAlert();
    closePop();
    (state.calTarget === "ret" ? retBtn : depBtn).focus();
  });

  document.addEventListener("click", function (event) {
    if (!openPop) return;
    if (openPop.el.contains(event.target)) return;
    if (openPop.trigger && openPop.trigger.contains(event.target)) return;
    if (openPop.el === cityPop && (fromBtn.contains(event.target) || toBtn.contains(event.target))) return;
    closePop();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && openPop) {
      var trigger = openPop.trigger;
      closePop();
      if (trigger) trigger.focus();
    }
  });

  function repositionOpenPop(event) {
    if (!openPop) return;
    if (event && event.target && openPop.el.contains(event.target)) return;
    if (openPop.el === calPop && calAnchor) positionCalendar(calAnchor);
    else if (openPop.el === cityPop) placePopover(cityPop, state.activeCity === "to" ? toBtn : fromBtn, "start");
    else if (openPop.el === paxPop) placePopover(paxPop, paxBtn, "end");
  }

  window.addEventListener("resize", function () { repositionOpenPop(); });

  window.addEventListener("scroll", repositionOpenPop, true);

  /* --------------------------------------------------------------- WhatsApp --- */

  function openWA(url) {
    // The "noopener" feature makes window.open return null even on success,
    // so open normally and detach the opener instead.
    var win = window.open(url, "_blank");
    if (win) {
      try { win.opener = null; } catch (e) {}
    } else {
      window.location.href = url;
    }
    showToast(dict()["form.sent"]);
  }

  function waUrl(lines) {
    return WA_BASE + "?text=" + encodeURIComponent(lines.join("\n"));
  }

  /* ---------------------------------------------------------- Flight submit --- */

  $("panel-flights").addEventListener("submit", function (event) {
    event.preventDefault();
    var d = dict();

    if (!state.from) {
      showAlert(d["sc.errFrom"]);
      fromBtn.focus();
      return;
    }
    if (!state.to) {
      showAlert(d["sc.errTo"]);
      toBtn.focus();
      return;
    }
    if (state.from === state.to) {
      showAlert(d["sc.errSame"]);
      toBtn.focus();
      return;
    }
    if (!state.dep) {
      showAlert(d["sc.errDep"]);
      depBtn.focus();
      return;
    }
    if (state.trip === "return" && !state.ret) {
      showAlert(d["sc.errRet"]);
      retBtn.focus();
      return;
    }

    var from = cityByCode(state.from);
    var to = cityByCode(state.to);
    var lines = [
      d.msgGreeting,
      d.msgFlightTitle,
      d.msgTrip + ": " + (state.trip === "return" ? d.msgReturn : d.msgOneWay),
      d.msgFrom + ": " + (current === "ur" ? from.ur : from.city) + " (" + from.code + ")",
      d.msgTo + ": " + (current === "ur" ? to.ur : to.city) + " (" + to.code + ")",
      d.msgDepart + ": " + prettyFullDate(state.dep)
    ];
    if (state.trip === "return" && state.ret) lines.push(d.msgReturnDate + ": " + prettyFullDate(state.ret));
    lines.push(d.msgPax + ": " + paxDetails());
    lines.push(d.msgCabin + ": " + cabinLabel());
    if (state.direct) lines.push(d.msgDirect + ": " + d.msgYes);
    lines.push(d.msgAsk);

    hideAlert();
    openWA(waUrl(lines));
  });

  /* --------------------------------------------------------- Generic panels --- */

  function tabLabelFor(name) {
    var d = dict();
    return d["sc.tab" + name.charAt(0).toUpperCase() + name.slice(1)] || name;
  }

  $$(".gen-panel").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var d = dict();
      var fields = $$("[data-field]", form);
      var err = form.querySelector(".gen-err");
      var bad = null;
      var lines = [];

      fields.forEach(function (field) {
        var box = field.closest(".gfield");
        if (box) box.classList.remove("is-invalid");
      });

      fields.forEach(function (field) {
        var box = field.closest(".gfield");
        var labelEl = box ? box.querySelector("span") : null;
        var label = labelEl ? labelEl.textContent.trim() : field.name;
        var value = (field.value || "").trim();
        var invalid = field.hasAttribute("required") && !value;

        if (!invalid && field.getAttribute("minlength") && value.length < Number(field.getAttribute("minlength"))) invalid = true;
        if (!invalid && field.type === "number" && (!value || Number(value) < 1)) invalid = true;

        if (invalid) {
          if (box) box.classList.add("is-invalid");
          if (!bad) bad = field;
          return;
        }

        if (field.tagName === "SELECT") value = field.options[field.selectedIndex].textContent.trim();
        else if (field.hasAttribute("data-date") && value) value = prettyFullDate(value);

        lines.push(label + ": " + value);
      });

      var hotelFields = form.getAttribute("data-panel") === "hotels" ? fields : null;
      if (hotelFields && hotelFields.length > 2 && hotelFields[1].value && hotelFields[2].value) {
        if (fromIso(hotelFields[2].value) <= fromIso(hotelFields[1].value)) {
          hotelFields[2].closest(".gfield").classList.add("is-invalid");
          bad = bad || hotelFields[2];
        }
      }

      if (bad) {
        if (err) err.hidden = false;
        bad.focus();
        return;
      }

      if (err) err.hidden = true;

      var message = [d.msgGreeting, d.msgGenericTitle, d.msgService + ": " + tabLabelFor(form.getAttribute("data-panel"))];
      message = message.concat(lines, [d.msgAsk]);
      openWA(waUrl(message));
    });
  });

  /* -------------------------------------------------------- Route shortcuts --- */

  routesGrid.addEventListener("click", function (event) {
    var btn = event.target.closest ? event.target.closest("[data-route-from]") : null;
    if (!btn) return;
    state.from = btn.getAttribute("data-route-from");
    state.to = btn.getAttribute("data-route-to");
    state.trip = btn.getAttribute("data-route-trip");
    $$(".seg-btn").forEach(function (seg) {
      var on = seg.getAttribute("data-trip") === state.trip;
      seg.classList.toggle("is-active", on);
      seg.setAttribute("aria-pressed", String(on));
    });
    if (state.trip !== "return") state.ret = null;
    paintDates();
    hideAlert();
    selectTab("flights", true);
    revealSearch();
    showToast(dict()["routes.picked"]);
    setTimeout(function () { depBtn.focus({ preventScroll: true }); }, 420);
  });

  /* ------------------------------------------------------------------- Menu --- */

  function closeNav() {
    if (!nav || !nav.classList.contains("open")) return;
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", dict()["menu.open"]);
  }

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.setAttribute("aria-label", open ? dict()["menu.close"] : dict()["menu.open"]);
    });
    $$("a", nav).forEach(function (a) { a.addEventListener("click", closeNav); });
    document.addEventListener("click", function (event) {
      if (!nav.classList.contains("open")) return;
      if (!nav.contains(event.target) && !menuBtn.contains(event.target)) closeNav();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  /* -------------------------------------------------------- Language button --- */

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(current === "ur" ? "en" : "ur");
    });
  }

  /* -------------------------------------------------------------- Quote form --- */

  var form = $("qform");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var d = dict();
      var name = ($("fName").value || "").trim();
      var phone = ($("fPhone").value || "").trim();
      var digits = phone.replace(/\D/g, "");
      var serviceEl = $("fService");
      var service = serviceEl.options[serviceEl.selectedIndex].textContent.trim();
      var details = ($("fDetails").value || "").trim();
      var msgEl = $("formMsg");

      if (name.length < 2 || digits.length < 7) {
        msgEl.textContent = d["form.err"];
        msgEl.className = "form-msg err";
        msgEl.dataset.state = "err";
        (name.length < 2 ? $("fName") : $("fPhone")).focus();
        return;
      }

      var lines = [
        d.msgGreeting,
        d.msgName + ": " + name,
        d.msgPhone + ": " + phone,
        d.msgService + ": " + service
      ];
      if (details) lines.push(d.msgDetails + ": " + details);

      msgEl.textContent = d["form.sent"];
      msgEl.className = "form-msg";
      msgEl.dataset.state = "sent";

      var win = window.open(waUrl(lines), "_blank", "noopener");
      if (!win) window.location.href = waUrl(lines);
    });
  }

  /* ----------------------------------------------------------------- Setup --- */

  var today = iso(midnight(new Date()));
  $$('input[type="date"][data-field]').forEach(function (input) {
    input.min = today;
  });

  $$('.gen-panel[data-panel="hotels"] input[data-date]').forEach(function (input, index) {
    if (index !== 0) return;
    input.addEventListener("change", function () {
      var checkout = input.closest(".gen-panel").querySelectorAll("input[data-date]")[1];
      if (checkout) {
        var next = new Date(input.value);
        if (!isNaN(next.getTime())) {
          next.setDate(next.getDate() + 1);
          checkout.min = iso(next);
          if (checkout.value && checkout.value <= input.value) checkout.value = "";
        }
      }
    });
  });

  var yr = $("yr");
  if (yr) yr.textContent = String(new Date().getFullYear());

  applyLang(savedLang());
})();
