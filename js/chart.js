//arrays for the charts
var hourly=[30, 10, 500, 200, 250, 300, 500, 250];
var hourlyLabel=["00-03", "02-06", "06-09", "09-12", "12-15", "15-18", "18-21", "21-00"];
var daily= [700, 1200, 1100, 900, 700, 1000, 800];
var dailyLabel=["sund", "mond", "tues", "wedn", "thur", "frid", "satu"];
var weekly= [750, 1250, 1000, 2000, 1500, 1750, 1250, 1800, 2250, 1500, 2500];
var weeklyLabel= ["16-22", "23-29", "30-5", "6-12", "13-19", "20-25", "27-3", "4-10", "11-17", "18-24", "25-31"];
var monthly= [12000, 13000, 9000, 12500, 10000, 7000, 2000, 5000, 9000, 15000, 6000, 11000];
var monthlyLabel=["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];



//traffic chart
const ctx = $("#myChart");
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: monthlyLabel,
        datasets: [{
            label:"TRAFFIC",
            data: monthly,
            borderColor: "e8e8e8",
            borderWidth: 1,
        }],
    },

    options:{
       plugins: {
           legend: {
           display: false
           },
           tooltips: {
               enabled: false
           },
       },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        fill: true,
        backgroundColor: "#d5d6ec",
        tension: 0.4,
    }
});


//daily traffic chart
const traffic= $(".daily-traffic-chart");
const trafficChart = new Chart (traffic, {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets:[{
            label: "DAILY TRAFFIC",
            data: [75, 115, 170, 125, 225, 200, 100],
        }]
    },

    options: {
        plugins: {
            legend:{
                display: false,
            },
            tooltips:{
                enabled: false,
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y:{
                beginAtZero: true,
            },
        },
        fill: true,
        backgroundColor: "#7477bf",
    }
});


//mobile users traffic chart
const mobileUsers= $(".mobile-users-chart");
const mobileUsersChart = new Chart (mobileUsers, {
    type: "doughnut",
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets:[{
            label: "DAILY TRAFFIC",
            data: [70, 15, 15],
            borderWidth: 0,
        }]
    },

    options: {
       responsive: true,
       maintainAspectRatio: false,
       scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
       },
       plugins:{
            legend: {
                position: 'right',
                labels: {
                    fontColor: "white",
                },
            },
       },
       fill: true,
       backgroundColor: ["#7477bf", "#81c98f", "#51b6c8"]
    }
});



//script for the buttons and to change the charts datas when clicking buttons
$(".first-butt").click(function(){
    dat=hourly;
    lab=hourlyLabel;
    $(this).addClass("selected");
    $(".second-butt").removeClass("selected");
    $(".third-butt").removeClass("selected");
    $(".fourth-butt").removeClass("selected");
    
    myChart.data.labels= lab;
    myChart.data.datasets[0].data= dat;
    myChart.update();
});
$(".second-butt").click(function(){
    dat=daily;
    lab=dailyLabel;
    $(this).addClass("selected");
    $(".first-butt").removeClass("selected");
    $(".third-butt").removeClass("selected");
    $(".fourth-butt").removeClass("selected");

    
    myChart.data.labels= lab;
    myChart.data.datasets[0].data= dat;
    myChart.update();
});
$(".third-butt").click(function(){
    dat=weekly;
    lab=weeklyLabel;
    $(this).addClass("selected");
    $(".first-butt").removeClass("selected");
    $(".second-butt").removeClass("selected");
    $(".fourth-butt").removeClass("selected");

    
    myChart.data.labels= lab;
    myChart.data.datasets[0].data= dat;
    myChart.update();
});
$(".fourth-butt").click(function(){
    dat=monthly;
    lab=monthlyLabel;
    $(this).addClass("selected");
    $(".first-butt").removeClass("selected");
    $(".second-butt").removeClass("selected");
    $(".third-butt").removeClass("selected");

    
    myChart.data.labels= lab;
    myChart.data.datasets[0].data= dat;
    myChart.update();
});
