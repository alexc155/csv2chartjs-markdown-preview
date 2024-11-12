# Chart JS bar / line

```csv
# chart-js

day,users,users2
10-01,18962,17654
10-02,18507,19543
10-03,17421,18549
10-04,18689,16457
10-05,17078,16893
10-06,19456,19875
10-07,18900,14689
10-08,19335,19865
10-09,18409,18769
10-10,18024,19876
```

```js
// chart-js
{
    "type": "line",
    "options": {
      "scales":{
        "y": {
          "beginAtZero": true
        }
      },
      "plugins": {
        "title": {
            "display": true,
            "font": {
                "size": 14,
                "weight": "normal"
            },
            "text": "Users"
        },
        "legend": {
            "display": false
        }
      }
    },
    "data": {
        "labels": [
            "10-01","10-02","10-03","10-04","10-05","10-06","10-07","10-08","10-09","10-10","10-11","10-12","10-13","10-14","10-15","10-16","10-17","10-18","10-19","10-20","10-21","10-22","10-23","10-24","10-25","10-26","10-27","10-28","10-29","10-30","10-31","11-01","11-02","11-03","11-04","11-05","11-06","11-07","11-08","11-09","11-10"
        ],
        "datasets": [
            {
                "data": [
                    18962,18507,17421,18689,17078,19456,18900,19335,18409,18024,18134,18116,18643,19639,19830,19642,20095,26063,27030,29550,25322,20859,19432,19230,28438,31282,32029,28092,21238,17492,18544,27938,27810,31011,25799,20023,18521,39569,50989,59571,66022
                ],
                "fill": false,
                "borderColor": "#FF6384",
                "backgroundColor": "#FF6384",
                "tension": 0
            }
        ]
    }
}
```