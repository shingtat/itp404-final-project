export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
   server.create('recipe',{
      creator: 'Aunty May',
      country: 'Vietnam',
      title: 'Chicken Pho',
      ingredients: 'Egg, Noodles, Cilantro, Onion',
      image: '/assets/images/pho.jpg',
      like: 'false'
   });

   server.create('recipe',{
      creator: 'Aunty Fong',
      country: 'Vietnam',
      title: 'Pork Bahnmi',
      ingredients: 'Pork, Bun, Cilantro, Carrots, Onion',
      image: '/assets/images/bahnmi.jpg',
      like: 'false'
   });

   server.create('recipe',{
      creator: 'Aunty Shang',
      country: 'Beijing',
      title: 'Peking Duck',
      ingredients: 'Duck, Flour, Hoisin Sauce, Onion',
      image: '/assets/images/pekingduck.jpeg',
      like: 'false'
   });
   server.createList('recipe', 10);
}
