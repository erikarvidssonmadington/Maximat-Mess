let arr = [
    ['Afrikaans', 'Hallo'],
    ['Albanska', 'Përshëndetje'],
    ['Armenska', 'Barev'],
    ['Baskiska', 'Kaixo'],
    ['Bengalesiska', 'Hyālō'],
    ['Bosniska', 'zdravo'],
    ['Serbiska', 'zdravo'],
    ['Bosniska', 'Dobar dan / Zdravo'],
    ['Bulgariska', 'Zdraveĭte'],
    ['Kinesiska', '你好'],
    ['Mandarin', '你好'],
    ['Kinesiska', 'Nǐ hǎo'],
    ['mandarin', 'Nǐ hǎo'],
    ['Kroatiska', 'Pozdrav'],
    ['Tjeckiska', 'Dobrý den'],
    ['Thailändska', 'Sawasdee'],
    ['Holländska', 'Hallo'],
    ['Engelska', 'Hello'],
    ['Estländska', 'Tere'],
    ['Filipinska', 'Kumusta'],
    ['Filipinska', 'Kamusta'],
    ['Filipino', 'Kamusta'],
    ['talgog(Filipino)', 'Kamusta'],
    ['Finska', 'Moi'],
    ['Franska', 'Bonjour'],
    ['Franska', 'Bonjour'],
    ['Georgiska', 'Gaumarjos'],
    ['Tyska', 'Guten Tag'],
    ['Grekiska', 'Jia sou'],
    ['Hawaii', 'Aloha'],
    ['Hindi', 'Namaste'],
    ['Ungerska', 'Szia / Szervusz'],
    ['Ungern', 'Szia'],
    ['Isländska', 'Halló'],
    ['Italienska', 'Ciao'],
    ['Japanska', 'Konnichiwa'],
    ['Japanska', 'こんにちは'],
    ['Koreanska', '안녕하십니까'],
    ['Koreanska', 'Annyeong'],
    ['Lao', 'Sabaidi'],
    ['Lettiska', 'Sveiki'],
    ['Makedonska', 'Zdravo'],
    ['Mandarin', '你好'],
    ['Mandarin', 'Nihao'],
    ['Hawaiianska', 'Aloha'],
    ['Mongoliska', 'Sain baina uu'],
    ['Norska', 'Hei'],
    ['Persiska', 'Salam'],
    ['Polska', 'Witam'],
    ['Polska', 'Cześć'],
    ['Portugisiska', 'Olá'],
    ['Punjabi', 'Sat srī akāl'],
    ['Rumänska', 'Buna ziua'],
    ['Rumanska', 'Buna ziua'],
    ['Ryska', 'Privet'],
    ['Ryska', 'Привет'],
    ['Spanska', 'Hola'],
    ['Svenska', 'Hej'],
    ['Tamil', 'Vaṇakkam'],
    ['Thai', 'S̄ạwadee'],
    ['Tibetanska', 'Tashi delek'],
    ['Turkiska', 'Merhaba'],
    ['Ukrainska', 'Pryvit'],
    ['Vietnamesiska', 'Xin chào'],
    ['Zulu', 'Sawubona'],
    // ['Afrikanska', 'Hi'],
    ['Albanska', 'pershendetje'],
    ['Amhariska', 'ሃይ'],
    ['Arabiska', 'Marhaban'],
    ['Arabiska', 'مرحبا'],
    ['Armeniska', 'Ողջու՜յն'],
    ['Azerbajdzjanska', 'salam'],
    ['Baskiska', 'kaixo'],
    ['Vitryska', 'прывітанне'],
    ['Bengali', 'ওহে'],
    ['Bosniska', 'zdravo'],
    ['Bulgariska', 'здравей'],
    ['Katalanska', 'hola'],
    // ['VERSION', 'hi'],
    ['kinesiska', '你好'],
    ['Kinesisk', '你好'],
    ['Korsikansk', 'Salute'],
    ['Kroatiska', 'zdravo'],
    // ['Danska', 'Hej'],
    ['Tjeck', 'Ahoj'],
    // ['Danska', 'Hej'],
    ['Nederländska', 'Hallo'],
    ['Esperanto', 'saluton'],
    ['Estniska', 'Tere'],
    ['Finska', 'Hei'],
    ['Franska', 'Bonjour'],
    ['Frisiska', 'Hoi'],
    ['Galiciska', 'ola'],
    ['Georgiansk', 'გამარჯობა'],
    ['Grekisk', 'γεια'],
    ['Gujarati', 'હાય'],
    ['Haitisk kreol', 'bonjou'],
    ['Hausa', 'Barka'],
    ['Hawaii', 'hui'],
    ['Hebreiska', 'היי'],
    ['Nej.', 'नमस्ते'],
    ['Hmong', 'nyob'],
    ['Ungerska', 'Szia'],
    ['Ungerska', 'szia'],
    ['Isländsk', 'hæ'],
    // ['Igbo', 'hi'],
    ['Indonesiska', 'Halo'],
    ['Irländska', 'Haigh'],
    ['Italienska', 'Ciao'],
    ['Japanska', 'こんにちは'],
    ['Javanesiska', 'hai'],
    ['Kannada', 'ನಮಸ್ತೆ'],
    ['Kazakiska', 'сәлем'],
    ['Khmer', 'សួស្តី'],
    ['Koreanska', '안녕'],
    ['Kurdiska', 'merheba'],
    ['Kirgiziska', 'салам'],
    ['Tuberkulos', 'ສະບາຍດີ'],
    ['Latinska', 'Salve'],
    ['Lettiska', 'Sveiki'],
    ['Litauiska', 'labas'],
    ['Luxemburgiska', 'Salut'],
    ['Makedonska', 'здраво'],
    // ['Madagaskar', 'Hi'],
    ['Malajiska', 'hai'],
    ['Malayalam', 'ഹായ്'],
    // ['Maltesiska', 'hi'],
    ['Maori', 'Kia'],
    ['Marathi', 'हाय'],
    ['Mongoliska', 'сайн'],
    ['Myanmar', 'ဟိုင်း'],
    ['Nepali', 'नमस्ते'],
    ['Norska', 'hei'],
    ['Havet', 'moni'],
    ['Pashto', 'سلام'],
    ['Persiska', 'سلام'],
    ['Putsa', 'cześć'],
    ['Portugisiska', 'Oi'],
    ['Punjabi', 'ਹਾਇ'],
    ['Rumänska', 'Bună'],
    ['Ryska', 'Привет'],
    ['Samoanska', 'talofa'],
    // ['Skotsk-gäliska', 'hi'],
    ['Serbiska', 'Здраво'],
    ['Sesotho', 'lumela'],
    ['Shona', 'mhoro'],
    ['Sindhi', 'سلام'],
    ['Singalesiska', 'හායි'],
    ['Slovakiska', 'Ahoj'],
    ['Slovenska', 'živjo'],
    // ['Somaliska', 'hi'],
    ['Spanska', 'Hola'],
    ['Sundanesisk', 'hai'],
    // ['Swahili', 'hi'],
    // ['Svenska', 'Hej'],
    // ['Tagalog', 'hi'],
    // ['Tagalog', 'hi'],
    ['Tajik', 'салом'],
    ['Tamil', 'வணக்கம்'],
    ['Telugu', 'హాయ్'],
    ['Thai', 'สวัสดี'],
    ['Turkiska', 'Selam'],
    ['Ukrainska', 'Привіт'],
    ['Urdu', 'ہیلو'],
    ['Uzbekiska', 'salom'],
    ['Vietnamesiska', 'Chào'],
    // ['Walesiska', 'hi'],
    ['Xhosa', 'Mholweni'],
    ['Jiddisch', 'הי'],
    // ['Yoruba', 'hi'],
    ['Zulu', 'sawubona'],
    ['Engelska', 'hello']
]

//  Buna ziua Zdravo


let wordExsist = (word, els) => {
    if (document.querySelectorAll('.image-wrapper')[0].childNodes[0].alt.toLowerCase().includes(word[1].toLowerCase())) {
        [...els].map(el => {
            if (el.innerHTML.toLowerCase().includes(word[0].toLowerCase()))

                el.click()
            return true
        })
    }
}

let lang = (word) => {
    switch (true) {
        case wordExsist(word, document.querySelectorAll('button')):
            return (
                true
            );
            break;
    }
}

setInterval(() => {
    arr.some((test) => {
        lang(test)
    })
}, 1200)



