import {reactive} from 'vue';

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  resultArray: [],
  cardNumber: 10,
  cardOffset: 0,
  typeArray: [
    "Effect Monster",
    "Flip Effect Monster",
    "Flip Tuner Effect Monster",
    "Gemini Monster",
    "Normal Monster",
    "Normal Tuner Monster",
    "Pendulum Effect Monster",
    "Pendulum Effect Ritual Monster",
    "Pendulum Flip Effect Monster",
    "Pendulum Normal Monster",
    "Pendulum Tuner Effect Monster",
    "Ritual Effect Monster",
    "Ritual Monster",
    "Spell Card",
    "Spirit Monster",
    "Toon Monster",
    "Trap Card",
    "Tuner Monster",
    "Union Effect Monster"
  ],
})