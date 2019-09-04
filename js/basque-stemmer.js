// This file was generated automatically by the Snowball to Javascript compiler
// http://snowballstem.org/

/**@constructor*/
function BasqueStemmer() {
    var base = new BaseStemmer();
    /** @const */ var a_0 = [
        ["idea", -1, 1],
        ["bidea", 0, 1],
        ["kidea", 0, 1],
        ["pidea", 0, 1],
        ["kundea", -1, 1],
        ["galea", -1, 1],
        ["tailea", -1, 1],
        ["tzailea", -1, 1],
        ["gunea", -1, 1],
        ["kunea", -1, 1],
        ["tzaga", -1, 1],
        ["gaia", -1, 1],
        ["aldia", -1, 1],
        ["taldia", 12, 1],
        ["karia", -1, 1],
        ["garria", -1, 2],
        ["karria", -1, 1],
        ["ka", -1, 1],
        ["tzaka", 17, 1],
        ["la", -1, 1],
        ["mena", -1, 1],
        ["pena", -1, 1],
        ["kina", -1, 1],
        ["ezina", -1, 1],
        ["tezina", 23, 1],
        ["kuna", -1, 1],
        ["tuna", -1, 1],
        ["kizuna", -1, 1],
        ["era", -1, 1],
        ["bera", 28, 1],
        ["arabera", 29, 4],
        ["kera", 28, 1],
        ["pera", 28, 1],
        ["orra", -1, 1],
        ["korra", 33, 1],
        ["dura", -1, 1],
        ["gura", -1, 1],
        ["kura", -1, 1],
        ["tura", -1, 1],
        ["eta", -1, 1],
        ["keta", 39, 1],
        ["gailua", -1, 1],
        ["eza", -1, 1],
        ["erreza", 42, 1],
        ["tza", -1, 2],
        ["gaitza", 44, 1],
        ["kaitza", 44, 1],
        ["kuntza", 44, 1],
        ["ide", -1, 1],
        ["bide", 48, 1],
        ["kide", 48, 1],
        ["pide", 48, 1],
        ["kunde", -1, 1],
        ["tzake", -1, 1],
        ["tzeke", -1, 1],
        ["le", -1, 1],
        ["gale", 55, 1],
        ["taile", 55, 1],
        ["tzaile", 55, 1],
        ["gune", -1, 1],
        ["kune", -1, 1],
        ["tze", -1, 1],
        ["atze", 61, 1],
        ["gai", -1, 1],
        ["aldi", -1, 1],
        ["taldi", 64, 1],
        ["ki", -1, 1],
        ["ari", -1, 1],
        ["kari", 67, 1],
        ["lari", 67, 1],
        ["tari", 67, 1],
        ["etari", 70, 1],
        ["garri", -1, 2],
        ["karri", -1, 1],
        ["arazi", -1, 1],
        ["tarazi", 74, 1],
        ["an", -1, 1],
        ["ean", 76, 1],
        ["rean", 77, 1],
        ["kan", 76, 1],
        ["etan", 76, 1],
        ["atseden", -1, 3],
        ["men", -1, 1],
        ["pen", -1, 1],
        ["kin", -1, 1],
        ["rekin", 84, 1],
        ["ezin", -1, 1],
        ["tezin", 86, 1],
        ["tun", -1, 1],
        ["kizun", -1, 1],
        ["go", -1, 1],
        ["ago", 90, 1],
        ["tio", -1, 1],
        ["dako", -1, 1],
        ["or", -1, 1],
        ["kor", 94, 1],
        ["tzat", -1, 1],
        ["du", -1, 1],
        ["gailu", -1, 1],
        ["tu", -1, 1],
        ["atu", 99, 1],
        ["aldatu", 100, 1],
        ["tatu", 100, 1],
        ["baditu", 99, 5],
        ["ez", -1, 1],
        ["errez", 104, 1],
        ["tzez", 104, 1],
        ["gaitz", -1, 1],
        ["kaitz", -1, 1]
    ];

    /** @const */ var a_1 = [
        ["ada", -1, 1],
        ["kada", 0, 1],
        ["anda", -1, 1],
        ["denda", -1, 1],
        ["gabea", -1, 1],
        ["kabea", -1, 1],
        ["aldea", -1, 1],
        ["kaldea", 6, 1],
        ["taldea", 6, 1],
        ["ordea", -1, 1],
        ["zalea", -1, 1],
        ["tzalea", 10, 1],
        ["gilea", -1, 1],
        ["emea", -1, 1],
        ["kumea", -1, 1],
        ["nea", -1, 1],
        ["enea", 15, 1],
        ["zionea", 15, 1],
        ["unea", 15, 1],
        ["gunea", 18, 1],
        ["pea", -1, 1],
        ["aurrea", -1, 1],
        ["tea", -1, 1],
        ["kotea", 22, 1],
        ["artea", 22, 1],
        ["ostea", 22, 1],
        ["etxea", -1, 1],
        ["ga", -1, 1],
        ["anga", 27, 1],
        ["gaia", -1, 1],
        ["aldia", -1, 1],
        ["taldia", 30, 1],
        ["handia", -1, 1],
        ["mendia", -1, 1],
        ["geia", -1, 1],
        ["egia", -1, 1],
        ["degia", 35, 1],
        ["tegia", 35, 1],
        ["nahia", -1, 1],
        ["ohia", -1, 1],
        ["kia", -1, 1],
        ["tokia", 40, 1],
        ["oia", -1, 1],
        ["koia", 42, 1],
        ["aria", -1, 1],
        ["karia", 44, 1],
        ["laria", 44, 1],
        ["taria", 44, 1],
        ["eria", -1, 1],
        ["keria", 48, 1],
        ["teria", 48, 1],
        ["garria", -1, 2],
        ["larria", -1, 1],
        ["kirria", -1, 1],
        ["duria", -1, 1],
        ["asia", -1, 1],
        ["tia", -1, 1],
        ["ezia", -1, 1],
        ["bizia", -1, 1],
        ["ontzia", -1, 1],
        ["ka", -1, 1],
        ["joka", 60, 3],
        ["aurka", 60, 10],
        ["ska", 60, 1],
        ["xka", 60, 1],
        ["zka", 60, 1],
        ["gibela", -1, 1],
        ["gela", -1, 1],
        ["kaila", -1, 1],
        ["skila", -1, 1],
        ["tila", -1, 1],
        ["ola", -1, 1],
        ["na", -1, 1],
        ["kana", 72, 1],
        ["ena", 72, 1],
        ["garrena", 74, 1],
        ["gerrena", 74, 1],
        ["urrena", 74, 1],
        ["zaina", 72, 1],
        ["tzaina", 78, 1],
        ["kina", 72, 1],
        ["mina", 72, 1],
        ["garna", 72, 1],
        ["una", 72, 1],
        ["duna", 83, 1],
        ["asuna", 83, 1],
        ["tasuna", 85, 1],
        ["ondoa", -1, 1],
        ["kondoa", 87, 1],
        ["ngoa", -1, 1],
        ["zioa", -1, 1],
        ["koa", -1, 1],
        ["takoa", 91, 1],
        ["zkoa", 91, 1],
        ["noa", -1, 1],
        ["zinoa", 94, 1],
        ["aroa", -1, 1],
        ["taroa", 96, 1],
        ["zaroa", 96, 1],
        ["eroa", -1, 1],
        ["oroa", -1, 1],
        ["osoa", -1, 1],
        ["toa", -1, 1],
        ["ttoa", 102, 1],
        ["ztoa", 102, 1],
        ["txoa", -1, 1],
        ["tzoa", -1, 1],
        ["\u00F1oa", -1, 1],
        ["ra", -1, 1],
        ["ara", 108, 1],
        ["dara", 109, 1],
        ["liara", 109, 1],
        ["tiara", 109, 1],
        ["tara", 109, 1],
        ["etara", 113, 1],
        ["tzara", 109, 1],
        ["bera", 108, 1],
        ["kera", 108, 1],
        ["pera", 108, 1],
        ["ora", 108, 2],
        ["tzarra", 108, 1],
        ["korra", 108, 1],
        ["tra", 108, 1],
        ["sa", -1, 1],
        ["osa", 123, 1],
        ["ta", -1, 1],
        ["eta", 125, 1],
        ["keta", 126, 1],
        ["sta", 125, 1],
        ["dua", -1, 1],
        ["mendua", 129, 1],
        ["ordua", 129, 1],
        ["lekua", -1, 1],
        ["burua", -1, 1],
        ["durua", -1, 1],
        ["tsua", -1, 1],
        ["tua", -1, 1],
        ["mentua", 136, 1],
        ["estua", 136, 1],
        ["txua", -1, 1],
        ["zua", -1, 1],
        ["tzua", 140, 1],
        ["za", -1, 1],
        ["eza", 142, 1],
        ["eroza", 142, 1],
        ["tza", 142, 2],
        ["koitza", 145, 1],
        ["antza", 145, 1],
        ["gintza", 145, 1],
        ["kintza", 145, 1],
        ["kuntza", 145, 1],
        ["gabe", -1, 1],
        ["kabe", -1, 1],
        ["kide", -1, 1],
        ["alde", -1, 1],
        ["kalde", 154, 1],
        ["talde", 154, 1],
        ["orde", -1, 1],
        ["ge", -1, 1],
        ["zale", -1, 1],
        ["tzale", 159, 1],
        ["gile", -1, 1],
        ["eme", -1, 1],
        ["kume", -1, 1],
        ["ne", -1, 1],
        ["zione", 164, 1],
        ["une", 164, 1],
        ["gune", 166, 1],
        ["pe", -1, 1],
        ["aurre", -1, 1],
        ["te", -1, 1],
        ["kote", 170, 1],
        ["arte", 170, 1],
        ["oste", 170, 1],
        ["etxe", -1, 1],
        ["gai", -1, 1],
        ["di", -1, 1],
        ["aldi", 176, 1],
        ["taldi", 177, 1],
        ["geldi", 176, 8],
        ["handi", 176, 1],
        ["mendi", 176, 1],
        ["gei", -1, 1],
        ["egi", -1, 1],
        ["degi", 183, 1],
        ["tegi", 183, 1],
        ["nahi", -1, 1],
        ["ohi", -1, 1],
        ["ki", -1, 1],
        ["toki", 188, 1],
        ["oi", -1, 1],
        ["goi", 190, 1],
        ["koi", 190, 1],
        ["ari", -1, 1],
        ["kari", 193, 1],
        ["lari", 193, 1],
        ["tari", 193, 1],
        ["garri", -1, 2],
        ["larri", -1, 1],
        ["kirri", -1, 1],
        ["duri", -1, 1],
        ["asi", -1, 1],
        ["ti", -1, 1],
        ["ontzi", -1, 1],
        ["\u00F1i", -1, 1],
        ["ak", -1, 1],
        ["ek", -1, 1],
        ["tarik", -1, 1],
        ["gibel", -1, 1],
        ["ail", -1, 1],
        ["kail", 209, 1],
        ["kan", -1, 1],
        ["tan", -1, 1],
        ["etan", 212, 1],
        ["en", -1, 4],
        ["ren", 214, 2],
        ["garren", 215, 1],
        ["gerren", 215, 1],
        ["urren", 215, 1],
        ["ten", 214, 4],
        ["tzen", 214, 4],
        ["zain", -1, 1],
        ["tzain", 221, 1],
        ["kin", -1, 1],
        ["min", -1, 1],
        ["dun", -1, 1],
        ["asun", -1, 1],
        ["tasun", 226, 1],
        ["aizun", -1, 1],
        ["ondo", -1, 1],
        ["kondo", 229, 1],
        ["go", -1, 1],
        ["ngo", 231, 1],
        ["zio", -1, 1],
        ["ko", -1, 1],
        ["trako", 234, 5],
        ["tako", 234, 1],
        ["etako", 236, 1],
        ["eko", 234, 1],
        ["tariko", 234, 1],
        ["sko", 234, 1],
        ["tuko", 234, 1],
        ["minutuko", 241, 6],
        ["zko", 234, 1],
        ["no", -1, 1],
        ["zino", 244, 1],
        ["ro", -1, 1],
        ["aro", 246, 1],
        ["igaro", 247, 9],
        ["taro", 247, 1],
        ["zaro", 247, 1],
        ["ero", 246, 1],
        ["giro", 246, 1],
        ["oro", 246, 1],
        ["oso", -1, 1],
        ["to", -1, 1],
        ["tto", 255, 1],
        ["zto", 255, 1],
        ["txo", -1, 1],
        ["tzo", -1, 1],
        ["gintzo", 259, 1],
        ["\u00F1o", -1, 1],
        ["zp", -1, 1],
        ["ar", -1, 1],
        ["dar", 263, 1],
        ["behar", 263, 1],
        ["zehar", 263, 7],
        ["liar", 263, 1],
        ["tiar", 263, 1],
        ["tar", 263, 1],
        ["tzar", 263, 1],
        ["or", -1, 2],
        ["kor", 271, 1],
        ["os", -1, 1],
        ["ket", -1, 1],
        ["du", -1, 1],
        ["mendu", 275, 1],
        ["ordu", 275, 1],
        ["leku", -1, 1],
        ["buru", -1, 2],
        ["duru", -1, 1],
        ["tsu", -1, 1],
        ["tu", -1, 1],
        ["tatu", 282, 4],
        ["mentu", 282, 1],
        ["estu", 282, 1],
        ["txu", -1, 1],
        ["zu", -1, 1],
        ["tzu", 287, 1],
        ["gintzu", 288, 1],
        ["z", -1, 1],
        ["ez", 290, 1],
        ["eroz", 290, 1],
        ["tz", 290, 1],
        ["koitz", 293, 1]
    ];

    /** @const */ var a_2 = [
        ["zlea", -1, 2],
        ["keria", -1, 1],
        ["la", -1, 1],
        ["era", -1, 1],
        ["dade", -1, 1],
        ["tade", -1, 1],
        ["date", -1, 1],
        ["tate", -1, 1],
        ["gi", -1, 1],
        ["ki", -1, 1],
        ["ik", -1, 1],
        ["lanik", 10, 1],
        ["rik", 10, 1],
        ["larik", 12, 1],
        ["ztik", 10, 1],
        ["go", -1, 1],
        ["ro", -1, 1],
        ["ero", 16, 1],
        ["to", -1, 1]
    ];

    /** @const */ var /** Array<int> */ g_v = [17, 65, 16];

    var /** number */ I_p2 = 0;
    var /** number */ I_p1 = 0;
    var /** number */ I_pV = 0;


    /** @return {boolean} */
    function r_mark_regions() {
        // (, line 23
        I_pV = base.limit;
        I_p1 = base.limit;
        I_p2 = base.limit;
        // do, line 29
        var /** number */ v_1 = base.cursor;
        lab0: {
            // (, line 29
            // or, line 31
            lab1: {
                var /** number */ v_2 = base.cursor;
                lab2: {
                    // (, line 30
                    if (!(base.in_grouping(g_v, 97, 117)))
                    {
                        break lab2;
                    }
                    // or, line 30
                    lab3: {
                        var /** number */ v_3 = base.cursor;
                        lab4: {
                            // (, line 30
                            if (!(base.out_grouping(g_v, 97, 117)))
                            {
                                break lab4;
                            }
                            // gopast, line 30
                            golab5: while(true)
                            {
                                lab6: {
                                    if (!(base.in_grouping(g_v, 97, 117)))
                                    {
                                        break lab6;
                                    }
                                    break golab5;
                                }
                                if (base.cursor >= base.limit)
                                {
                                    break lab4;
                                }
                                base.cursor++;
                            }
                            break lab3;
                        }
                        base.cursor = v_3;
                        // (, line 30
                        if (!(base.in_grouping(g_v, 97, 117)))
                        {
                            break lab2;
                        }
                        // gopast, line 30
                        golab7: while(true)
                        {
                            lab8: {
                                if (!(base.out_grouping(g_v, 97, 117)))
                                {
                                    break lab8;
                                }
                                break golab7;
                            }
                            if (base.cursor >= base.limit)
                            {
                                break lab2;
                            }
                            base.cursor++;
                        }
                    }
                    break lab1;
                }
                base.cursor = v_2;
                // (, line 32
                if (!(base.out_grouping(g_v, 97, 117)))
                {
                    break lab0;
                }
                // or, line 32
                lab9: {
                    var /** number */ v_6 = base.cursor;
                    lab10: {
                        // (, line 32
                        if (!(base.out_grouping(g_v, 97, 117)))
                        {
                            break lab10;
                        }
                        // gopast, line 32
                        golab11: while(true)
                        {
                            lab12: {
                                if (!(base.in_grouping(g_v, 97, 117)))
                                {
                                    break lab12;
                                }
                                break golab11;
                            }
                            if (base.cursor >= base.limit)
                            {
                                break lab10;
                            }
                            base.cursor++;
                        }
                        break lab9;
                    }
                    base.cursor = v_6;
                    // (, line 32
                    if (!(base.in_grouping(g_v, 97, 117)))
                    {
                        break lab0;
                    }
                    // next, line 32
                    if (base.cursor >= base.limit)
                    {
                        break lab0;
                    }
                    base.cursor++;
                }
            }
            // setmark pV, line 33
            I_pV = base.cursor;
        }
        base.cursor = v_1;
        // do, line 35
        var /** number */ v_8 = base.cursor;
        lab13: {
            // (, line 35
            // gopast, line 36
            golab14: while(true)
            {
                lab15: {
                    if (!(base.in_grouping(g_v, 97, 117)))
                    {
                        break lab15;
                    }
                    break golab14;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 36
            golab16: while(true)
            {
                lab17: {
                    if (!(base.out_grouping(g_v, 97, 117)))
                    {
                        break lab17;
                    }
                    break golab16;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p1, line 36
            I_p1 = base.cursor;
            // gopast, line 37
            golab18: while(true)
            {
                lab19: {
                    if (!(base.in_grouping(g_v, 97, 117)))
                    {
                        break lab19;
                    }
                    break golab18;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // gopast, line 37
            golab20: while(true)
            {
                lab21: {
                    if (!(base.out_grouping(g_v, 97, 117)))
                    {
                        break lab21;
                    }
                    break golab20;
                }
                if (base.cursor >= base.limit)
                {
                    break lab13;
                }
                base.cursor++;
            }
            // setmark p2, line 37
            I_p2 = base.cursor;
        }
        base.cursor = v_8;
        return true;
    };

    /** @return {boolean} */
    function r_RV() {
        if (!(I_pV <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R2() {
        if (!(I_p2 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_R1() {
        if (!(I_p1 <= base.cursor))
        {
            return false;
        }
        return true;
    };

    /** @return {boolean} */
    function r_aditzak() {
        var /** number */ among_var;
        // (, line 47
        // [, line 48
        base.ket = base.cursor;
        // substring, line 48
        among_var = base.find_among_b(a_0);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 48
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 59
                // call RV, line 59
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 59
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 61
                // call R2, line 61
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 61
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 63
                // <-, line 63
                if (!base.slice_from("atseden"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 65
                // <-, line 65
                if (!base.slice_from("arabera"))
                {
                    return false;
                }
                break;
            case 5:
                // (, line 67
                // <-, line 67
                if (!base.slice_from("baditu"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_izenak() {
        var /** number */ among_var;
        // (, line 72
        // [, line 73
        base.ket = base.cursor;
        // substring, line 73
        among_var = base.find_among_b(a_1);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 73
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 103
                // call RV, line 103
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 103
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 105
                // call R2, line 105
                if (!r_R2())
                {
                    return false;
                }
                // delete, line 105
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 3:
                // (, line 107
                // <-, line 107
                if (!base.slice_from("jok"))
                {
                    return false;
                }
                break;
            case 4:
                // (, line 109
                // call R1, line 109
                if (!r_R1())
                {
                    return false;
                }
                // delete, line 109
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 5:
                // (, line 111
                // <-, line 111
                if (!base.slice_from("tra"))
                {
                    return false;
                }
                break;
            case 6:
                // (, line 113
                // <-, line 113
                if (!base.slice_from("minutu"))
                {
                    return false;
                }
                break;
            case 7:
                // (, line 115
                // <-, line 115
                if (!base.slice_from("zehar"))
                {
                    return false;
                }
                break;
            case 8:
                // (, line 117
                // <-, line 117
                if (!base.slice_from("geldi"))
                {
                    return false;
                }
                break;
            case 9:
                // (, line 119
                // <-, line 119
                if (!base.slice_from("igaro"))
                {
                    return false;
                }
                break;
            case 10:
                // (, line 121
                // <-, line 121
                if (!base.slice_from("aurka"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    /** @return {boolean} */
    function r_adjetiboak() {
        var /** number */ among_var;
        // (, line 125
        // [, line 126
        base.ket = base.cursor;
        // substring, line 126
        among_var = base.find_among_b(a_2);
        if (among_var == 0)
        {
            return false;
        }
        // ], line 126
        base.bra = base.cursor;
        switch (among_var) {
            case 1:
                // (, line 129
                // call RV, line 129
                if (!r_RV())
                {
                    return false;
                }
                // delete, line 129
                if (!base.slice_del())
                {
                    return false;
                }
                break;
            case 2:
                // (, line 131
                // <-, line 131
                if (!base.slice_from("z"))
                {
                    return false;
                }
                break;
        }
        return true;
    };

    this.stem = /** @return {boolean} */ function() {
        // (, line 137
        // do, line 138
        lab0: {
            // call mark_regions, line 138
            if (!r_mark_regions())
            {
                break lab0;
            }
        }
        // backwards, line 139
        base.limit_backward = base.cursor; base.cursor = base.limit;
        // (, line 139
        // repeat, line 140
        replab1: while(true)
        {
            var /** number */ v_2 = base.limit - base.cursor;
            lab2: {
                // call aditzak, line 140
                if (!r_aditzak())
                {
                    break lab2;
                }
                continue replab1;
            }
            base.cursor = base.limit - v_2;
            break replab1;
        }
        // repeat, line 141
        replab3: while(true)
        {
            var /** number */ v_3 = base.limit - base.cursor;
            lab4: {
                // call izenak, line 141
                if (!r_izenak())
                {
                    break lab4;
                }
                continue replab3;
            }
            base.cursor = base.limit - v_3;
            break replab3;
        }
        // do, line 142
        var /** number */ v_4 = base.limit - base.cursor;
        lab5: {
            // call adjetiboak, line 142
            if (!r_adjetiboak())
            {
                break lab5;
            }
        }
        base.cursor = base.limit - v_4;
        base.cursor = base.limit_backward;
        return true;
    };

    /**@return{string}*/
    this['stemWord'] = function(/**string*/word) {
        base.setCurrent(word);
        this.stem();
        return base.getCurrent();
    };
};
window['BasqueStemmer'] = BasqueStemmer;
