var quotes = ["“Attitude is a choice. Happiness is a choice. Optimism is a choice. Kindness is a choice. Giving is a choice. Respect is a choice. Whatever choice you make makes you. Choose wisely.”",
    "“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.”",
    "Practice makes Man perfect",
    "Honesty is the best policy",
    "“Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine”",
    "“It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.”",
    "“Do what is right, not what is easy nor what is popular.”",
    "“Success is not how high you have climbed, but how you make a positive difference to the world.”"
];

var length = quotes.length;

function loopQuotes() {
    var rand = Math.round(Math.random() * (length - 1));

    var newQuote = quotes[rand]
    document.getElementById('qoute').innerHTML = newQuote;
}