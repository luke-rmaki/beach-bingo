import words from '$lib/data/words.json';

export async function get({params}): Promise<any> {
  const {adjectives, nouns} = words;
  const adj = adjectives[generateRandomIndex(adjectives.length)];
  const nounInd1 = generateRandomIndex(nouns.length);
  let nounInd2 = generateRandomIndex(nouns.length);
  while(nounInd1 === nounInd2) {
    nounInd2 = generateRandomIndex(nouns.length);
  }
  const data = `${adj}-${nouns[nounInd1]}-${nouns[nounInd2]}`
  return {
    status: 200,
    body: JSON.stringify({
      data
    })
  }
}

function generateRandomIndex(arrLength: number): number {
  return Math.floor(Math.random() * arrLength);
}