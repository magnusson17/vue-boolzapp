/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto */
var app = new Vue(
    {
        el: "#root",
        data: {
            profilo: {
                nome: "Sofia",
                img: "_io"
            },
            usersChat: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            apears: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            apears: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            apears: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            apears: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            apears: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            apears: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            apears: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            apears: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            apears: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            apears: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            apears: false
                        }
                    ],
                },
            ],
            indexChange: 0,
            messagesIndexChange: 0,
            myMessage: "",
            myQuest: "",
            // show: false,
            // bindTheIndex: 0,
            // newObjApears: {
            //     indexServer: 0,
            //     apears: false
            // },
            // apears: false,
        },
        created() {
            // this.usersChat[this.indexChange].messages[ind].apears;
        },
        methods: {
            indexChangeFunction: function(indx) {
                this.indexChange = indx
            },

            myMessageFunction: function() {
                let currentDate = dayjs().format('DD/MM/YYYY');
                let currentHour = dayjs().get('hour');
                let currentMinute = dayjs().get('minutes');

                let myMessageNewObj = {
                    date: `${currentDate} ${currentHour}:${currentMinute}`,
                    message: this.myMessage,
                    status: 'sent'
                };
                if (this.myMessage != "") {
                    this.usersChat[this.indexChange].messages.push(myMessageNewObj);
                    this.myMessage = "";
                    setTimeout(this.answerMeOkFunction, 1000)
                }
            },

            answerMeOkFunction: function() {
                let currentDate = dayjs().format('DD/MM/YYYY');
                let currentHour = dayjs().get('hour');
                let currentMinute = dayjs().get('minutes');

                let answerMessageNewObj = {
                    date: `${currentDate} ${currentHour}:${currentMinute}`,
                    message: "Okk",
                    status: "received"
                }
                this.usersChat[this.indexChange].messages.push(answerMessageNewObj);
            },

            researchFunction: function() {
                this.usersChat.forEach(
                    (element, index) => {
                        if (element.name.toLowerCase().includes(this.myQuest) == true) {
                            element.visible = true;
                        } else {
                            element.visible = false;
                        }
                    }
                );
            },

            scrollMenuApears: function(ind) {
                // this.usersChat[this.indexChange].messages[ind].apears == false
                // this.usersChat[this.indexChange].messages[ind].newObjApears.apears == false
                // this.usersChat[this.indexChange].messages[ind].newObjApears.apears = true;     
                // this.usersChat[this.indexChange].messages[ind].apears = false;
                // console.log(this.usersChat[this.indexChange].messages[ind]);

                // !!! COME FACCIO A "PUSHARE" IN OGNI OBJ "apears"? senza dover "barare" e andrlo a inserire fisicamente in ogni obj? !!!
                if (this.usersChat[this.indexChange].messages[ind].status == "sent") {
                    if (this.usersChat[this.indexChange].messages[ind].apears == false) {
                        this.usersChat[this.indexChange].messages[ind].apears = true
                        console.log(this.usersChat[this.indexChange].messages[ind]);
                    } else {
                        this.usersChat[this.indexChange].messages[ind].apears = false;
                        console.log();
                    }  
                }
            },

            delateMessage: function(ind) {
                this.usersChat[this.indexChange].messages[ind].message = "messaggio eliminato"
                // ora pero voglio dare una class al div contenente questa function che gli dica: "diventa d-none"
                // e vorrei dare una class al div che contiene "messaggio eliminato" che dica: "diventa stile italic"
            },
        }
    }
);

















































































/**{
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    } */