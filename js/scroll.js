$(function(){
  
    gsap.registerPlugin(ScrollTrigger);

    $(".about_txt_left").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_about",
      toggleActions: "restart none reverse none",
      start: "top 80%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".about_txt_right").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_about",
      toggleActions: "restart none reverse none",
      start: "top 80%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
  $(".about_txt_left_mb").each(function() {
    ScrollTrigger.create({
    trigger: ".radi_about",
    toggleActions: "restart none reverse none",
    start: "top 90%",
    onEnter: () => $(this).addClass('active'),
    onLeave: () => $(this).removeClass('active'),
    onEnterBack: () => $(this).addClass('active'),
    onLeaveBack: () => $(this).removeClass('active'),
  });
});
  $(".about_txt_right_mb").each(function() {
    ScrollTrigger.create({
    trigger: ".radi_about",
    toggleActions: "restart none reverse none",
    start: "top 90%",
    onEnter: () => $(this).addClass('active'),
    onLeave: () => $(this).removeClass('active'),
    onEnterBack: () => $(this).addClass('active'),
    onLeaveBack: () => $(this).removeClass('active'),
  });
});
    $(".about_mockup .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_about",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".radi_about h2").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_about",
      toggleActions: "restart none reverse none",
      start: "5% center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".about_title p").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_about",
      toggleActions: "restart none reverse none",
      start: "20% center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".system_top .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_system",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".system_bottom .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_system",
      toggleActions: "restart none reverse none",
      start: "top 80%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".radi_color .title").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_color",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".radi_color li").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_color",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".radi_font .title").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_font",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".montserrat").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_font",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".cabin").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_font",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
  $(".radi_icon .title").each(function() {
    ScrollTrigger.create({
    trigger: ".radi_icon",
    toggleActions: "restart none reverse none",
    start: "top bottom",
    onEnter: () => $(this).addClass('active'),
    onLeave: () => $(this).removeClass('active'),
    onEnterBack: () => $(this).addClass('active'),
    onLeaveBack: () => $(this).removeClass('active'),
  });
});
    $(".icon_box li").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_icon",
      toggleActions: "restart none reverse none",
      start: "top 70%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".icon_home").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_icon",
      toggleActions: "restart none reverse none",
      start: "center 70%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".icon_man").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_icon",
      toggleActions: "restart none reverse none",
      start: "center 70%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".icon_list").each(function() {
      ScrollTrigger.create({
      trigger: ".icon_wrap",
      toggleActions: "restart none reverse none",
      start: "top 90%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".radi_design .title").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_design",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".design_top .txt_content.left .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_design",
      toggleActions: "restart none reverse none",
      start: "20% bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".design_top .txt_content.right .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".radi_design",
      toggleActions: "restart none reverse none",
      start: "20% 70%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".design_bottom li").each(function() {
      ScrollTrigger.create({
      trigger: ".design_bottom",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".score_content .txt_content").each(function() {
      ScrollTrigger.create({
      trigger: ".score_content",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
//   $(".score_graph").each(function() {
//     ScrollTrigger.create({
//     trigger: ".score_content",
//     toggleActions: "restart none reverse none",
//     start: "top bottom",
//     onEnter: () => $(this).addClass('active'),
//     onLeave: () => $(this).removeClass('active'),
//     onEnterBack: () => $(this).addClass('active'),
//     onLeaveBack: () => $(this).removeClass('active'),
//   });
// });
    $(".color_list").each(function() {
      ScrollTrigger.create({
      trigger: ".score_content",
      toggleActions: "restart none reverse none",
      start: "center bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".solar_title .inner").each(function() {
      ScrollTrigger.create({
      trigger: ".solar_system",
      toggleActions: "restart none reverse none",
      start: "top 90%",
      end: "bottom center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".solar_top .solar_list").each(function() {
      ScrollTrigger.create({
      trigger: ".solar_system",
      toggleActions: "restart none reverse none",
      start: "top bottom",
      end: "bottom center",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".solar_bottom .solar_list").each(function() {
      ScrollTrigger.create({
      trigger: ".solar_system",
      toggleActions: "restart none reverse none",
      start: "center bottom",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
    $(".describe_wrap div").each(function() {
      ScrollTrigger.create({
      trigger: ".solar_system",
      toggleActions: "restart none reverse none",
      start: "center 80%",
      onEnter: () => $(this).addClass('active'),
      onLeave: () => $(this).removeClass('active'),
      onEnterBack: () => $(this).addClass('active'),
      onLeaveBack: () => $(this).removeClass('active'),
    });
  });
});