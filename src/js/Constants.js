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
            clipUrl: billCraveyJealous,
            clipLabel: 'I\'m a Michael Jackson',
            tags: [
                'Todd Padre',
                'Burger King',
                'Crafty Freakout'
            ]
        },
    ]
};

export default Constants;