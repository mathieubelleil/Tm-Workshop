import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    listUser = [
        {
            name:"Arthur",
            firstname:"Arthur",
            school:"Arthur",
            date:"28/07/2022",
            sign:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Autograph_of_Benjamin_Franklin.svg/1200px-Autograph_of_Benjamin_Franklin.svg.png',
        },
        {
            name:"Baw",
            firstname:"Jean",
            school:"Angers",
            date:"28/07/2022",
            sign:'https://upload.wikimedia.org/wikipedia/commons/e/e3/Jean-Yves_Duclos_Signature.png',
        },
        {
            name:"Arthur",
            firstname:"Arthur",
            school:"Arthur",
            date:"28/07/2022",
            sign: null,
        },
        {
            name:"Arthur",
            firstname:"Arthur",
            school:"Arthur",
            date:"28/07/2022",
            sign: null,
        },
    ];
    codeSeance = 18970;


    constructor(private userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}