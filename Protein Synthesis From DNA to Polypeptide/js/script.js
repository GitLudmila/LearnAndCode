// Solution

function proteinSynthesis(dna) {
    const rna = dna.replace(/[TAGC]/g, c => MRNA[c]).match(/.{1,3}/g);
    const protein = rna.map(codon => AMINO_ACID[codon]).filter(acid => acid !== undefined);
    return [rna.join(" "), protein.join(" ")];
  }
  
  const MRNA = {
    T: "A",
    A: "U",
    G: "C",
    C: "G",
  };
  
  const AMINO_ACID = {
    GCU: "Ala", GCC: "Ala", GCA: "Ala", GCG: "Ala",
    UUA: "Leu", UUG: "Leu", CUU: "Leu", CUC: "Leu", CUA: "Leu", CUG: "Leu",
    CGU: "Arg", CGC: "Arg", CGA: "Arg", CGG: "Arg", AGA: "Arg", AGG: "Arg",
    AAA: "Lys", AAG: "Lys",
    AAU: "Asn", AAC: "Asn",
    AUG: "Met",
    GAU: "Asp", GAC: "Asp",
    UUU: "Phe", UUC: "Phe",
    UGU: "Cys", UGC: "Cys",
    CCU: "Pro", CCC: "Pro", CCA: "Pro", CCG: "Pro",
    CAA: "Gln", CAG: "Gln",
    UCU: "Ser", UCC: "Ser", UCA: "Ser", UCG: "Ser", AGU: "Ser", AGC: "Ser",
    GAA: "Glu", GAG: "Glu",
    ACU: "Thr", ACC: "Thr", ACA: "Thr", ACG: "Thr",
    GGU: "Gly", GGC: "Gly", GGA: "Gly", GGG: "Gly",
    UGG: "Trp",
    CAU: "His", CAC: "His",
    UAU: "Tyr", UAC: "Tyr",
    AUU: "Ile", AUC: "Ile", AUA: "Ile",
    GUU: "Val", GUC: "Val", GUA: "Val", GUG: "Val",
    UAG: "Stop", UGA: "Stop", UAA: "Stop",
  };
// or

// function proteinSynthesis(dna) {
//     // Transcribe
//     let oldMRNA = [], mRNA = [], arr = dna.split("");
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] === "T") {oldMRNA.push("A");}
//         if (arr[i] === "A") {oldMRNA.push("U");}
//         if (arr[i] === "G") {oldMRNA.push("C");}
//         if (arr[i] === "C") {oldMRNA.push("G");}
//     }
//     oldMRNA = oldMRNA.join("");
//     for(let i = 0; i < oldMRNA.length; i+=3){
//           mRNA.push(oldMRNA.substring(i, i+3));
//      }
    
//     // Translate
//       let protein = [];
//       for(let i = 0; i <= mRNA.length; i++){
//           if (mRNA[i] === "UUA"|| mRNA[i] === "UUG"|| mRNA[i] === "CUU") {protein.push("Leu");}
//           if (mRNA[i] === "CUC"|| mRNA[i] === "CUA"|| mRNA[i] === "CUG") {protein.push("Leu");}
//           if (mRNA[i] === "CGU"|| mRNA[i] === "CGC"|| mRNA[i] === "CGA") {protein.push("Arg");}        
//           if (mRNA[i] === "CGG"|| mRNA[i] === "AGA"|| mRNA[i] === "AGG") {protein.push("Arg");}
//           if (mRNA[i] === "UCU"|| mRNA[i] === "UCC"|| mRNA[i] === "UCA") {protein.push("Ser");}
//           if (mRNA[i] === "UCG"|| mRNA[i] === "AGU"|| mRNA[i] === "AGC") {protein.push("Ser");}
//           if (mRNA[i] === "GCU"|| mRNA[i] === "GCC"|| mRNA[i] === "GCA"|| mRNA[i] === "GCG") {protein.push("Ala");}
//           if (mRNA[i] === "CCU"|| mRNA[i] === "CCC"|| mRNA[i] === "CCA"|| mRNA[i] === "CCG") {protein.push("Pro");}
//           if (mRNA[i] === "ACU"|| mRNA[i] === "ACC"|| mRNA[i] === "ACA"|| mRNA[i] === "ACG") {protein.push("Thr");}
//           if (mRNA[i] === "GGU"|| mRNA[i] === "GGC"|| mRNA[i] === "GGA"|| mRNA[i] === "GGG") {protein.push("Gly");}
//           if (mRNA[i] === "GUU"|| mRNA[i] === "GUC"|| mRNA[i] === "GUA"|| mRNA[i] === "GUG") {protein.push("Val");}
//           if (mRNA[i] === "AUU"|| mRNA[i] === "AUC"|| mRNA[i] === "AUA") {protein.push("Ile");}
//           if (mRNA[i] === "UAG"|| mRNA[i] === "UGA"|| mRNA[i] === "UAA") {protein.push("Stop");}
//           if (mRNA[i] === "AAA"|| mRNA[i] === "AAG") {protein.push("Lys");}
//           if (mRNA[i] === "AAU"|| mRNA[i] === "AAC") {protein.push("Asn");}
//           if (mRNA[i] === "GAU"|| mRNA[i] === "GAC") {protein.push("Asp");}
//           if (mRNA[i] === "UUU"|| mRNA[i] === "UUC") {protein.push("Phe");}
//           if (mRNA[i] === "UGU"|| mRNA[i] === "UGC") {protein.push("Cys");}
//           if (mRNA[i] === "CAA"|| mRNA[i] === "CAG") {protein.push("Gln");}
//           if (mRNA[i] === "GAA"|| mRNA[i] === "GAG") {protein.push("Glu");}
//           if (mRNA[i] === "CAU"|| mRNA[i] === "CAC") {protein.push("His");}
//           if (mRNA[i] === "UAU"|| mRNA[i] === "UAC") {protein.push("Tyr");}
//           if (mRNA[i] === "UGG") {protein.push("Trp");}
//           if (mRNA[i] === "AUG") {protein.push("Met");}
//       }
      
//       return [mRNA.join(" "), protein.join(" ")];
//   }