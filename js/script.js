let slider = $(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true
  });
});

$('.item').on('click', function () {
  $('.item').removeClass('active');
  $(this).addClass('active');
  let tabs = $(this).data("tabs");

  $('.pages').addClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.pages[data-tabs = ' + tabs + ']').addClass('d-block');
}) 

$('.item-tabs').on('click', function () {
  $('.item-tabs').removeClass('active-tabs');
  $(this).addClass('active-tabs');
  let tabs = $(this).data("tabs");

  $('.content-tabs').addClass('d-none');
  $('.content-tabs[data-tabs = ' + tabs + ']').removeClass('d-none');
  $('.content-tabs[data-tabs = ' + tabs + ']').addClass('d-block');
}) 
$(".menu-collapsed").click(function() {
  $(this).toggleClass("menu-expanded");
});
$("#for-one").click(function() {
  $("#click-one").toggleClass("none");
});
$("#for-two").click(function() {
  $("#click-two").toggleClass("none");
});
$("#for-thre").click(function() {
  $("#click-thre").toggleClass("none");
});
$("#for-four").click(function() {
  $("#click-four").toggleClass("none");
});


$("#remove-one").click(function() {
  $("#element-one").toggleClass("d-none");
});
$("#remove-two").click(function() {
  $("#element-two").toggleClass("d-none");
});
$("#remove-thre").click(function() {
  $("#element-thre").toggleClass("d-none");
});

$("#remove-four").click(function() {
  $("#element-four").toggleClass("d-none");
});


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [{
      data: [12, 19, 7, 10, 15, 12, 19, 7, 10, 17],
      backgroundColor: '#fff',
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        display: false
        
      },
      x: {
        display: false
      }
    }
  }
});


const ctxx = document.getElementById('myChartt');
new Chart(ctxx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [{
      data: [12, 19, 7, 10, 15, 12, 19, 7, 10, 17],
      backgroundColor: '#fff',
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        display: false
        
      },
      x: {
        display: false
      }
    }
  }
});


const ctxxx = document.getElementById('myCharttt');
new Chart(ctxxx, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', '', '', '', '', '', ''],
    datasets: [{
      data: [12, 19, 7, 10, 15, 12, 19, 7, 10, 17],
      backgroundColor: '#fff',
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        display: false
        
      },
      x: {
        display: false
      }
    }
  }
});

