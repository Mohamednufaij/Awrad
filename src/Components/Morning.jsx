import React, { useState } from 'react';
import style from './syle.module.css';
const Morning = () => {
  
const texts = [
  {
    
    arabic: 'الْحَمْدُ لِلهِ وَحْدَهُ، وَالصَّلاَةُ وَالسَّلاَمُ عَلَى مَنْ لاَ نَبِيَّ بَعْدَهُ',
    translation: 'എ‌ല്ലാ സ്‌‌തു‌തി‌യും അ‌ല്ലാ‌ഹു‌വി‌നാ‌ണ്‌; ശേ‌ഷം വേ‌റൊ‌രു ന‌ബി വ‌രാ‌നി‌ല്ലാ‌ത്ത ന‌ബി (മു‌ഹ‌മ്മദ്‌ ﷺ)യു‌ടെ മേൽ അ‌ല്ലാ‌ഹു‌വി‌ന്റെ അ‌നു‌ഗ്ര‌ഹ‌വും സ‌മാ‌ധാ‌ന‌വു‌മു‌ണ്ടാ‌വ‌ട്ടെ.',
    references:[ 'അ‌ല്ലാ‌ഹു പ‌റ‌യു‌ന്നു: “നി‌ന്റെ റ‌ബ്ബി‌നെ നീ വ‌ള‌രെ‌യ‌ധി‌കം ഓർ‌ക്കു‌ക. ‘വൈ‌കു‌ന്നേ‌ര‌വും രാവിലേയും’ അ‌വ‌ന്റെ ‌മ‌ഹ‌ത്വ‌വും പ‌രി‌ശു‌ദ്ധി‌യും നീ സ്‌‌തു‌തി‌ച്ചു വാ‌ഴ്‌ത്തു‌ക.” (ആലുഇംറാൻ: 41)']
  },
  {
    arabic: 'ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ',
    translation: 'അ‌ല്ലാ‌ഹു‌-‌അ‌വ‌ന‌ല്ലാ‌തെ ആ‌രാ‌ധന‌ക്കർഹനില്ല. എ‌ന്നെ‌ന്നും ജീ‌വി‌ച്ചി‌രി‌ക്കു‌ന്ന‌വൻ. എ‌ല്ലാം നി‌യ‌ന്ത്രി‌ക്കു‌ന്ന‌വൻ. മ‌യ‌ക്ക‌മോ ഉ‌റ‌ക്ക‌മോ അ‌വ‌നെ ബാ‌ധി‌ക്കു‌ക‌യി‌ല്ല. അ‌വ‌ന്റേ‌താ‌ണ്‌ ആ‌കാ‌ശ‌ഭൂ‌മി‌ക‌ളി‌ലു‌ള്ള‌തെ‌ല്ലാം. അ‌വ‌ന്റെ അ‌നുവാ‌ദ‌പ്ര‌കാ‌ര‌മ‌ല്ലാ‌തെ അ‌വ‌ന്റെ‌യ‌ടു‌ക്കൽ ശു‌പാർ‌ശ ന‌ട‌ത്താ‌നാ‌രു‌ണ്ട്‌? അ‌വ‌രു‌ടെ മു‌മ്പി‌ലു‌ള്ള‌തും അ‌വർ‌ക്ക്‌ പി‌ന്നി‌ലു‌ള്ള‌തും (ക‌ഴി‌ഞ്ഞു‌പോ‌യ‌തും വ‌രാ‌നി‌രി‌ക്കു‌ന്ന‌തും) അ‌വൻ അ‌റി‌യു‌ന്നു. അ‌വ‌ന്റെ അ‌റി‌വിൽ‌നി‌ന്ന്‌ അ‌വൻ ഇ‌ച്ഛി‌ക്കു‌ന്ന‌ത‌ല്ലാ‌തെ മ‌റ്റൊ‌ന്നും അ‌വർ‌ക്ക്‌ സൂ‌ക്ഷ്‌‌മ‌മാ‌യി അ‌റി‌യാൻ ക‌ഴി‌യി‌ല്ല. അ‌വ‌ന്റെ പാ‌ദ‌പീഠം (കുർ‌സി) ആ‌കാ‌ശ ഭൂ‌മി‌ക‌ളെ മു‌ഴു‌വൻ ഉൾ‌കൊ‌ള്ളു‌ന്ന‌താ‌കു‌ന്നു. അ‌വ‌യു‌ടെ സം‌ര‌ക്ഷ‌ണം അ‌വ‌ന്ന്‌ ഒ‌ട്ടും ഭാ‌ര‌മു‌ള്ള‌ത‌ല്ല. അ‌വൻ ഉ‌ന്ന‌തനും മ‌ഹാ‌നു‌മ‌ത്രെ.” (സൂ‌റഃ അൽ‌ബ‌ഖ‌റ‌- 255)',
    references: [
      'ആ‌രെ‌ങ്കി‌ലും വൈ‌കു‌ന്നേ‌രം ആ‌യ‌തുൽ കുർ‌സി‌യ്യ്‌ ഓ‌തി‌യാൽ നേ‌രം‌പു‌ല‌രു‌ന്ന‌തു‌വ‌രേ‌യും രാ‌വി‌ലെ ഓ‌തി‌യാൽ വൈ‌കു‌ന്നേ‌രം വ‌രേ‌യും അ‌യാൾ‌ക്ക്‌ പൈ‌ശാ‌ചി‌ക ദ്രോ‌ഹത്തിൽ നി‌ന്ന്‌ സം‌ര‌ക്ഷ‌ണം ല‌ഭി‌ക്കും”  എന്ന്‌ ഉ‌ബ‌യ്യു‌ബ്‌‌നു ക‌അ‌ബ്‌ hൽ നി‌ന്ന്‌ നി‌വേ‌ദ‌നം ചെ‌യ്യ‌പ്പെ‌ട്ടി‌രി‌ക്കു‌ന്നു. (ഇ‌മാം മുൻ‌ദി‌രി‌യു‌ടെ സ്വ‌ഹീ‌ഹ്‌ തർ‌ഗീ‌ബ്‌ വ‌ത്തർ‌ഹീ‌ബ്‌: 662)',
    ]
  },
  {
      arabic: `أَعُوذُ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ﴿﴾ بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ\n
قُلْ هُوَ اللهُ أَحَدٌ ﴿١﴾ اللهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴿٤﴾\n\n
بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ()\n
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾\n\n
بِسْمِ اللهِ الرَّحْمَٰنِ الرَّحِيمِ\n
قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾
`,
      translation: `ന‌ബി‌യേ,) പ‌റ‌യു‌ക: കാ‌ര്യം അ‌ല്ലാ‌ഹു ഏ‌ക‌നാ‌ണ്‌ എ‌ന്ന‌താ‌കു‌ന്നു. അ‌ല്ലാ‌ഹു ഏ‌വർ‌ക്കും ആ‌ശ്ര‌യ‌മാ‌യി‌ട്ടു‌ള്ള‌വ‌നാ‌കു‌ന്നു. അ‌വൻ (ആർ‌ക്കും) ജന്മം നൽ‌കി‌യി‌ട്ടി‌ല്ല. (ആ‌രു‌ടെ‌യും സ‌ന്ത‌തി‌യാ‌യി) ജ‌നി‌ച്ചി‌ട്ടു‌മി‌ല്ല. അ‌വ‌ന്ന്‌ തു‌ല്യ‌നാ‌യി ആ‌രുമില്ല.” (സൂ‌റഃ ഇ‌ഖ്‌‌ലാ‌സ്‌. 1-4)


// പ‌റ‌യു‌ക: പ്രഭാതത്തിന്റെ ര‌ക്ഷി‌താ‌വി‌നോ‌ട്‌ ഞാൻ രക്ഷ(കാവൽ) തേ‌ടു‌ന്നു. അ‌വൻ സൃ‌ഷ്‌‌ടി‌ച്ചി‌ട്ടു‌ള്ള‌വ‌യു‌ടെ കെ‌ടു‌തി‌യിൽ നി‌ന്ന്‌. ഇ‌രു‌ള‌ട‌യു‌മ്പോ‌ഴു‌ള്ള രാ‌ത്രി‌യു‌ടെ കെ‌ടു‌തി‌യിൽ നി‌ന്നും. കെ‌ട്ടുക‌ളിൽ ഊ‌തു‌ന്ന‌വ‌രു‌ടെ (ആ‌ഭി‌ചാ‌രി‌ക‌ളു‌ടെ) കെ‌ടു‌തി‌യിൽ‌നി‌ന്നും, അ‌സൂ‌യാ‌ലു അ‌സൂ‌യ‌പ്പെ‌ടു‌മ്പോൾ അ‌വ‌ന്റെ കെ‌ടു‌തി‌യിൽ നി‌ന്നും.” (സൂ‌റഃ ഫ‌ല‌ഖ്‌. 1-5)


// “പ‌റ‌യു‌ക: മ‌നു‌ഷ്യ‌രു‌ടെ ര‌ക്ഷി‌താ‌വി‌നോ‌ട്‌ ഞാൻ രക്ഷ(കാവൽ) തേ‌ടു‌ന്നു. മ‌നു‌ഷ്യ‌രു‌ടെ രാ‌ജാ‌വി‌നോ‌ട്‌. മ‌നു‌ഷ്യ‌രു‌ടെ ആ‌രാ‌ധ്യ‌നോ‌ട്‌. മ‌നു‌ഷ്യ‌രിലും ജി‌ന്നു‌ക‌ളി‌ലും പെ‌ട്ട, മ‌നു‌ഷ്യ‌രു‌ടെ ഹൃ‌ദ‌യ‌ങ്ങ‌ളിൽ ദുർ‌ബോ‌ധ‌നം ന‌ട‌ത്തു‌ന്ന, (ദുർ‌ബോ‌ധ‌നം ന‌ട‌ത്തി) പിന്മാ‌റി‌ക്ക‌ള‌യു‌ന്ന‌വ‌ന്റെ (പി‌ശാ‌ചി‌ന്റെ) കെ‌ടു‌തി‌യിൽ നി‌ന്ന്‌.” (സൂ‌റഃ നാ‌സ്‌ 1-6)`,
      references: [
        'ഖു‌ബൈ‌ബ്‌ ؓ  നി‌വേ‌ദ‌നം. ന‌ബി ﷺ പ‌റ‌ഞ്ഞു: “എ‌ല്ലാ ദി‌വ‌സ‌വും രാവിലേയും വൈ‌കു‌ന്നേ‌ര‌വും നീ ‘ഖുൽ ഹു‌വ ല്ലാ‌ഹു അ‌ഹ‌ദ്‌..., ഖുൽ അ‌ഊദു ബി‌റ‌ബ്ബിൽ ഫ‌ല‌ഖ്‌..., ഖുൽ അ‌ഊ‌ദു ബിറ‌ബ്ബി‌ന്നാ‌സ്‌’..., സൂ‌റ‌ത്തു‌കൾ മൂ‌ന്ന്‌ പ്രാവശ്യം വീ‌തം പാ‌രാ‌യ‌ണം ചെ‌യ്‌‌താൽ നി‌ന‌ക്ക്‌ എ‌ല്ലാ‌ പ്രയാസങ്ങളിൽ നിന്നും സം‌ര‌ക്ഷണ‌മാ‌യി‌രി‌ക്കും!” (അ‌ബൂ‌ദാ‌വൂ‌ദ്‌: 5082, തിർ‌മി‌ദി: 3575)',
      ]
    },
    {
      
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلهِ ، وَالْحَمْدُ لِلهِ، لاَ إِلٰهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذاَ الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وعَذَابٍ فِي الْقَبْرِ',
      translation: 'ഞ‌ങ്ങൾ പ്ര‌ഭാ‌ത‌ത്തി‌ലേ‌ക്ക്‌ പ്ര‌വേ‌ശി‌ച്ചു. പ്ര‌ഭാ‌ത‌ത്തി‌ലെ എ‌ല്ലാ ആ‌ധി‌പ‌ത്യ‌വും അ‌ല്ലാ‌ഹു‌വി‌നാ‌കു‌ന്നു. അ‌ല്ലാ‌ഹു‌വി‌ന്‌ ത‌ന്നെ‌യാ‌ണ്‌ എ‌ല്ലാ സ്‌‌തു‌തി‌യും. അല്ലാഹുവല്ലാതെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല. അ‌വൻ ഏ‌ക‌നും പ‌ങ്കു‌കാ‌രി‌ല്ലാ‌ത്ത‌വ‌നു‌മാ‌ണ്‌. അ‌വ‌ന്നാ‌ണ്‌ എ‌ല്ലാ സ്‌‌തു‌തി‌യും പ‌ര‌മാ‌ധി‌കാ‌ര‌വും. അ‌വൻ സർ‌വ്വ കാ‌ര്യ‌ത്തി‌നും ക‌ഴി‌വു‌ള്ള‌വ‌നാ‌ണ്‌. എ‌ന്റെ റ‌ബ്ബേ! ഈ പ‌ക‌ലി‌ലു‌ള്ള ന‌ന്മ‌കൾ ഞാൻ നി‌ന്നോ‌ട്‌ ചോ‌ദി‌ക്കു‌ന്നു. ഇ‌തി‌നു ശേ‌ഷ‌മു‌ള്ള‌തി‌ലെ ന‌ന്മ‌ക‌ളും ഞാൻ നി‌ന്നോ‌ട്‌ ചോ‌ദി‌ക്കു‌ന്നു. ഈ പ‌ക‌ലി‌ലെ തി‌ന്മ‌ക‌ളിൽ നി‌ന്നും ഇ‌തി‌നു ശേ‌ഷ‌മു‌ള്ള‌തി‌ലെ തി‌ന്മ‌ക‌ളിൽ നി‌ന്നും ഞാൻ നി‌ന്നോ‌ട്‌ ര‌ക്ഷ‌തേ‌ടു‌ന്നു. എ‌ന്റെ റ‌ബ്ബേ! അ‌ല‌സ‌ത‌യിൽ നി‌ന്നും വാർ‌ദ്ധ‌ക്യ‌ത്തി‌ലെ ദു‌രി‌ത‌ത്തിൽ നി‌ന്നും നി‌ന്നോ‌ട്‌ ഞാൻ ര‌ക്ഷ‌തേ‌ടു‌ന്നു. എ‌ന്റെ റ‌ബ്ബേ! ന‌ര‌ക‌ത്തി‌ലേ‌യും ഖ‌ബ്‌‌റി‌ലേ‌യും ശി‌ക്ഷ‌ക‌ളിൽ നി‌ന്നും നി‌ന്നോ‌ട്‌ ഞാൻ ര‌ക്ഷ‌തേ‌ടു‌ന്നു.',
      references: ['مسلم: ٢٧٢٣ وصححه الألباني في سنن أبي داود: ٥٠٧١']
    },
    {
      
      arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا ، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ',
      translation: 'അ‌ല്ലാ‌ഹു‌വേ നീ മു‌ഖേ‌ന‌യാ‌ണ്‌ ഞ‌ങ്ങൾ‌ക്ക്‌ നേ‌രം പു‌ലർ‌ന്ന‌തും വൈ‌കു‌ന്നേ‌ര‌മാ‌യ‌തും. നീ മു‌ഖേ‌ന‌യാ‌ണ്‌ ഞ‌ങ്ങൾ ജീ‌വി‌ക്കു‌ന്ന‌തും മ‌രി‌ക്കു‌ന്ന‌തും. നിന്റെ അടുത്തേക്ക് തന്നെയാണ് ഞങ്ങൾ ഉയർത്തെഴുന്നേറ്റു വരുന്നതും.',
      references: ['صححه الألباني في سنن ابن ماجة: 3868،  وسلسلة الصحيحة: 263،  وفي الأدب المفرد: 1199']
    },
    {
      arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلٰهَ إلَّا أَنْتَ ، خَلَقْتَنِي وَأَنَا عَبْدُكَ ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَااسْتَطَعْتُ، أَعُوذُبِكَ مِنْ شَرِّ مَا صَنَعْتُ ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ لَكَ بِذَنْبي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ',
      translation: 'അ‌ല്ലാ‌ഹു‌വേ നീ‌യാ‌ണ്‌ എ‌ന്റെ ര‌ക്ഷി‌താ‌വ്‌. നീ‌യ‌ല്ലാ‌തെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല. നീ‌യാ‌ണെ‌ന്നെ സൃ‌ഷ്ടി‌ച്ച‌ത്‌. ഞാൻ നി‌ന്റെ അടിമ. ഞാൻ നി‌ന്നോ‌ടു‌ള്ള ക‌രാ‌റും വാ‌ഗ്‌‌ദാ‌ന‌വും ക‌ഴി‌യു‌ന്ന‌ത്ര പാ‌ലി‌ക്കു‌ന്നു. ഞാൻ ചെ‌യ്‌‌തു‌പോയ എ‌ല്ലാ തി‌ന്മ‌യിൽ നി‌ന്നും നി‌ന്നോ‌ട്‌ ശ‌ര‌ണം തേ‌ടു‌ന്നു. എ‌നി‌ക്ക്‌ നീ അ‌നു‌ഗ്ര‌ഹം ചെ‌യ്‌‌ത‌ത്‌ ഞാൻ അം‌ഗീ‌ക‌രി‌ക്കു‌ന്നു. എ‌ന്റെ പാ‌പ‌ങ്ങൾ ഞാൻ നി‌ന്നോ‌ട്‌ സ‌മ്മ‌തി‌ക്കു‌ന്നു. അ‌തി‌നാൽ നീ എ‌നി‌ക്ക്‌ പൊ‌റു‌ത്തു ത‌രേ‌ണ‌മേ. തീർ‌ച്ച‌യാ‌യും നീ‌യ‌ല്ലാ‌തെ പാ‌പ‌ങ്ങൾ പൊ‌റു‌ക്കു‌ക‌യി‌ല്ല.',
      references: [
        'ഈ ദി‌ക്‌‌റി‌നെ‌ക്കു‌റി‌ച്ച്‌ ന‌ബി ﷺ പ‌റ‌ഞ്ഞു: “ഒ‌രാൾ ഇ‌തി‌നെ കു‌റി‌ച്ചു‌ള്ള ദൃ‌ഢ‌വി‌ശ്വാ‌സ‌ത്തോ‌ടെ പ‌ക‌ലിൽ അ‌ത്‌ ചൊ‌ല്ലു‌ക‌യും അ‌ങ്ങി‌നെ ആ പ‌ക‌ലിൽ -‌വൈ‌കു‌ന്നേ‌ര‌മാകും മു‌മ്പ്‌‌- അ‌യാൾ മ‌ര‌ണ‌പ്പെ‌ടു‌ക‌യും ചെ‌യ്‌‌താൽ അ‌യാൾ സ്വർ‌ഗാ‌വ‌കാ‌ശി‌ക‌ളി‌ലാ‌ണ്‌. (അ‌തു‌പോ‌ലെ‌) ദൃ‌ഢ വി‌ശ്വാ‌സ‌ത്തോ‌ടെ രാ‌ത്രി‌യിൽ ഇ‌ത്‌ ചൊ‌ല്ലുകയും നേ‌രം പു‌ല‌രും‌മു‌മ്പ്‌ അ‌യാൾ മരണപ്പെടുകയും ചെയ്തൽ അ‌യാൾ സ്വർ‌ഗാ‌വ‌കാശി‌ക‌ളി‌ലാ‌ണ്‌”. (സ്വ‌ഹീ‌ഹുൽ ബു‌ഖാ‌രി: 6306)'

        
                 ,
      ]
    },
    {
      arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلٰهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّـي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، اللَّهُمَّ إِنِّـي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلٰهَ إِلاَّ أَنْتَ(3)',
      translation: 'അ‌ല്ലാ‌ഹു‌വേ! എ‌ന്റെ ശ‌രീ‌ര‌ത്തി‌ന്‌ നീ പൂർ‌ണ ആ‌രോ‌ഗ്യ‌വും സൗ‌ഖ്യ‌വും നൽ‌കേ‌ണ‌മേ. അ‌ല്ലാ‌ഹു‌വേ! എ‌ന്റെ കേൾ‌വി‌ക്ക്‌ നീ പൂർ‌ണ ആ‌രോ‌ഗ്യ‌വും സൗ‌ഖ്യ‌വും നൽ‌കേ‌ണ‌മേ. അ‌ല്ലാ‌ഹു‌വേ! എ‌ന്റെ കാ‌ഴ്‌‌ച‌ക്ക്‌ നീ പൂർ‌ണ ആ‌രോ‌ഗ്യ‌വും സൗ‌ഖ്യ‌വും നൽ‌കേ‌ണ‌മേ. നീ‌യ‌ല്ലാ‌തെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല. അ‌ല്ലാ‌ഹു‌വേ! കു‌ഫ്‌‌റിൽ നി‌ന്നും ദാ‌രി‌ദ്ര്യ‌ത്തിൽ നി‌ന്നും നി‌ന്നോ‌ട്‌ ഞാൻ ര‌ക്ഷ‌തേ‌ടു‌ന്നു. അ‌ല്ലാ‌ഹു‌വേ! ഖ‌ബ്‌‌റി‌ലെ ശി‌ക്ഷ‌യിൽ നി‌ന്നും ഞാൻ നി‌ന്നോ‌ട്‌ ര‌ക്ഷ‌തേ‌ടു‌ന്നു. നീ‌യ‌ല്ലാ‌തെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല.',
      references: [
        'ഈ പ്രാർ‌ത്ഥ‌ന എ‌ല്ലാ പ്ര‌ദോ‌ഷ‌ത്തി‌ലും ന‌ബി ﷺ ചൊ‌ല്ലി‌യ‌താ‌യും അ‌ദ്ദേ‌ഹ‌ത്തി‌ന്റെ ച‌ര്യ‌യെ സ്‌‌നേ‌ഹി‌ക്കു‌ന്ന‌തു‌കൊ‌ണ്ട്‌ താൻ അ‌ത്‌ പ‌തി‌വാ‌ക്കു‌ന്ന‌താ‌യും അ‌ബൂ‌ബ‌ക്‌‌റ‌ത്ത്‌ h‌പറഞ്ഞിട്ടുണ്ട്. -‌അബൂദാവൂദ്: 5090)'

        
                 ,
      ]
    },
    {
      arabic: 'اللَّهُمَّ إِنِّـي أسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ في الدُّنْيَا وَالْآخِرَة، اللَّهُمَّ إِنِّـي أسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَينِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي',
      translation: 'അ‌ല്ലാ‌ഹു‌വേ, ഞാൻ നി‌ന്നോ‌ട്‌ ദു‌നി‌യാ‌വി‌ലും ആ‌ഖി‌റ‌ത്തി‌ലും വി‌ട്ടു‌വീ‌ഴ്‌‌ച‌യും സൗ‌ഖ്യ‌വും ചോ‌ദി‌ക്കു‌ന്നു. അ‌ല്ലാ‌ഹു‌വേ, എ‌ന്റെ ദീ‌നി‌ലും ദു‌നി‌യാ‌വി‌ലും കു‌ടും‌ബ‌ത്തി‌ലും സമ്പത്തിലും ഞാൻ നി‌ന്നോ‌ട്‌ വി‌ട്ടു‌വീ‌ഴ്‌‌ച‌യും സൗ‌ഖ്യ‌വും ചോ‌ദി‌ക്കു‌ന്നു. അ‌ല്ലാ‌ഹു‌വേ, എ‌ന്റെ ന്യൂ‌ന‌ത‌കൾ നീ മ‌റ‌ച്ചു വെ‌ക്കേ‌ണ‌മേ. എ‌ന്റെ വി‌ഹ്വ‌ല‌ത‌ക‌ളിൽ നീ എ‌നി‌ക്ക്‌ നിർ‌ഭ‌യ‌ത്വം നൽ‌കേ‌ണ‌മേ. അ‌ല്ലാ‌ഹു‌വേ, എ‌ന്നെ നീ മു‌ന്നി‌ലൂ‌ടെ‌യും പി‌ന്നിലൂ‌ടെ‌യും, വ‌ല‌തു‌ഭാ‌ഗ‌ത്തു‌കൂ‌ടെ‌യും ഇ‌ട‌തു‌ഭാ‌ഗ‌ത്തു‌കൂ‌ടെ‌യും, മു‌ക‌ളി‌ലൂ‌ടെ‌യും കാ‌ത്തു‌ര‌ക്ഷി‌ക്കേ‌ണ‌മേ. എ‌ന്റെ താ‌ഴ്‌‌ഭാ‌ഗ‌ത്തു‌കൂ‌ടെ (ഭൂ‌മി‌യിൽ) ആ‌ഴ്‌‌ത്ത‌പ്പെ‌ടു‌ന്ന‌തിൽ നി‌ന്ന്‌ നി‌ന്റെ മഹത്വം മുഖേന (നിന്നോട്) ഞാൻ അ‌ഭ‌യം തേ‌ടു‌ന്നു',
      references: [
        'ഈ ദി‌ക്‌‌ർ രാ‌വി‌ലേ‌യും വൈ‌കു‌ന്നേ‌ര‌വും ഒ‌രി‌ക്കൽ പോ‌ലും ന‌ബി ﷺ വി‌ട്ടു‌ക‌ള‌യാ‌റി‌ല്ലാ‌യി‌രു‌ന്നു‌വെ‌ന്ന്‌ അ‌ബ്ദു‌ല്ലാ‌ഹി‌ബ്‌‌നു ഉ‌മർ(റ) നി‌വേ‌ദ‌നം ചെ‌യ്യു‌ന്നു. -‌അ‌ഹ്‌‌മ‌ദ്‌, ഇ‌ബ്‌‌നു‌മാ‌ജ, അ‌ബൂ‌ദാ‌വൂ‌ദ്'

        
                 ,
      ]
    },
    {
      arabic:'اللَّهُمَّ فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ ، عَالِمَ الْغَيْبِ وَالشَّهَادَةِ ، لَا إِلٰهَ إِلَّا أَنْتَ رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ',
      translation: 'ആ‌കാ‌ശ‌ഭൂ‌മി‌കൾ സൃ‌ഷ്ടി‌ച്ച‌വ‌നായ, പ്രത്യക്ഷമായതും മറഞ്ഞതുമായ കാര്യങ്ങൾ അ‌റി‌യു‌ന്ന‌വ‌നുമാ‌യ അ‌ല്ലാ‌ഹു‌വേ, എ‌ല്ലാ വ‌സ്‌‌തു‌ക്ക‌ളു‌ടേ‌യും ര‌ക്ഷി‌താ‌വും ഉ‌ട‌മ‌യു‌മാ‌യവനേ! നീ‌യ‌ല്ലാ‌തെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല എന്ന് ഞാൻ സാക്ഷ്യം വഹിക്കുന്നു. എ‌ന്റെ ശ‌രീ‌ര‌ത്തി‌ന്റെ ദോ‌ഷ‌ത്തിൽ നി‌ന്നും ശൈ‌ത്വാ‌ന്റെ ദ്രോ‌ഹ‌ത്തിൽ നി‌ന്നും അ‌വ‌ന്റെ (അ‌വൻ എ‌ന്നെ ക്ഷ‌ണി‌ക്കു‌ന്ന‌തായ) ശിർ‌ക്കിൽ നി‌ന്നും, എ‌ന്നോ‌ടു ത‌ന്നെ ഞാൻ തി‌ന്മ ചെ‌യ്യു‌ന്ന‌തിൽ നി‌ന്നും, ഏ‌തെ‌ങ്കി‌ലും മുസ്‌ലി‌മി‌ലേ‌ക്ക്‌ ഞാൻ അ‌തി‌നെ(തിന്മയെ) തി‌രി‌ച്ചു‌വി‌ടു‌ന്ന‌തിൽ നി‌ന്നും നി‌ന്നോ‌ട്‌ ഞാൻ ശരണം തേ‌ടു‌ന്നു.',
      references: [
        'രാ‌വി‌ലേ‌യും വൈ‌കു‌ന്നേ‌ര‌വും, രാ‌ത്രി ഉ‌റ‌ങ്ങാൻ നേ‌ര‌ത്തും ഈ ദി‌ക്‌‌റ്‌ ചൊ‌ല്ലാൻ ന‌ബി ﷺ ത‌ന്നോ‌ട്‌ കൽ പി‌ച്ചി‌ട്ടു‌ണ്ടെ‌ന്ന്‌ അ‌ബൂ‌ബ‌ക്കർ സ്വി‌ദ്ദീ‌ഖ് ؓ  നി‌വേ‌ദ‌നം ചെ‌യ്യു‌ന്നു.‌ ‌-‌മു‌സ്‌‌ന‌ദ്‌ അ‌ഹ്‌‌മ‌ദ്'

        
                 ,
      ]
    },
    {
      arabic: 'بِسْمِ اللهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ(3)',
      translation: 'തന്റെ നാമത്തോടൊപ്പം, ഭൂമിയിലോ ആകാശത്തിലോ ഉള്ള യാതൊന്നും ദ്രോഹം ചെയ്യാത്തതായ അല്ലാഹുവിന്റെ നാമത്തിൽ. അവൻ എല്ലാം കേൾക്കുന്നവനും എല്ലാം അറിയുന്നവനുമാകുന്നു.',
      references: [
        'ഒ‌ര‌ടി‌മ ഈ ദി‌ക്‌‌റ്‌ രാ‌വി‌ലേ‌യും വൈ‌കു‌ന്നേ‌ര‌വും മൂ‌ന്നു പ്രാവശ്യം ചൊ‌ല്ലി‌യാൽ അ‌വ‌നെ യാ‌തൊ‌രു ദ്രോ‌ഹ‌വും ബാ‌ധി‌ക്കു‌ക‌യി‌ല്ലെ‌ന്ന്‌ നബി ﷺ പ‌റ‌ഞ്ഞ‌താ‌യി ഉസ്മാൻ ؓ  നി‌വേ‌ദ‌നം ചെ‌യ്യു‌ന്നു.‌ -‌സു‌ന‌നു‌ത്തിർ‌മി‌ദി, അ‌ബൂ‌ദാ‌വൂ‌ദ്'

        
                 ,
      ]
    },
    {
      arabic: '(3)رَضِيتُ بِاللهِ رَبًّا وَبِالْإسْلَامِ دِينًا وَبِمُحَمَّدٍﷺ نَبِيًّا',
      translation: 'അ‌ല്ലാ‌ഹു‌വി‌നെ റ‌ബ്ബാ‌യും ഇസ്‌ലാ‌മി‌നെ ദീ‌നാ‌യും മു‌ഹ‌മ്മ‌ദ്‌ ﷺയെ ന‌ബി‌യാ‌യും ഞാൻ തൃ‌പ്‌‌തി‌പ്പെ‌ട്ടു.',
      references: [
        'നബി ﷺ പറഞ്ഞു: നിശ്ചയം ഒരാൾ ഈ ദിക്‌ർ ദിവസവും രാവിലെ ചൊല്ലിയാൽ ഞാൻ എന്റെ നേതൃത്വത്തിൽ അയാളെ കൈപിടിച്ച് സ്വർഗ്ഗത്തിലേക്ക് പ്രവേശിപ്പിക്കുക തന്നെ ചെയ്യുന്നതാണ്. (സിൽസിലതു അഹാദീസു സ്സ്വഹീഹ: 2686)'

        
                 ,
      ]
    },
    {
      arabic: '    يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ ، أَصْلِحْ لِي شَأْنِي كُلَّهُ ، وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ',
      translation: 'എ‌ന്നെ‌ന്നും ജീ‌വി‌ച്ചി‌രി‌ക്കു‌ന്ന‌വ‌നേ, എ‌ല്ലാം നി‌യ‌ന്ത്രി‌ക്കു‌ന്ന‌വ‌നേ, നി‌ന്റെ കാ‌രു‌ണ്യം മുഖേന ഞാൻ (നിന്നോട്) സ‌ഹാ‌യം തേ‌ടു‌ന്നു. എ‌ന്റെ കാ‌ര്യ‌ങ്ങൾ മു‌ഴു‌വ‌നും എ‌നി‌ക്ക്‌ നീ ഗു‌ണ‌ക‌ര‌മാ‌ക്കി‌ത്ത‌രേ‌ണ‌മേ. ക‌ണ്ണി‌മ വെട്ടുന്നത്ര സ‌മ‌യം പോ‌ലും എ‌ന്നെ നീ എ‌ന്നി‌ലേ‌ക്ക് ഏൽ‌പി‌ക്ക‌രു‌തേ.',
      references: [
        'രാ‌വി‌ലേയും വൈ‌കു‌ന്നേ‌ര‌വും ഈ ദി‌ക്‌‌റ്‌ ചൊ‌ല്ലാൻ ന‌ബി ﷺ ഫാ‌ത്തി‌മ (റ) യോ‌ട്‌ വ‌സ്വി‌യ്യ‌ത്ത്‌ ചെ‌യ്‌‌ത‌താ‌യി അ‌ന‌സു‌ബ്‌‌നു മാ‌ലി‌ക്‌(റ) റി‌പ്പോർ‌ട്ട്‌ ചെ‌യ്യു‌ന്നു.‌ -‌സു‌ന‌നു‌ന്ന‌സാ‌ഈ'

        
                 ,
      ]
    },
    {
      arabic: 'أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلامِ ، وَكَلِمَةِ الإِخْلَاصِ، وَدِينِ نَبِيِّنَا مُحَمَّدٍ ﷺ ، وَمِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا ، وَمَا كَانَ مِنَ الْمُشْرِكِينَ',
      translation: 'ഇസ്‌ലാ‌മി‌ന്റെ ശു‌ദ്ധ‌പ്ര‌കൃ‌തി‌യി‌ലാ‌യി ഞ‌ങ്ങൾ പ്ര‌ഭാ‌ത‌ത്തിൽ പ്ര‌വേ‌ശി‌ച്ചു. ഏ‌കദൈ‌വാ‌രാ‌ധ‌ന‌യു‌ടെ വ‌ച‌ന‌ത്തി‌ലാ‌യി, ഞ‌ങ്ങ‌ളു‌ടെ ന‌ബി‌യാ‌യ മു‌ഹ‌മ്മ‌ദ്‌ ﷺന്റെ ദീ‌നി‌ലാ‌യി, മുസ്‌ലി‌മും ഹ‌നീ‌ഫു(ശിർ‌ക്കി‌നോ‌ട്‌ വി‌മു‌ഖ‌ത കാ‌ണി‌ച്ച്‌ തൗ‌ഹീ‌ദി‌ലേ‌ക്ക്‌ തി‌രി‌യു‌ന്ന‌വ‌നു)മാ‌യ ഞ‌ങ്ങ‌ളു‌ടെ പി‌താ‌വ്‌ ഇ‌ബ്‌‌റാ‌ഹിം(അ) ന്റെ മാർഗത്തിലാ‌യി‌. അ‌ദ്ദേ‌ഹം ബ‌ഹു‌ദൈ‌വാ‌രാ‌ധ‌ക‌രിൽ ഉൾ‌പ്പെ‌ട്ടവനായിരു‌ന്നി‌ല്ല.',
      references: [
        'احمد: 15367 ،  صححه الألباني في صحيح الجامع: 4674'

        
                 ,
      ]
    },
    {
      arabic: '(100)سُبْحَانَ اللهِ وَبِحَمْدِه',
      translation: 'അ‌ല്ലാ‌ഹു‌വി‌നെ സ്‌‌തു‌തി‌ക്കു‌ന്ന‌തോ‌ടൊ‌പ്പം അ‌വ‌ന്റെ പ‌രി‌ശു‌ദ്ധി‌യെ ഞാൻ വാ‌ഴ്‌‌ത്തു‌ന്നു.',
      references: [
        'ആരെങ്കിലും ‘സുബ്‌ഹാനല്ലാഹി വബി ഹംദിഹി’ എന്ന് നേരം പുലരുമ്പോഴും വൈകുന്നേരവും നൂറ് തവണ വീതം ചൊല്ലിയാൽ അന്തിമനാളിൽ ഒരാളും അത്രയുമോ അല്ലെങ്കിൽ അതിനേക്കാൾ കൂടുതലോ ചൊല്ലിയവരല്ലാതെ അതിനേക്കാൾ മികച്ചത് കൊണ്ടുവരികയില്ലെന്നും സമുദ്രത്തിലെ നുരകളോളം പാപങ്ങളുണ്ടെങ്കിലും അതെല്ലാം ഈ ദിക്‌ർ കാരണമായി പൊറുക്കപ്പെടുമെന്നും നബിﷺ പറഞ്ഞു. (മുസ്‌ലിം: 2692)'

        
                 ,
      ]
    },
    {
      arabic: 'لَا إِلٰهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيءٍ قَدِيرٌ(100)',
      translation: 'അ‌ല്ലാ‌ഹുവ‌ല്ലാ‌തെ ആ‌രാ‌ധ‌ന‌ക്കർ‌ഹ‌നാ‌യി മ‌റ്റാ‌രു‌മി‌ല്ല. അവൻ ഏകനാണ്. അ‌വ‌ന്‌ യാതൊരു പ‌ങ്കു‌കാരുമി‌ല്ല. അ‌വ‌നാ‌ണ്‌ എ‌ല്ലാ ആ‌ധി‌പ‌ത്യ‌വും. അ‌വ‌നാ‌ണ്‌ എ‌ല്ലാ സ്‌‌തു‌തി‌ക‌ളും. അ‌വൻ എ‌ല്ലാത്തിനും ക‌ഴി‌വു‌ള്ളവ‌നാ‌ണ്‌.',
      references: [
        '‌ഈ ദി‌ക്‌‌റ്‌ ആ‌രെ‌ങ്കി‌ലും 100 പ്രാ‌വ‌ശ്യം ചൊ‌ല്ലി‌യാൽ അ‌വ‌ന്‌ പ‌ത്ത്‌ അ‌ടി‌മ‌ക‌ളെ മോ‌ചി‌പ്പി‌ച്ച‌തി‌ന്ന്‌ തു‌ല്യ‌മാ‌യ പ്ര‌തിഫ‌ല‌മു‌‌ണ്ടെന്നും അ‌വ‌ന്‌ നൂ‌റ്‌ ന‌ന്മ‌കൾ രേ‌ഖ‌പ്പെ‌ടു‌ത്ത‌പ്പെ‌ടു‌ക‌യും അ‌വ‌നിൽ നി‌ന്ന്‌ നൂ‌റു പാ‌പ‌ങ്ങൾ മാ‌യ്‌‌ക്ക‌പ്പെ‌ടു‌ക‌യും ചെ‌യ്യു‌മെ‌ന്നും, വൈ‌കു‌ന്നേ‌രം വ‌രെ  അവന്പി‌ശാ‌ചിൽ നി‌ന്ന്‌ സം‌ര‌ക്ഷ‌ണം ഉ‌ണ്ടാ‌യി‌രി‌ക്കു‌മെ‌ന്നും, അ‌ത്ര‌യു‌മോ അ‌ല്ലെ‌ങ്കിൽ അ‌തി‌നേ‌ക്കാൾ കൂ‌ടു‌ത‌ലോ ചൊ‌ല്ലി‌യ‌വ‌ര‌ല്ലാ‌തെ അന്ത്യനാളിൽ അ‌തി‌നേ‌ക്കാൾ മി‌ക‌ച്ച‌ത്‌ കൊ‌ണ്ടു‌വ‌രി‌ക‌യി‌ല്ലെ‌ന്നും റ‌സൂ‌ലു‌ല്ലാ‌ഹി ﷺ പ‌റ‌ഞ്ഞ‌താ‌യി അ‌ബൂ‌ഹു‌റ‌യ്‌‌റ(റ) നി‌വേ‌ദ‌നം ചെ‌യ്യു‌ന്നു. ‌-‌(ബു‌ഖാ‌രി: 6403, മുസ്‌ലിം: 2691)'

        
                 ,
      ]
    },
    {
    arabic: 'سُبْحَانَ اللهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ ()()كَلِمَاتِهِ(3)',
      translation: 'അ‌ല്ലാ‌ഹു‌വി‌നെ സ്‌‌തു‌തി‌ക്കു‌ന്ന‌തോ‌ടൊ‌പ്പം അ‌വ‌ന്റെ പ‌രി‌ശു‌ദ്ധി‌യെ ഞാൻ വാ‌ഴ്‌‌ത്തു‌ന്നു. അ‌വ‌ന്റെ സൃ‌ഷ്ടി‌ക‌ളു‌ടെ എ‌ണ്ണ‌മ‌ത്ര‌യും. അ‌വൻ സ്വ‌യം സം‌തൃ‌പ്‌‌തി‌പ്പെ‌ടു‌ന്ന‌ത്ര‌യും. അ‌വ‌ന്റെ അർ‌ശി‌ന്റെ ഭാ‌ര‌ത്തി‌ന്റെ‌യ‌ത്ര‌യും. അ‌വ‌ന്റെ (എ‌ണ്ണ‌മ‌റ്റ) വ‌ച‌ന‌ങ്ങ‌ളു‌ടെ ആ‌ധി‌ക്യ‌ത്തി‌ന്റെ‌യ‌ത്ര‌യും!',
      references: [
        'ഈ നാ‌ലു ക‌ലി‌മ‌തു‌കൾ 3 പ്രാവശ്യം ചൊ‌ല്ലു‌ക‌യാ‌ണെങ്കിൽ നീ ചൊ‌ല്ലു‌ന്ന ദി‌ക്‌‌റു‌ക‌ളിൽ (ഏ‌റ്റ‌വും) ഭാരം തൂ‌ങ്ങു‌ക അ‌താ‌യി‌രി‌ക്കു‌മെ‌ന്ന്‌ ന‌ബി ﷺ ത‌ന്നോ‌ട്‌ പ‌റ‌ഞ്ഞ‌താ‌യി ഉ‌മ്മുൽ മു‌അ്‌മി‌നീൻ ജു‌വൈ‌രി‌യ (റ) നി‌വേ‌ദ‌നം ചെ‌യ്യു‌ന്നു. -‌സ്വ‌ഹീ‌ഹ്‌ മുസ്‌ലിം: 2726)'

        
                 ,
      ]
    },
    {
      arabic: 'اللَّهُمَّ إِنِّـي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً',
        translation: 'അ‌ല്ലാ‌ഹു‌വേ! ഉപകാരപ്രദമായ അറിവും വിശിഷ്ടമായ ഉപജീവനവും സ്വീകാര്യമായ കർമവും നി‌ന്നോ‌ട്‌ ഞാൻ ചോ‌ദി‌ക്കു‌ന്നു.',
        references: [
          'صححه الألباني في سنن ابن ماجة:٩٢٥'
  
          
                   ,
        ]
      },
      {
        arabic: '(100)أَسْتَغْفِرُ اللهَ وَأَتُوبُ إِلَيْهِ',
          translation: 'ഞാൻ അ‌ല്ലാ‌ഹു‌വി‌നോ‌ട്‌ പൊ‌റു‌ക്ക‌ലി‌നെ തേ‌ടു‌ക‌യും അ‌വ‌നി‌ലേ‌ക്ക്‌ പാ‌ശ്ചാ‌ത‌പി‌ച്ചു മ‌ടങ്ങു‌ക‌യും ചെ‌യ്യു‌ന്നു.',
          references: [
            `നബി ﷺ പറഞ്ഞു: “അല്ലാഹുവാണേ സത്യം! ഒരു ദിവസം എഴുപതിലധികം പ്രാവശ്യം ഞാൻ അല്ലാഹുവിനോട് പൊറുക്കുവാൻ തേടുകയും അവങ്കലേക്ക് പശ്ചാതപിച്ചു മടങ്ങുകയും ചെയ്യുന്നു!” (ബുഖാരി: 6307) 

            ഇ‌ബ്‌‌നു ഉ‌മർ(റ) വിൽ നി‌ന്ന്‌ നി‌വേ‌ദ‌നം: റ‌സൂ‌ലു‌ല്ലാ‌ഹി ﷺ പ‌റ‌ഞ്ഞു: “ജ‌ന‌ങ്ങ‌ളേ, നി‌ങ്ങൾ അ‌ല്ലാ‌ഹു‌വി‌ലേ‌ക്ക്‌ പാ‌ശ്ചാ‌ത‌പി‌ച്ചു മ‌ട‌ങ്ങു‌വീൻ! അ‌വ‌നോ‌ട്‌ നി‌ങ്ങൾ പൊ‌റു‌ക്ക‌ലി‌നെ തേ‌ടു‌ക‌യും ചെ‌യ്യു‌വീൻ! എ‌ന്തെ‌ന്നാൽ, ഞാൻ ത‌ന്നെ ഒ‌രു ദി‌വ‌സം നൂ‌റു പ്രാവശ്യം അ‌വ‌നോ‌ട്‌ തൗ‌ബ ചെ‌യ്യാ‌റു‌ണ്ട്‌.” ‌(സ്വ‌ഹീ‌ഹ്‌ മു‌സ്‌‌ലിം: 2702, അ‌ഹ്‌‌മ‌ദ്‌)`
            
                     ,
          ]
        },

 
];

const [isExpanded, setIsExpanded] = useState(false);
  const [translations, setTranslations] = useState(Array(texts.length).fill(false));
  const [references, setReferences] = useState(Array(texts.length).fill(false));

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleTranslationClick = (index) => {
    setTranslations((prev) => {
      const newTranslations = [...prev];
      newTranslations[index] = !newTranslations[index];
      return newTranslations;
    });
  };

  const handleReferenceClick = (index) => {
    setReferences((prev) => {
      const newReferences = [...prev];
      newReferences[index] = !newReferences[index];
      return newReferences;
    });
  };

  return (
    
      <div className={style.block}>
        <h1 onClick={handleExpandClick} style={{ cursor: 'pointer' }}>
        രാവിലെ പതിവാക്കേണ്ട ദുആകളും ദിക്റുകളും
        </h1>
        {isExpanded && (
          <div>
            {texts.map((text, index) => (
              <div key={index} className={style.textContainer}>
                <span>{index + 1}</span>
                <p>{text.arabic}</p>
                <button onClick={() => handleTranslationClick(index)} className={style.button}>
                  {translations[index] ? 'Hide Translation' : 'Show Translation'}
                </button>
                {translations[index] && (
                  <p>{text.translation}</p>
                )}
                <button onClick={() => handleReferenceClick(index)}className={style.button}>
                  {references[index] ? 'Hide References' : 'Show References'}
                </button>
                {references[index] && (
                  <div>
                    {text.references.map((ref, refIndex) => (
                      <p key={refIndex}>{ref}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    
  );
};

export default Morning;