const agencies = [
  {
    id: 0,
    agencyName: "Merdassi",
    agencyAdress: "Habib bougatfa",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72369896,
    agencyEmail: "merdassi@outlook.com",
    agencyPassword: "achrafagency",
    agencyPicture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/KOC_Logo_for_wikipedia.png/1200px-KOC_Logo_for_wikipedia.png"
  },
  {
    id: 1,
    agencyName: "Europcar",
    agencyAdress: "Aeroport Carthage",
    agencyState: "Tunis",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71258963,
    agencyEmail: "europcar@outlook.com",
    agencyPassword: "059achraf12586agency",
    agencyPicture:
      "https://st2.depositphotos.com/2172301/6729/v/950/depositphotos_67294905-stock-illustration-concept-logo-of-wedding-agency.jpg"
  },
  {
    id: 2,
    agencyName: "Hertz",
    agencyAdress: "1025,rue hedi nouira",
    agencyState: "Mahdia",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 22111111,
    agencyEmail: "hertz2020@gmail.com",
    agencyPassword: "hertz2020",
    agencyPicture:
      "https://image.shutterstock.com/image-vector/wedding-car-line-icon-260nw-1035638845.jpg"
  },
  {
    id: 3,
    agencyName: "We7ida Rent A Car",
    agencyAdress: "Avenue Habib Bourghuiba en face de Comar",
    agencyState: "Sfax",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 98123456,
    agencyEmail: "we7ida123@yahoo.fr",
    agencyPassword: "we7ida963",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTepDOY8XPD9Wj9tCDXCxfsU6De6neyRT4worpQdv3PVPMqTrCh"
  },
  {
    id: 4,
    agencyName: "Lac Rent Car",
    agencyAdress: "25, lac dra win",
    agencyState: "Tunis",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71963000,
    agencyEmail: "lacrentcar@lacrentcar.com",
    agencyPassword: "0000000000",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWGIk5-3MVQY65FFtAOU9OijzeLL07DUmeQyHejGLc19D_O1n1"
  },
  {
    id: 5,
    agencyName: "Mega Car",
    agencyAdress: "on face de lycée Franko Arab",
    agencystate: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 90000000,
    agencyCmail: "mega123456789@gmail.com",
    agencyPassword: "mega123456789",
    agencyPicture:
      "https://www.finsmes.com/wp-content/uploads/2017/10/foxrentacar.jpg"
  },
  {
    id: 6,
    agencyName: "Germany Car",
    agencyAdress: "Kasserie in front of Agil",
    agencyState: "Kasserine",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 25306987,
    agencyEmail: "germany@germany.gn",
    agencyPassword: "buy a volkswageagency",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRjQOSwt56GnI09cjq417PXyasGaKnHHINqhBZ8ZwdxtJ_U7as"
  },
  {
    id: 7,
    agencyName: "Khedhri Rent Car",
    agencyAdress: "Eroukkey",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72543173,
    agencyEmail: "khedhri@gmail.com",
    agencyPassword: "Khedhri2365",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcLiyCZzimaHvIG2cJF4oJZHjFFPv7yr3w9RiWZsOdSOS2vYmk"
  },
  {
    id: 8,
    agencyName: "Zaneni Rent",
    agencyAdress: "gafsa nord",
    agencyState: "Gafsa",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 78693693,
    agencyEmail: "zaneni@outlook.com",
    agencyPassword: "02369850",
    agencyPicture: "https://www.bodal.com/img/BodalLogo.png"
  },
  {
    id: 9,
    agencyName: "Neuf rent",
    agencyAdress: "gafsa batoire",
    agencyState: "Gafsa",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 74563963,
    agencyEmail: "neufdix@neuf.com",
    agencyPassword: "neuf dixonze",
    agencyPicture:
      "https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg"
  },
  {
    id: 10,
    agencyName: "Gafsa for all",
    agencyAdress: "123, devant la poste",
    agencyState: "Gafsa",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 74321321,
    agencyEmail: "gafsaforll@gmail.com",
    agencyPassword: "gafsaforalltunisian",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMHel7hC6csYhXwhMV6n6rE_CVPKtyDKARgdmXQC8j7fhGVXQI"
  },
  {
    id: 11,
    agencyName: "Onze",
    agencyAdress: "cité la santée",
    agencyState: "Mednine",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72369369,
    agencyEmail: "onze@gmail.com",
    agencyPassword: "onzedouzetreize",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrnuJRqixQ6D8HBDTYCM8GZm3_8L_vpNyUd0kcR6_vy16VscA_"
  },
  {
    id: 12,
    agencyName: "Douze Car",
    agencyAdress: "Korniche",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72212330,
    agencyEmail: "sixdouze@gmail.com",
    agencyPassword: "douzedouze",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRncNWa0KU7fvjQVcqbeTfXh2H2WPGu4gSQPZBStNOP53O5iYQw"
  },
  {
    id: 13,
    agencyName: "Third Car",
    agencyAdress: "Hamam lgzez",
    agencyState: "Nabeul",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72369369,
    agencyEmail: "third@gmail.com",
    agencyPassword: "thirdthird",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCpHuLvB25DgFYFANs-yITS6hu-Ghb1RcRHdaaV_GXnRgnmSn"
  },
  {
    id: 14,
    agencyName: "Even Cars",
    agencyAdress: "El bhira",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72536536,
    agencyEmail: "even@gmail.com",
    agencyPassword: "725353535353",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTeBZUuJguIFRYzn8fWpjSqAxl3JjR1gncAXn8CRAaOOMeSmA2A"
  },
  {
    id: 15,
    agencyName: "Tomorrow Car",
    agencyAdress: "Borej Ghames",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72543543,
    agencyEmail: "tomorrow@gmail.com",
    agencyPassword: "123456",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR73pb9RcPZNatPX2sZKvCr0t0OGvA7qjMDTbfh9cgtyUTL_FhZ"
  },
  {
    id: 16,
    agencyName: "Back Rent",
    agencyAdress: "Wed el Marej",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72555333,
    agencyEmail: "backrent@gmail.com",
    agencyPassword: "0000000",
    agencyPicture:
      "https://i.pinimg.com/originals/85/eb/c5/85ebc55a8a4508072cf5a5847e0469b1.jpg"
  },
  {
    id: 17,
    agencyName: "Today rent",
    agencyAdress: "El fawar",
    agencyState: "Tataouine",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 77777777,
    agencyEmail: "today@gmail.com",
    agencyPassword: "azerty",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTq-bpmOGwy5xi-qAUiOUDpZ6LEwfxwC-pwHmH3lPk7K23q3GhY"
  },
  {
    id: 18,
    agencyName: "Mommy Rent",
    agencyAdress: "Sbiba",
    agencyState: "Sliana",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 75757575,
    agencyEmail: "mommy@gmail.com",
    agencyPassword: "Apmopmdl",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4ogeOxJQ_dWPH7SmNv2CUuGZht530L21CcdMwN4SXoPxhIGtp"
  },
  {
    id: 19,
    agencyName: "Green Rent ",
    agencyAdress: "El monguela",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72727272,
    agencyEmail: "green@gmail.com",
    agencyPassword: "@gmail.com",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUJaFikBGhv7kig1jI1xEx7LSxpZm-6U0DjSB4K2s2fkk6GilI"
  },
  {
    id: 20,
    agencyName: "Blues for All",
    agencyAdress: "Bou Hajla",
    agencyState: "Sidi Bouzid",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 78797979,
    agencyEmail: "blues@gmail.com",
    agencyPassword: "Blues",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGzxm_QrS8_IOARNDl1s6nJ522_NsMfRvsBnjjyfCUadeUTM6r"
  },
  {
    id: 21,
    agencyName: "Chikhaoui Rent",
    agencyAdress: "Sidi Bouzid Centre",
    agencyState: "Sidi Bouzid",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 78787878,
    agencyEmail: "chikhawoui@gmail.com",
    agencyPassword: "78787878",
    agencyPicture: ""
  },
  {
    id: 22,
    agencyName: "Happy Hour",
    agencyAdress: "Mahdia Centre",
    agencyState: "Mahdia",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73737373,
    agencyEmail: "happy@gmail.com",
    agencyPassword: "73737373",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkHvRgf523oBKpbphtO1e3WvqcR5VblA2F1MK1FizMxR6ANmd5"
  },
  {
    id: 23,
    agencyName: "Tours",
    agencyAdress: "Mahia nord",
    agencyState: "Mahdia",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73111111,
    agencyEmail: "tours@gmail.com",
    agencyPassword: "73111111",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvzoE930JXmaVzrMm4NR-2YJpEFFb_BO3E5lgy_DMOubxr99Wi"
  },
  {
    id: 24,
    agencyName: "Timon",
    agencyAdress: "Mahdeya Sud",
    agencyState: "Mahdia",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73696936,
    agencyEmail: "timon@gmail.com",
    agencyPassword: "73696936",
    agencyPicture:
      "https://media.istockphoto.com/vectors/rooster-logo-vector-template-design-illustration-vector-id1018109844"
  },
  {
    id: 25,
    agencyName: "Cars For every body",
    agencyAdress: "La Plage",
    agencyState: "Bizerte",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72530530,
    agencyEmail: "every@gmail.com",
    agencyPassword: "72530530",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0xc9_1962kCrkOop9i0pIXzemyRclKvrhGiXdhIcjuJTQjpcv"
  },
  {
    id: 26,
    agencyName: "Trucks rent",
    agencyAdress: "Arian Eso8ra",
    agencyState: "Ariana",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71989898,
    agencyEmail: "trucks@gmail.com",
    agencyPassword: "71989898",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeDBwlvzudYzWYYrtH7Vx3NqonFUAGdINAKdJExAue74fy2Jxu"
  },
  {
    id: 27,
    agencyName: "Mumou cars",
    agencyAdress: "Riadh landalos",
    agencyState: "Ariana",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71717145,
    agencyEmail: "mumou@gmail.com",
    agencyPassword: "71717145",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8ROaakk_-hsEzyHiqyxZ2hVxCNaPJxZeS44JEhi7fPdFNScLj"
  },
  {
    id: 28,
    agencyName: "The Originals",
    agencyAdress: "El ghazela",
    agencyState: "Ariana",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71996633,
    agencyEmail: "theoriginals@gmail.com",
    agencyPassword: "71996633",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcYxkJAh_1F1HN-CjwgFKwGniKDwLODXwZjGXmKx0dQ8W_Z0SE"
  },
  {
    id: 29,
    agencyName: "Time",
    agencyAdress: "El marchi",
    agencyState: "Béja",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72445588,
    agencyEmail: "time@gmail.com",
    agencyPassword: "72445588",
    agencyPicture:
      "https://freedesignfile.com/upload/2014/02/Business-logos-14.jpg"
  },
  {
    id: 30,
    agencyName: "Land Cars",
    agencyAdress: "El masra7",
    agencyState: "Béja",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72727272,
    agencyEmail: "land@gmail.com",
    agencyPassword: "72727272",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMccmeOELRF22nVhUGXy2eVEwr_-ydBg8hGuKiVNmHAjyzUBz4"
  },
  {
    id: 31,
    agencyName: "Sky Rent",
    agencyAdress: "Amdoun",
    agencyState: "Béja",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72123456,
    agencyEmail: "sky@gmail.com",
    agencyPassword: "72123456",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU1KI-i5rdHucdVDTHPn1Lh4Y_BQss1RDzN5CqzN14jml9ouW-"
  },
  {
    id: 32,
    agencyName: "Happy",
    agencyAdress: "Ezarbeya",
    agencyState: "Kairouan",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73999996,
    agencyEmail: "happy@gmail.com",
    agencyPassword: "73999996",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXNTvik0YkDzl586MKwJ1T7G49GUd2--d8nPSVAsi8BToTDB7Z"
  },
  {
    id: 33,
    agencyName: "Todo",
    agencyAdress: "Kairouan centrer",
    agencyState: "Kairouan",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73111555,
    agencyEmail: "todo@gmail.com",
    agencyPassword: "73111555",
    agencyPicture:
      "https://media-exp1.licdn.com/dms/image/C560BAQGjwV6rNd-CDg/company-logo_200_200/0?e=2159024400&v=beta&t=YedpBYqu5ayrBeGcXzrORzWnNq-jkhx0HsS8KLCoQBA"
  },
  {
    id: 34,
    agencyName: "Movie cars",
    agencyAdress: "Aeoroport",
    agencyState: "Monastir",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 731114444,
    agencyEmail: "movies@gmail.com",
    agencyPassword: "731114444",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6okRJ94cjc_zjDJybGTGOVtqAv8KGFfFvhPZRbWTXTLdBgjvv"
  },
  {
    id: 35,
    agencyName: "Only Rent",
    agencyAdress: "Monastir nord",
    agencyState: "Monastir",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72369369,
    agencyEmail: "only@gmail.com",
    agencyPassword: "agencyPassword",
    agencyPicture:
      "https://image.shutterstock.com/image-vector/sd-logo-260nw-579863734.jpg"
  },
  {
    id: 36,
    agencyName: "Not Now",
    agencyAdress: "Ong ejmal",
    agencyState: "Tozeur",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73698789,
    agencyEmail: "now@gmail.com",
    agencyPassword: "73698789",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_8x3GwJ8GIGYLqGeXaqWFHFFVtYbhHBWQtvgzLB52NjRpZhZA"
  },
  {
    id: 37,
    agencyName: "Right Now",
    agencyAdress: "Monastir sud",
    agencyState: "Monastir",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73789987,
    agencyEmail: "right@gmail.com",
    agencyPassword: "73698789",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREPpMhuh8DGyu-BFgcquiG4hEqy50IwUG50NfaPwndzFYIHI-3"
  },
  {
    id: 38,
    agencyName: "Left Rent",
    agencyAdress: "Tozer Centre",
    agencyState: "Tozeur",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 73258963,
    agencyEmail: "left@gmail.com",
    agencyPassword: "73789987",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfvMdK5oEUn1Fcox79jI4A905XbbmjrnN0lhpVCFAmKyyK_P28"
  },
  {
    id: 39,
    agencyName: "Right Cars",
    agencyAdress: "Mourouj 9",
    agencyState: "Ben Arous",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 71258298,
    agencyEmail: "rights@gmail.com",
    agencyPassword: "73258963",
    agencyPicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUKpuIpST6MwKza_HV-y4d-Nd1TMTXTQe639fERMaOb363RNTF"
  },
  {
    id: 40,
    agencyName: "Final Cars",
    agencyAdress: "Zaghouan Centre",
    agencyState: "Zaghouan",
    agencyCountry: "Tunisia",
    agencyCountryCode: "+216",
    agencyPhoneNumber: 72563563,
    agencyEmail: "final@gmail.com",
    agencyPassword: "71258298",
    agencyPicture:
      "https://thumbs.dreamstime.com/z/creative-r-letter-vector-logo-design-sign-character-logotype-symbols-icon-website-initial-company-concept-d-style-143792782.jpg"
  }
];
