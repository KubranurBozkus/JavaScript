let mod = "kötü"
 //güncelle
 mod = "iyi"
 console.log("modum şu an:",mod)

 //tekrar güncelle
 mod = "daha iyi"
 console.log("modum şu an:",mod)

 //cevap 2
 let adim = "ömer"
 let soyadim = "ocak"
 let yas = 24
 console.log("adım:", adim, "soyadım:", soyadim, "yaşım:", yas)

 //cevap 3

 const ben = {
    adim : "kübranur",
    yasim : 26,
    yasadigimYer:"istanbul",
    
 }

 console.log("adım:", ben.adim , "yaşım:", ben.yasim)

 //cevap 4

 let bisey = "lorem ipsum"

 console.log("büyük hali:", bisey.toLocaleUpperCase())

 //cevap 5

 let cumle = "zabağan zor uyanıoz napacağız biz"

 //hatalı kelimeleri düzelt

 cumle = cumle.replace("zabağan","sabah")
 cumle = cumle.replace("uyanıoz","uyanıyoruz")
 cumle = cumle.replace("napacağız","ne yapacağız")

 console.log("güncellenmiş hali:",cumle)
 
 //cevap 6

 const array = ["muz","kiraz","armut","haha", "elma"]
 //hahayı çıkar.

 array.splice(3,1)
 console.log("meyveler:",array)

 //yer değiştir.
 array[0] = "elma"
 array[3] = "muz"

 console.log("yeni dizi:",array)

 //cevap 7

 array.unshift("portakal")
 console.log("portakal eklenmiş hali:",array)

 //cevap 8
const meyvelerimiz = ["elma","kiraz","armut","erik"]

 const kisi = {
   ad:"Kübra",
   yas:"26",
   favoriMeyve:["karpuz"]
 }

 const iceriyomu = meyvelerimiz.includes(kisi.favoriMeyve[0])
 console.log("içeriyomu?:",iceriyomu)

 //cevap 9

 const ahmetinHatasi = ["başarılı","bir","şekilde","işeminiz","gerçekleşmiştir","teşekkür","ederiz","."]
 //string olarak gönder.
 const stringOlarak = ahmetinHatasi.join(" ")
 console.log("Ahmetin inputu:",stringOlarak)

 //cevap 10

 const cumle2 ="ldkflşdf lorem ipsum dolor dnfkndfkdfn."

 //cümle nktayla bitiyor mu?

 const bitiyormu = cumle2.endsWith(".")
 console.log("cümlee:",bitiyormu)

 //cevap 11

 const kisi1 = {ad: "burak", yas:1 , eskiIsimler:[] }

 //prompt
 const yeniIsim = "ömer"
 
 //yeni ismi değitir
 kisi1.eskiIsimler.push(kisi1.ad)
 kisi1.ad = yeniIsim

 console.log("YENİ HALİ:", kisi1)

 //cevap 12

 














