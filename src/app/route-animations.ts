import {
    transition,
    trigger,
    query,
    style,
    animate,
    group
 } from '@angular/animations';
 export const slideInAnimation =
trigger('routeAnimations', [
     transition('* => *', [
           query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
           group([
                query(':enter', [
                    style({ opacity:0,transform: 'translateX(100vh)' }),
                    animate('0.5s ease-in-out',
                    style({ opacity:1,transform: 'translateX(0vh)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ opacity:1,transform: 'translateX(33vh)'}),
                    animate('0.5s ease-in-out',
                    style({ opacity: 0, transform: 'translateX(-100vh)' }))
                ], { optional: true }),
           ])
      ])
]);
