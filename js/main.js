function submit() {
    const form = document.querySelector('.my_form');
    //const search = document.querySelector('.search_input');
    form.submit();
    //search.value = "";
    //return false;
}

function shuffleDoodle() {
    var array = ["https://www.google.com/logos/doodles/2020/thank-you-farmworkers-and-farmers-6753651837108757-2xa.gif", "https://www.google.com/logos/doodles/2019/celebrating-wellies-4652654377566208-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-home-save-lives-6753651837108752.2-2xa.gif", "https://www.google.com/logos/doodles/2020/thank-you-packaging-shipping-and-delivery-workers-6753651837108760.2-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-coding-2017-6753651837108765-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-cricket-2017-6753651837108767-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-fischinger-2017-6753651837108768-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-rockmore-2016-6753651837108769-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-garden-gnomes-2018-6753651837108770-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-loteria-2019-6753651837108772.2-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-scoville-2016-6753651837108771-2xa.gif", "https://www.google.com/logos/doodles/2020/wear-a-mask-save-lives-copy-6753651837108810-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-pac-man-2010-6753651837108775.2-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-hip-hop-2017-6753651837108774-2xa.gif", "https://www.google.com/logos/doodles/2020/stay-and-play-at-home-with-popular-past-google-doodles-halloween-2016-6753651837108773-2xa.gif"];
    // Generate random number 
    var j = Math.floor(Math.random() * (array.length));
    document.getElementById("img").src = array[j];
}