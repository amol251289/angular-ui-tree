(function() {
angular.module('demoApp.list',[])
.value('MyList',[
  {
  "id": 11,
  "title": "ASD Headquarters",
  "items": [
    {
      "id": 111,
      "title": "San Jose",
      "items": [
        {
         "id":131,
         "title":"Jensen Chapman's Team",
         "items": [
            {
              "id":141,
              "title":"Jimmy John"
            },
            {
              "id":151,
              "title":"Daniel Mills"
            }
            ,
            {
              "id":161,
              "title":"Chris Boden"
            }
           ]
        }
        ],
    },
    {
      "id": 121,
      "title": "Irvine",
      "items": [
        {
         "id":231,
         "title":"Tracey Chapman's Team",
         "items": [
            {
              "id":241,
              "title":"San Jesus"
            },
            {
              "id":251,
              "title":"Fat Albert"
            }
            ,
            {
              "id":261,
              "title":"Connor McDavid"
            }
           ]
        }
        ]
    },
    {
      "id":301,
      "title":"San Diego",
      "items": [{
        "id":311,
        "title":"Duran Duran's Team",
        "items":[
             {
              "id":321,
              "title":"Amberlynn Pinkerton"
            },
            {
              "id":331,
              "title":"Tony Mejia"
            }
            ,
            {
              "id":341,
              "title":"Richard Partridge"
            }
            ,
            {
              "id":351,
              "title":"Elliot Stabler"
            }
          ]
        },
        {
        "id":401,
        "title":"Steely Dan's Team",
        "items":[
             {
              "id":361,
              "title":"Tony Stark"
            },
            {
              "id":371,
              "title":"Totally Rad"
            }
            ,
            {
              "id":381,
              "title":"Matt Murdock"
            }
            ,
            {
              "id":391,
              "title":"Stan Lee"
            }
          ]
        }
      ]
    }
  ]
},

{
  "id": 1,
  "title": "Amol",
  "items": [
    {
      "id": 11,
      "title": "San Jose",
      "items": [
        {
         "id":13,
         "title":"Jensen Chapman's Team",
         "items": [
            {
              "id":14,
              "title":"Jimmy John"
            },
            {
              "id":15,
              "title":"Daniel Mills"
            }
            ,
            {
              "id":16,
              "title":"Chris Boden"
            }
           ]
        }
        ],
    },
    {
      "id": 12,
      "title": "Irvine",
      "items": [
        {
         "id":23,
         "title":"Tracey Chapman's Team",
         "items": [
            {
              "id":24,
              "title":"San Jesus"
            },
            {
              "id":25,
              "title":"Fat Albert"
            }
            ,
            {
              "id":26,
              "title":"Connor McDavid"
            }
           ]
        }
        ]
    },
    {
      "id":30,
      "title":"San Diego",
      "items": [{
        "id":31,
        "title":"Duran Duran's Team",
        "items":[
             {
              "id":32,
              "title":"Amberlynn Pinkerton"
            },
            {
              "id":33,
              "title":"Tony Mejia"
            }
            ,
            {
              "id":34,
              "title":"Richard Partridge"
            }
            ,
            {
              "id":35,
              "title":"Elliot Stabler"
            }
          ]
        },
        {
        "id":40,
        "title":"Steely Dan's Team",
        "items":[
             {
              "id":36,
              "title":"Tony Stark"
            },
            {
              "id":37,
              "title":"Totally Rad"
            }
            ,
            {
              "id":38,
              "title":"Matt Murdock"
            }
            ,
            {
              "id":39,
              "title":"Stan Lee"
            }
          ]
        }
      ]
    }
  ]
}
]);

})()