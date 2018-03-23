function dailyColorPalette(dayOfTheWeek) {
   switch (dayOfTheWeek) {
      case 0:
         // Sunday Funday
         $('.background-material-profile').css('background', '#33658A');
         $('#sticky-profile').css('background', '#33658A');
         $('.background-material-experience').css('background', '#86BBD8');
         $('#sticky-experience').css('background', '#86BBD8');
         $('.background-material-skillset').css('background', '#2F4858');
         $('#sticky-skillset').css('background', '#2F4858');
         $('.background-material-about').css('background', '#F6AE2D');
         $('#sticky-about').css('background', '#F6AE2D');
         $('.background-material-contact').css('background', '#F26419');
         $('.background-material-skillset h2').css({"color":"#F6AE2D"});
         $('.background-material-skillset p').css({"color":"#F6AE2D"});
         $('.background-material-skillset a').css({"color":"#F6AE2D"});
         break;
      case 1:
         // The Monday Blues
         $('.background-material-profile').css('background', '#2196F3');
         $('#sticky-profile').css('background', '#2196F3');
         $('.background-material-experience').css('background', '#6EC6FF');
         $('#sticky-experience').css('background', '#6EC6FF');
         $('.background-material-skillset').css('background', '#0069C0');
         $('#sticky-skillset').css('background', '#0069C0');
         $('.background-material-about').css('background', '#306A9A');
         $('#sticky-about').css('background', '#306A9A');
         $('.background-material-contact').css('background', '#909091');
         $('.background-material-about h2').css({"color":"#81D4FA"});
         $('.background-material-about p').css({"color":"#81D4FA"});
         break;
      case 2:
         // Optum Orange Tuesday
         $('.background-material-profile').css('background', '#EF861B');
         $('#sticky-profile').css('background', '#EF861B');
         $('.background-material-experience').css('background', '#F6BD16');
         $('#sticky-experience').css('background', '#F6BD16');
         $('.background-material-skillset').css('background', '#F9D61A');
         $('#sticky-skillset').css('background', '#F9D61A');
         $('.background-material-about').css('background', '#9C9C9C');
         $('#sticky-about').css('background', '#9C9C9C');
         $('.background-material-contact').css('background', '#BCBCBC');
         break;
      case 3:
         // Wednesday Wanderlust
         $('.background-material-profile').css('background', '#9AD2CB');
         $('#sticky-profile').css('background', '#9AD2CB');
         $('.background-material-experience').css('background', '#D7EBBA');
         $('#sticky-experience').css('background', '#D7EBBA');
         $('.background-material-skillset').css('background', '#FEFFBE');
         $('#sticky-skillset').css('background', '#FEFFBE');
         $('.background-material-about').css('background', '#EBD494');
         $('#sticky-about').css('background', '#EBD494');
         $('.background-material-contact').css('background', '#472836');
         break;
      case 4:
         // Material Light Blue and Gray
         $('.background-material-profile').css('background', '#C9C9C9');
         $('#sticky-profile').css('background', '#C9C9C9');
         $('.background-material-experience').css('background', '#E3E3E3');
         $('#sticky-experience').css('background', '#E3E3E3');
         $('.background-material-skillset').css('background', '#9AD3DE');
         $('#sticky-skillset').css('background', '#9AD3DE');
         $('.background-material-about').css('background', '#89BDD3');
         $('#sticky-about').css('background', '#89BDD3');
         $('.background-material-contact').css('background', '#173E43');
         break;
      case 5:
         // Happy Friday
         $('.background-material-profile').css('background', '#264653');
         $('#sticky-profile').css('background', '#264653');
         $('.background-material-experience').css('background', '#2A9D8F');
         $('#sticky-experience').css('background', '#2A9D8F');
         $('.background-material-skillset').css('background', '#E9C46A');
         $('#sticky-skillset').css('background', '#E9C46A');
         $('.background-material-about').css('background', '#F4A261');
         $('#sticky-about').css('background', '#F4A261');
         $('.background-material-contact').css('background', '#E76F51');
         $('.background-material-profile h2').css({"color":"#2A9D8F"});
         $('.background-material-profile p').css({"color":"#2A9D8F"});
         break;
      case 6:
         // Saturday at Sea
         $('.background-material-profile').css('background', '#05668D');
         $('#sticky-profile').css('background', '#05668D');
         $('.background-material-experience').css('background', '#028090');
         $('#sticky-experience').css('background', '#028090');
         $('.background-material-skillset').css('background', '#00A896');
         $('#sticky-skillset').css('background', '#00A896');
         $('.background-material-about').css('background', '#02C39A');
         $('#sticky-about').css('background', '#02C39A');
         $('.background-material-about h2').css({"color":"#F0F3BD"});
         $('.background-material-about p').css({"color":"#F0F3BD"});
         $('.background-material-contact').css('background', '#F0F3BD');
         break;
      default:
         $('.background-material-profile').css('background', '#EF861B');
         $('#sticky-profile').css('background', '#EF861B');
         $('.background-material-experience').css('background', '#F6BD16');
         $('#sticky-experience').css('background', '#F6BD16');
         $('.background-material-skillset').css('background', '#F9D61A');
         $('#sticky-skillset').css('background', '#F9D61A');
         $('.background-material-about').css('background', '#9C9C9C');
         $('.background-material-contact').css('background', '#BCBCBC');
         break;
   }
}
