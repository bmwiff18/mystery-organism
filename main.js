// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum : specimenNum,
    dna : dna,
    mutate : function () {
      // select random element of dna, change that base to a randBase, return dna
      let baseIndex = Math.floor(Math.random() * dna.length);
      console.log(baseIndex);
      console.log(dna[baseIndex]);
      dna[baseIndex] = returnRandBase();
    },
    compareDNA : function (pAequor) {
      let commonBases = 0;
      for (let i = 0; i < this.dna.length; ++i) {
        if (this.dna[i] == pAequor.dna[i]) {
          commonBases += 1;
        }
      }
      let commonality = Math.floor(commonBases / this.dna.length * 100);
      console.log(`specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonality}% DNA in common`);
    },
    willLikelySurvive : function () {
      const num = this.dna.filter(x => x=='C' || x=='G').length;
      if (num / 15 * 100 > 60) {
        return true;
      } else {
        return false;
      }
    },
    complementStrand : function () {
      let strand = [];
      for (let i = 0; i < this.dna.length; ++i) {
        switch(this.dna[i]) {
          case 'A':
            strand[i] = 'T';
            break;
          case 'T':
            strand[i] = 'A';
            break;
          case 'C':
            strand[i] = 'G';
            break;
          case 'G':
            strand[i] = 'C';
            break;
          default:
            break;
        }
      }
      return strand;
    }
  };
}

let studyInstances = []
for (let i = 1; i <= 30; ++i) {
  studyInstances.push(pAequorFactory(i, mockUpStrand()))
}

