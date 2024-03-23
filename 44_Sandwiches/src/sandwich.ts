function makesandwich (item: string[]){
    console.log('\nmaking your sandwich with:');

    item.forEach(element => console.log("- " + element));

    console.log('enjoy your sandwich !\n');
}

makesandwich(['han','cheese','lettuce'])

makesandwich(['turky','bacon','chicken'])

makesandwich(['peanut','spicy',])