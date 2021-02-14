import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'anganamorey out now',
      image: 'assets/images/sg1.jpg',
      userName: 'shreyaghoshal',
      content: `And its yours now!
    #AnganaMorey - Out now
    An electro pop bandish in collaboration with 
    @soumghoshal
     Hope you enjoy this audio visual treat!
    
    https://youtu.be/vKkzozVVuKY`,
    },
    {
      title: 'instagram filter',
      image: 'assets/images/sg2.jpg',
      userName: 'shreyaghoshal',
      content: `Yeah!! We came out with this special #AnganaMorey
        Instagram filter!! Go check it out and make your IG reels/stories with it!Heart suitButterfly`,
    },
    {
      title: 'shreya ghoshal dp',
      image: 'assets/images/sg3.jpg',
      userName: 'TheQuint',
      content: `Catch musical sensation 
      @shreyaghoshal
       LIVE with 
      @AbiraDhar
       at 4 pm on 8 February, where she talks about her
        journey and what the audience can look forward to!`,
    },
  ];
}
