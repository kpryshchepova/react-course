import axios from "axios";

export async function getCardsList() {
  try {
    const res = await axios.get(
      "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json"
    );

    return res.data.slice(0, 15).map((item) => {
      return {
        id: +item.Number,
        header: item.Name,
        content: item.About,
      };
    });
  } catch (er) {
    throw new Error("Something goes wrong! Please try later!");
  }
}
