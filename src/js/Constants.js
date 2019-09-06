import billCraveyJealous from '../audio/bill-cravey-jealous.m4a';
import toddMichaelJackson from '../audio/todd-michael-jackson.m4a';
import samWeathermanFuckPad from '../audio/sam-weatherman-fuck-pad.m4a';
import howardLevisSemetic from '../audio/howard-semetic.m4a';

const Constants = {
    billCraveyClipArray: [
        billCraveyJealous,
        toddMichaelJackson,
        samWeathermanFuckPad,
        howardLevisSemetic,
    ],
    howardLevisClipArray: [
        toddMichaelJackson,
        samWeathermanFuckPad,
        howardLevisSemetic,
        billCraveyJealous,
    ],
    toddPadreClipArray: [
        samWeathermanFuckPad,
        howardLevisSemetic,
        billCraveyJealous,
        toddMichaelJackson,
    ],
    samWeathermanClipArray: [
        howardLevisSemetic,
        billCraveyJealous,
        toddMichaelJackson,
        samWeathermanFuckPad,
    ],

    searchableClips: [
        {
            clipUrl: billCraveyJealous,
            clipLabel: 'Oh My God Somebody\'s Jealous',
            tags: [
                'Bill Cravey',
                'Ridiculous Voice',
            ]
        }, {
            clipUrl: toddMichaelJackson,
            clipLabel: 'I\'m a Michael Jackson',
            tags: [
                'Todd Padre',
                'Burger King',
                'Crafty Freakout',
            ]
        }, {
            clipUrl: samWeathermanFuckPad,
            clipLabel: 'I\'ve Always Wanted a Fuck Pad',
            tags: [
                'Sam Weatherman',
            ]
        }, {
            clipUrl: howardLevisSemetic,
            clipLabel: 'I\'m the Most Semitic',
            tags: [
                'Howard Levi\'s',
                'Jews',
            ]
        },
    ]
};

export default Constants;