import billCraveyJealous from '../audio/bill-cravey-jealous.m4a';
import toddMichaelJackson from '../audio/todd-michael-jackson.m4a';
import samWeathermanFuckPad from '../audio/sam-weatherman-fuck-pad.m4a';
import howardLevisSemetic from '../audio/howard-semetic.m4a';
import craftyFreakout from '../audio/crafty-freakout.mp3';
import toddsPlay from '../audio/todds-play.mp3';
import teachersLoungeTheme from '../audio/teachers-lounge-theme.m4a';

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
            clipUrl: teachersLoungeTheme,
            clipLabel: 'Teachers Lounge Theme Song',
            season: '',
            episode: '',
            timestamp: '',
            tags: [
                'Song',
            ]
        }, {
            clipUrl: billCraveyJealous,
            clipLabel: 'Oh My God Somebody\'s Jealous',
            season: '',
            episode: '',
            timestamp: '',
            tags: [
                'Bill Cravey',
                'Ridiculous Voice',
            ]
        }, {
            clipUrl: toddMichaelJackson,
            clipLabel: 'I\'m a Michael Jackson',
            season: '',
            episode: '',
            timestamp: '',
            tags: [
                'Todd Padre',
                'Burger King',
                'Crafty Freakout',
            ]
        }, {
            clipUrl: samWeathermanFuckPad,
            clipLabel: 'I\'ve Wanted a Fuck Pad for So Long',
            season: '',
            episode: '',
            timestamp: '',
            tags: [
                'Sam Weatherman',
            ]
        }, {
            clipUrl: howardLevisSemetic,
            clipLabel: 'I\'m the Most Semitic',
            season: '',
            episode: '',
            timestamp: '',
            tags: [
                'Howard Levi\'s',
                'Jews',
            ]
        }, {
            clipUrl: craftyFreakout,
            clipLabel: 'Crafty Freakout',
            season: '5',
            episode: '8',
            timestamp: '',
            tags: [
                'Burger King',
                'Crafty Freakout',
                'Michael Jackson',
            ]
        }, {
            clipUrl: toddsPlay,
            clipLabel: 'Todd\'s Play',
            season: 'Peecast Blast',
            episode: '2018',
            timestamp: '',
            tags: [
                'Todd Padre',
                'Paul F. Tompkins',
                'Live Show'
            ]
        },
    ]
};

export default Constants;