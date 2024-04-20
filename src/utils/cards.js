import { shuffle } from "lodash";
import { SPADES_SUIT, CROSS_SUIT, DIAMONDS_SUIT, HEARTS_SUIT } from "../const";

const SUITS = [SPADES_SUIT, CROSS_SUIT, DIAMONDS_SUIT, HEARTS_SUIT];

const RANK_SIX = "6";
const RANK_SEVEN = "7";
const RANK_EIGHT = "8";
const RANK_NINE = "9";
const RANK_TEN = "10";
const RANK_JACK = "J";
const RANK_QUEEN = "Q";
const RANK_KING = "K";
const RANK_ACE = "A";

const RANKS = [RANK_SIX, RANK_SEVEN, RANK_EIGHT, RANK_NINE, RANK_TEN, RANK_JACK, RANK_QUEEN, RANK_KING, RANK_ACE];

function createUniqueDeck() {
  const deck = [];

  SUITS.forEach(suit => {
    RANKS.forEach(rank => {
      deck.push({ rank, suit });
    });
  });

  return deck;
}

// Сквозной айдишник для карт, важно чтобы у карт в разных партиях был уникальный айди, чтобы хорошо работала анимация переворота
let id = 1;

// Она получает на вход количество пар в колоде
// Возвращает колоду карт нужного размера
export function generateDeck(pairsCount = 3) {
  const deck = [];
  const uniqueDeck = shuffle(createUniqueDeck());

  for (let i = 0; i < pairsCount; i++) {
    const card = uniqueDeck[i];
    // Нельзя выбирать две одинаковые карты?
    deck.push({
      id: id++,
      suit: card.suit,
      rank: card.rank,
      open: false,
    });
    deck.push({
      id: id++,
      suit: card.suit,
      rank: card.rank,
      open: false,
    });
  }

  return deck;
}
