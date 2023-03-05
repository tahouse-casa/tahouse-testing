/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 92.3076923076923, "KoPercent": 7.6923076923076925};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.7115384615384616, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Login/api/v1/featured-3"], "isController": false}, {"data": [0.0, 500, 1500, "login/api/v1/users/1-4"], "isController": false}, {"data": [0.5, 500, 1500, "click card hungria/api/v1/properties/83-33"], "isController": false}, {"data": [1.0, 500, 1500, "Login02/api/v1/featured-9"], "isController": false}, {"data": [1.0, 500, 1500, "Login 01/api/v1/users/199-30"], "isController": false}, {"data": [0.0, 500, 1500, "login/api/v1/auth/login-2"], "isController": false}, {"data": [1.0, 500, 1500, "click en icono fav/api/v1/favorites/39-41"], "isController": false}, {"data": [0.0, 500, 1500, "click en icono fav/api/v1/favorites/39-42"], "isController": false}, {"data": [1.0, 500, 1500, "login/api/v1/featured-3"], "isController": false}, {"data": [1.0, 500, 1500, "Login/api/v1/users/199-4"], "isController": false}, {"data": [1.0, 500, 1500, "Login02/api/v1/users/203-10"], "isController": false}, {"data": [1.0, 500, 1500, "click en icono fav/api/v1/users/199-43"], "isController": false}, {"data": [0.5, 500, 1500, "Login/api/v1/auth/login-1"], "isController": false}, {"data": [1.0, 500, 1500, "login 01/api/v1/featured-14"], "isController": false}, {"data": [1.0, 500, 1500, "click en favoritos/api/v1/properties/83-44"], "isController": false}, {"data": [1.0, 500, 1500, "click de/v1/tiles-32"], "isController": false}, {"data": [0.5, 500, 1500, "Login 01/api/v1/auth/login-28"], "isController": false}, {"data": [1.0, 500, 1500, "Login 01/api/v1/auth/login-27"], "isController": false}, {"data": [0.0, 500, 1500, "Login/api/v1/auth/login-2"], "isController": false}, {"data": [0.0, 500, 1500, "click ver mas propiedades/api/v1/properties-31"], "isController": false}, {"data": [0.5, 500, 1500, "login/api/v1/auth/login-1"], "isController": false}, {"data": [0.5, 500, 1500, "Login02/api/v1/auth/login-8"], "isController": false}, {"data": [1.0, 500, 1500, "click en paises/api/v1/countries-6"], "isController": false}, {"data": [1.0, 500, 1500, "click en administrar/api/v1/properties-5"], "isController": false}, {"data": [1.0, 500, 1500, "Login 01/api/v1/featured-29"], "isController": false}, {"data": [1.0, 500, 1500, "Login02/api/v1/auth/login-7"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 26, 2, 7.6923076923076925, 2826.423076923077, 196, 45615, 310.0, 5880.000000000005, 33341.89999999995, 45615.0, 0.5191485963020646, 0.5606625446767302, 0.26013977701569424], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Login/api/v1/featured-3", 1, 0, 0.0, 405.0, 405, 405, 405.0, 405.0, 405.0, 405.0, 2.4691358024691357, 2.1604938271604937, 1.1598186728395061], "isController": false}, {"data": ["login/api/v1/users/1-4", 1, 1, 100.0, 10549.0, 10549, 10549, 10549.0, 10549.0, 10549.0, 10549.0, 0.09479571523367143, 0.01962567541947104, 0.044435491515783486], "isController": false}, {"data": ["click card hungria/api/v1/properties/83-33", 1, 0, 0.0, 1039.0, 1039, 1039, 1039.0, 1039.0, 1039.0, 1039.0, 0.9624639076034649, 0.8111390158806545, 0.4567943936477382], "isController": false}, {"data": ["Login02/api/v1/featured-9", 1, 0, 0.0, 218.0, 218, 218, 218.0, 218.0, 218.0, 218.0, 4.587155963302752, 4.013761467889908, 2.154709002293578], "isController": false}, {"data": ["Login 01/api/v1/users/199-30", 1, 0, 0.0, 200.0, 200, 200, 200.0, 200.0, 200.0, 200.0, 5.0, 5.2734375, 2.353515625], "isController": false}, {"data": ["login/api/v1/auth/login-2", 1, 0, 0.0, 2694.0, 2694, 2694, 2694.0, 2694.0, 2694.0, 2694.0, 0.3711952487008166, 0.27005904324424646, 0.21387226243504084], "isController": false}, {"data": ["click en icono fav/api/v1/favorites/39-41", 1, 0, 0.0, 196.0, 196, 196, 196.0, 196.0, 196.0, 196.0, 5.1020408163265305, 2.0926339285714284, 2.8599330357142856], "isController": false}, {"data": ["click en icono fav/api/v1/favorites/39-42", 1, 1, 100.0, 203.0, 203, 203, 203.0, 203.0, 203.0, 203.0, 4.926108374384237, 3.8244689039408866, 2.5929418103448274], "isController": false}, {"data": ["login/api/v1/featured-3", 1, 0, 0.0, 233.0, 233, 233, 233.0, 233.0, 233.0, 233.0, 4.291845493562231, 3.77212982832618, 2.015993830472103], "isController": false}, {"data": ["Login/api/v1/users/199-4", 1, 0, 0.0, 307.0, 307, 307, 307.0, 307.0, 307.0, 307.0, 3.257328990228013, 3.4354641693811074, 1.5332349348534202], "isController": false}, {"data": ["Login02/api/v1/users/203-10", 1, 0, 0.0, 278.0, 278, 278, 278.0, 278.0, 278.0, 278.0, 3.5971223021582737, 2.07607351618705, 1.6931767086330933], "isController": false}, {"data": ["click en icono fav/api/v1/users/199-43", 1, 0, 0.0, 312.0, 312, 312, 312.0, 312.0, 312.0, 312.0, 3.205128205128205, 3.3804086538461537, 1.5086638621794872], "isController": false}, {"data": ["Login/api/v1/auth/login-1", 1, 0, 0.0, 1175.0, 1175, 1175, 1175.0, 1175.0, 1175.0, 1175.0, 0.851063829787234, 0.3490691489361702, 0.47373670212765956], "isController": false}, {"data": ["login 01/api/v1/featured-14", 1, 0, 0.0, 208.0, 208, 208, 208.0, 208.0, 208.0, 208.0, 4.807692307692308, 4.206730769230769, 2.25830078125], "isController": false}, {"data": ["click en favoritos/api/v1/properties/83-44", 1, 0, 0.0, 382.0, 382, 382, 382.0, 382.0, 382.0, 382.0, 2.617801047120419, 2.1959874018324608, 1.2424329188481675], "isController": false}, {"data": ["click de/v1/tiles-32", 1, 0, 0.0, 314.0, 314, 314, 314.0, 314.0, 314.0, 314.0, 3.1847133757961785, 1.1662768710191083, 1.10718550955414], "isController": false}, {"data": ["Login 01/api/v1/auth/login-28", 1, 0, 0.0, 1413.0, 1413, 1413, 1413.0, 1413.0, 1413.0, 1413.0, 0.7077140835102619, 0.5162718949044586, 0.40361818825194623], "isController": false}, {"data": ["Login 01/api/v1/auth/login-27", 1, 0, 0.0, 197.0, 197, 197, 197.0, 197.0, 197.0, 197.0, 5.076142131979695, 2.082011421319797, 2.82558692893401], "isController": false}, {"data": ["Login/api/v1/auth/login-2", 1, 0, 0.0, 3879.0, 3879, 3879, 3879.0, 3879.0, 3879.0, 3879.0, 0.2577984016499098, 0.18806191995359628, 0.14702565094096418], "isController": false}, {"data": ["click ver mas propiedades/api/v1/properties-31", 1, 0, 0.0, 45615.0, 45615, 45615, 45615.0, 45615.0, 45615.0, 45615.0, 0.02192261317549052, 0.0846504028280171, 0.01070440096459498], "isController": false}, {"data": ["login/api/v1/auth/login-1", 1, 0, 0.0, 1175.0, 1175, 1175, 1175.0, 1175.0, 1175.0, 1175.0, 0.851063829787234, 0.3523936170212766, 0.47373670212765956], "isController": false}, {"data": ["Login02/api/v1/auth/login-8", 1, 0, 0.0, 1488.0, 1488, 1488, 1488.0, 1488.0, 1488.0, 1488.0, 0.6720430107526882, 0.4902501260080645, 0.3832745295698925], "isController": false}, {"data": ["click en paises/api/v1/countries-6", 1, 0, 0.0, 292.0, 292, 292, 292.0, 292.0, 292.0, 292.0, 3.4246575342465753, 5.648678296232877, 1.6119970034246576], "isController": false}, {"data": ["click en administrar/api/v1/properties-5", 1, 0, 0.0, 308.0, 308, 308, 308.0, 308.0, 308.0, 308.0, 3.246753246753247, 20.92950994318182, 1.5314275568181819], "isController": false}, {"data": ["Login 01/api/v1/featured-29", 1, 0, 0.0, 203.0, 203, 203, 203.0, 203.0, 203.0, 203.0, 4.926108374384237, 4.310344827586206, 2.31392395320197], "isController": false}, {"data": ["Login02/api/v1/auth/login-7", 1, 0, 0.0, 204.0, 204, 204, 204.0, 204.0, 204.0, 204.0, 4.901960784313726, 2.0105698529411766, 2.7286305147058827], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["500/Internal Server Error", 1, 50.0, 3.8461538461538463], "isController": false}, {"data": ["429/Too Many Requests", 1, 50.0, 3.8461538461538463], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 26, 2, "500/Internal Server Error", 1, "429/Too Many Requests", 1, "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": ["login/api/v1/users/1-4", 1, 1, "429/Too Many Requests", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["click en icono fav/api/v1/favorites/39-42", 1, 1, "500/Internal Server Error", 1, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
