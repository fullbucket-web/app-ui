// @flow

/* The requestsState holds the state of current requests loaded on the system.
NOT ALL OF THESE WILL BE LOADED FROM THE API ON APP LOAD. */
export const requestsState = {
  requests: {
    'ce6a1e30-b611-4751-9743-79f5fb7d0d7c': {
      user: 'Discombobulated_Ship',
      title: 'Lamborghini owner in Portugal, happy to help',
      content:
        "If anyone wants to come out and play in some fancy cars, I'd love to put these to a good use. We've got a pair of lamborghinis... happy to take out a passenger in each.\nIf you're semi sensible I'd probably even let you drive. Whats the worst that can happen 😂\nWe've got access to some real nice cars here - Porsche, Merc, Lotus, Range Rover, Ferrari... we're happy bringing them out to play for good causes so let us know if we can do something :)",
      images: ['http://i65.tinypic.com/t8xbt1.jpg'],
      points: 578,
      comments: [
        {
          user: '221B_BakerSt_',
          content: 'This is a really fun offer and will mean so much to someone!',
          points: 127,
          timestamp: '2018-06-09T18:51:40.997Z',
          replies: []
        },
        {
          user: 'Crentist_the-Dentist',
          content: 'This is a great offer! Are all of these cars yours? Very neat :)',
          timestamp: '2018-06-09T18:53:40.997Z',
          points: 68,
          replies: [
            {
              user: 'Discombobulated_Ship',
              content:
                'The red one is mines, the black one my biz partners. He cheaped out and went with the old hard top :O',
              timestamp: '2018-06-09T19:04:40.997Z',
              points: 48,
              replies: [
                {
                  user: 'felix204',
                  content:
                    'i dont think cheaped out should be a phrase used when referring to a Lamborghini lol',
                  timestamp: '2018-06-09T20:34:40.997Z',
                  points: 51
                }
              ]
            }
          ]
        }
      ]
    },
    'f699e834-4222-46a7-9236-5b2cd556ebf1': {
      user: 'OATML',
      title:
        'I am a lifeguard at a large water park in the Wisconsin Dells and I can get up to 3 people in for free to swim for a day.',
      content:
        "Title basically says it all. I've been working at this water park for about a year now and we are allowed to bring 1 to 3 guests in free when we want. I am willing to get whoever wants to in the waterpark and you'll be able to swim the whole day.\n Whether you are a group of dudes that are in some serious need of bro time, or a few ladies who need a swim day, or a couple who wants a waterpark date, or even someone who wants to just hang out with a random person on the internet for a day, I'm open to whatever. The possibilities are endless (but limited to 3 people lol). However, I will have to stick with you for an hour or so to make sure you get around the park fine and also to make sure my manager doesn't take personal offense to this or something.\nIn terms of availability, this is where it gets a little tricky. The only days I don't work are on Wednesdays. This summer for me is extremely busy and my plans are constantly changing. The only days that seem to remain the same are Wednesday. A few Saturdays could work, but I'd have to let you know.\nFood can be purchased at the water park, but to keep it between you and me, it's overpriced and it tastes like cardboard. I'd suggest going out to eat somewhere else in the Dells. Now if I had more money, I'd pay for your meal too, but I sadly have like $4 to my name.\nSo about me, in case you are wondering and are worried I'm some weirdo:\n\t- I'm a 17 year old dude\n\t-I'm extremely outgoing so don't be worried I'd be awkward or anything\n\t- I love chilling with the dudes (and dudettes) so if you are looking for another party member, I'm definitely down\nAnyway, PM me if you're interested. I promise a day filled with fun and water slides :)",
      images: [],
      points: 488,
      comments: [
        {
          user: 'anondane1',
          content: 'Thanks for this, you are awsome',
          points: 73,
          replies: []
        }
      ]
    }
  },
  offers: {
    '00522756-ff77-4a0d-8a3f-f6950a414552': {},
    'be150ead-2bc2-4698-be1c-7eaa9de5ebb5': {},
    '82aeee02-8a4c-4241-a2aa-ee33bda1de7e': {},
    '7deb9577-325c-4cca-a238-c323de4cdb23': {},
    'cebec106-d5f9-41c8-93a1-db62541e2727': {}
  }
};

