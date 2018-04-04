import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const items = [
      { id: 11, name: '1953 Silver Certificate', quantity: 0,background: 'https://d2j6tswx2otu6e.cloudfront.net/a0MlFs5mTJk2NwbnVIZT-PVesGc=/600x1066/a9b6/a9b650f6b37d49c9bd534749cc8dffb6.jpg' },
      { id: 12, name: 'Brand new heels', quantity: 40,background: 'https://d2j6tswx2otu6e.cloudfront.net/1153gE0m4kSa7y4KYkV-X8hR4BA=/300x400/9791/9791c94d62664c508260e3eb2e13aeaf.jpg' },
      { id: 13, name: 'Kirkland 3L Olive oil', quantity: 15,background:  'https://d2j6tswx2otu6e.cloudfront.net/0yd5bTQLLKVptz415MU-Gc7FXPM=/600x801/29ef/29efe5febb3d4effaf9c522a719e18ae.jpg'},
      { id: 14, name: 'Air max flyposite', quantity: 50,background:  'https://d2j6tswx2otu6e.cloudfront.net/vxvFmcag4kGSPuNsSo3h7gshUa0=/600x800/a6c2/a6c283a1c7e04782b583af25e7118edb.jpg'},
      { id: 15, name: 'Table and 2 chairs', quantity: 55,background:  'https://d2j6tswx2otu6e.cloudfront.net/tvvxIcaNYVtBitqMjKZVnGuAxyQ=/600x450/32f3/32f38ca2e0914719bcc0a2006e798444.jpg'},
      { id: 16, name: 'Band new nice watch', quantity: 35,background:  'https://d2j6tswx2otu6e.cloudfront.net/Z_8b7RNrF1eo_VoOVwpJFuQE7so=/600x801/3c8d/3c8d8b9672254899ab9527251d29c59c.jpg'},
      { id: 17, name: 'Maytag washer', quantity: 140,background:  'https://d2j6tswx2otu6e.cloudfront.net/yNAyD_QI6PW7HG8jIWhuySZqB7s=/585x1040/6484/64848ea4c2aa434a96bfb10102f8ce82.jpg'},
      { id: 18, name: 'Ford Focus SE 2009', quantity: 6000,background:  'https://d2j6tswx2otu6e.cloudfront.net/iNM22TLjYOxrK9CcikUQo-JTFS8=/600x450/99c6/99c60ff14fb44c9b8d7fac82c014cb06.jpg'},
      { id: 19, name: 'Video game', quantity: 25,background:  'https://d2j6tswx2otu6e.cloudfront.net/9N9vhlCP8RvkjBAQ-L4uco1EG00=/600x450/b489/b48991506b414323adcce5bc36270407.jpg'},
      { id: 20, name: 'Cream Soda', quantity: 3,background:  'https://www.mykholls.com/image/cache/data/TRADE/S1W102325-250x250.jpg'},
      { id: 11, name: 'Brand new heels', quantity: 40,background: 'https://thelibrarylife.files.wordpress.com/2012/09/twitter-background7.png' },
      { id: 12, name: 'Brand new heels', quantity: 40,background: 'https://d2j6tswx2otu6e.cloudfront.net/1153gE0m4kSa7y4KYkV-X8hR4BA=/300x400/9791/9791c94d62664c508260e3eb2e13aeaf.jpg' },
      { id: 13, name: 'Kirkland 3L Olive oil', quantity: 15,background:  'https://d2j6tswx2otu6e.cloudfront.net/0yd5bTQLLKVptz415MU-Gc7FXPM=/600x801/29ef/29efe5febb3d4effaf9c522a719e18ae.jpg'},
      { id: 14, name: 'Air max flyposite', quantity: 50,background:  'https://d2j6tswx2otu6e.cloudfront.net/vxvFmcag4kGSPuNsSo3h7gshUa0=/600x800/a6c2/a6c283a1c7e04782b583af25e7118edb.jpg'},
      { id: 15, name: 'Table and 2 chairs', quantity: 55,background:  'https://d2j6tswx2otu6e.cloudfront.net/tvvxIcaNYVtBitqMjKZVnGuAxyQ=/600x450/32f3/32f38ca2e0914719bcc0a2006e798444.jpg'},
      { id: 16, name: 'Band new nice watch', quantity: 35,background:  'https://d2j6tswx2otu6e.cloudfront.net/Z_8b7RNrF1eo_VoOVwpJFuQE7so=/600x801/3c8d/3c8d8b9672254899ab9527251d29c59c.jpg'},
      { id: 17, name: 'Maytag washer', quantity: 140,background:  'https://d2j6tswx2otu6e.cloudfront.net/yNAyD_QI6PW7HG8jIWhuySZqB7s=/585x1040/6484/64848ea4c2aa434a96bfb10102f8ce82.jpg'},
      { id: 18, name: 'Ford Focus SE 2009', quantity: 6000,background:  'https://d2j6tswx2otu6e.cloudfront.net/iNM22TLjYOxrK9CcikUQo-JTFS8=/600x450/99c6/99c60ff14fb44c9b8d7fac82c014cb06.jpg'},
      { id: 19, name: 'Video game', quantity: 25,background:  'https://d2j6tswx2otu6e.cloudfront.net/9N9vhlCP8RvkjBAQ-L4uco1EG00=/600x450/b489/b48991506b414323adcce5bc36270407.jpg'},
      { id: 20, name: 'Cream Soda', quantity: 3,background:  'https://www.mykholls.com/image/cache/data/TRADE/S1W102325-250x250.jpg'}
    ];
    return {items};
  }
}