export const userSessionState = {
  userDetails: {
    id: 1,
    name: 'Test User'
  }
};
export const editorState = {
  activeDocument: {
    id: 'update-2-e30d3f7b545e43fe7729ecd680ed86a948405ba1',
    title: 'Update 2',
    html:
      '<h1><!--block-->Testing Render Function</h1><div><!--block-->This is a test that it\'s all rendered properly as it should.<br><strong>Bold Text.<br></strong><em>Italics Text.<br></em><del>Strikethrough.<br></del><a href="https://example.com">Hyperlink.</a></div><blockquote><!--block-->Quote.</blockquote><pre><!--block-->Code block\nif (this.render === "good") {\n     return "Yay!"\n}</pre><ul><li><!--block-->Bullet Point<ul><li><!--block-->Indented bullet point<ul><li><!--block-->Even more indented bullet point</li></ul></li></ul></li></ul><ol><li><!--block-->Number One?</li><li><!--block-->Number Two.<ol><li><!--block-->Sub-Number One</li><li><!--block-->Sub-Number Two<ol><li><!--block-->Sub-Sub-Number One</li><li><!--block-->Sub-Sub-Number One</li></ol></li></ol></li></ol><h1><!--block--><a href="https://example.com"><strong><em><del>A little bit of everything.</del></em></strong></a></h1>'
  }
};

export const newsState = [
  {
    id: 'update-2-075ccd569acbf805d9d4f9fad049cb9e142be843',
    title: 'Update 2',
    author: {
      name: 'Tomdango'
    },
    comments: [
      {
        user: '221B_BakerSt_',
        content: 'This is a really fun offer and will mean so much to someone!',
        points: 127,
        timestamp: '2018-06-09T18:51:40.997Z',
        replies: []
      },
      {
        user: 'Crentist_the-Dentist',
        content: 'This is a great offer! Are all of these cars yours? Very neat :)',
        timestamp: '2018-06-09T18:53:40.997Z',
        points: 68,
        replies: [
          {
            user: 'Discombobulated_Ship',
            content:
              'The red one is mines, the black one my biz partners. He cheaped out and went with the old hard top :O',
            timestamp: '2018-06-09T19:04:40.997Z',
            points: 48,
            replies: [
              {
                user: 'felix204',
                content:
                  'i dont think cheaped out should be a phrase used when referring to a Lamborghini lol',
                timestamp: '2018-06-09T20:34:40.997Z',
                points: 51,
                replies: []
              }
            ]
          }
        ]
      }
    ],
    description: 'Render Testing',
    html: `<h1><!--block-->Testing Render Function</h1><div><!--block-->This is a test that it's all rendered properly as it should. This here is a test of a very very very, maybe even an excruciatingly long, maybe it's even deadly, well nevertheless it's a very long sentence.<br><strong>Bold Text.<br></strong><em>Italics Text.<br></em><del>Strikethrough.<br></del><a href="https://example.com">Hyperlink.</a></div><blockquote><!--block-->Quote.</blockquote><pre><!--block-->Code block\
if (this.render === "good") {\
    return "Yay!"\
}</pre><ul><li><!--block-->Bullet Point<ul><li><!--block-->Indented bullet point<ul><li><!--block-->Even more indented bullet point</li></ul></li></ul></li></ul><ol><li><!--block-->Number One?</li><li><!--block-->Number Two.<ol><li><!--block-->Sub-Number One</li><li><!--block-->Sub-Number Two<ol><li><!--block-->Sub-Sub-Number One</li><li><!--block-->Sub-Sub-Number One</li></ol></li></ol></li></ol><h1><!--block--><a href="https://example.com"><strong><em><del>A little bit of everything.</del></em></strong></a></h1>`
  }
];

export const otherState = {};

export const uiState = {
  postModal: {
    active: false,
    postId: ''
  }
};
