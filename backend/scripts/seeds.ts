const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.category.createMany({
      data: [
        {
          name: "Pizza",
          imageUrl:
            "https://s2.glbimg.com/XsuCg04ufUmOws4sI21yhsh7tKg=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/05/20/por-que-pizza-tao-boa-gostosa-ciencia-sabor.png",
        },
        {
          name: "Steak",
          imageUrl:
            "https://www.seriouseats.com/thmb/WzQz05gt5witRGeOYKTcTqfe1gs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/butter-basted-pan-seared-steaks-recipe-hero-06-03b1131c58524be2bd6c9851a2fbdbc3.jpg",
        },
        {
          name: "Coffee",
          imageUrl:
            "https://neurosciencenews.com/files/2023/06/coffee-brain-caffeine-neuroscincces.jpg",
        },
        {
          name: "Sushi",
          imageUrl:
            "https://classic.exame.com/wp-content/uploads/2017/05/sushi.jpg?quality=70&strip=info&w=1024",
        },
        {
          name: "Mexican",
          imageUrl:
            "https://images.immediate.co.uk/production/volatile/sites/30/2022/10/Pork-carnitas-b94893e.jpg?quality=90&resize=556,505",
        },
        {
          name: "Italian",
          imageUrl:
            "https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
        },
        {
          name: "Vegetarian",
          imageUrl:
            "https://www.gigadocs.com/blog/wp-content/uploads/2020/03/istock-955998758.jpg",
        },
        {
          name: "Burger",
          imageUrl:
            "https://img.freepik.com/fotos-gratis/cheeseburguer-grelhado-com-tomate-cebola-e-fritas-gerado-por-ia_188544-43039.jpg",
        },
        {
          name: "Chinese",
          imageUrl:
            "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        },
        {
          name: "Bakery",
          imageUrl:
            "https://www.snackandbakery.com/ext/resources/images/bakeryproducts.jpg?1432238179",
        },
      ],
    });

    console.log("Success seeding the categories");

    await prisma.featured.createMany({
      data: [
        {
          name: "Featured",
          description: "Paid placements from our partners",
        },
        {
          name: "Tasty Discounts",
          description: "Everyone's been enjouing these juice discounts!",
        },
        {
          name: "Offers near you!",
          description: "Why not support your local restaurant tonight!",
        },
        {
          name: "Special Deals",
          description: "Exclusive offers just for you!",
        },
        {
          name: "New Arrivals",
          description: "Discover our latest menu items!",
        },
      ],
    });

    console.log("Success seeding the featured");

    const sushiCategory = await prisma.category.findFirst({
      where: {
        name: "Sushi",
      },
    });
    const pizzaCategory = await prisma.category.findFirst({
      where: {
        name: "Pizza",
      },
    });
    const steakCategory = await prisma.category.findFirst({
      where: {
        name: "Steak",
      },
    });
    const coffeeCategory = await prisma.category.findFirst({
      where: {
        name: "Coffee",
      },
    });
    const bakeryCategory = await prisma.category.findFirst({
      where: {
        name: "Bakery",
      },
    });

    const featured1 = await prisma.featured.findFirst({
      where: {
        name: "Featured",
      },
    });
    const featured2 = await prisma.featured.findFirst({
      where: {
        name: "Tasty Discounts",
      },
    });
    const featured3 = await prisma.featured.findFirst({
      where: {
        name: "Offers near you!",
      },
    });
    const featured4 = await prisma.featured.findFirst({
      where: {
        name: "Special Deals",
      },
    });
    const featured5 = await prisma.featured.findFirst({
      where: {
        name: "New Arrivals",
      },
    });

    await prisma.restaurant.create({
      data: {
        name: "Yo! Sushi",
        description: "Awesome Sushi!",
        imageUrl:
          "https://res.cloudinary.com/westfielddg/image/upload/westfield-media/uk/retailer/logos/djqmk0pfgn1x3rkpsx0h.png",
        latitude: 40.689247,
        longitude: -74.044502,
        address: "Main Street, 459",
        rating: 5,
        categoryId: sushiCategory.id,
        featureds: {
          create: [
            {
              featured: {
                connect: {
                  id: featured1.id,
                },
              },
            },
            {
              featured: {
                connect: {
                  id: featured2.id,
                },
              },
            },
            {
              featured: {
                connect: {
                  id: featured3.id,
                },
              },
            },
          ],
        },
      },
    });
    await prisma.restaurant.create({
      data: {
        name: "Pizza Paradise",
        description: "The best pizza in town!",
        imageUrl:
          "https://menufyproduction.imgix.net/638271196779069604+1194545.png?auto=compress,format&h=1080&w=1920&fit=max",
        latitude: 27.1751,
        longitude: 78.0421,
        address: "Pizza Street, 122",
        rating: 4.5,
        categoryId: pizzaCategory.id,
        featureds: {
          create: [
            {
              featured: {
                connect: {
                  id: featured3.id,
                },
              },
            },
          ],
        },
      },
    });
    await prisma.restaurant.create({
      data: {
        name: "Steakhouse Grill",
        description: "Premium steaks and grills.",
        imageUrl:
          "https://media-cdn.tripadvisor.com/media/photo-s/11/74/5f/78/brand.jpg",
        latitude: 48.858844,
        longitude: 2.294351,
        address: "Steak Avenue, 455",
        rating: 4.5,
        categoryId: steakCategory.id,
        featureds: {
          create: [
            {
              featured: {
                connect: {
                  id: featured1.id,
                },
              },
            },
            {
              featured: {
                connect: {
                  id: featured3.id,
                },
              },
            },
          ],
        },
      },
    });
    await prisma.restaurant.create({
      data: {
        name: "Café Supreme",
        description: "Your ultimate coffee experience!",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcHtM13B7f-nwjcI97WFtwlKgRk9_oqmIgA&usqp=CAU",
        latitude: 40.7128,
        longitude: -74.006,
        address: "Coffee Street, 123",
        rating: 4.8,
        categoryId: coffeeCategory.id,
        featureds: {
          create: [
            {
              featured: {
                connect: {
                  id: featured4.id,
                },
              },
            },
          ],
        },
      },
    });
    await prisma.restaurant.create({
      data: {
        name: "Sweet Delights Bakery",
        description: "Indulge in heavenly pastries and desserts!",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQasZCkh8Qbpn69U0YZ7sWNfizCXuf3bj-r4I4xuudNZQ78A8LOyjeJ39A-Z8yzzSrVTYM&usqp=CAU",
        latitude: 40.7128,
        longitude: -74.006,
        address: "Bakery Street, 456",
        rating: 4.9,
        categoryId: bakeryCategory.id,
        featureds: {
          create: [
            {
              featured: {
                connect: {
                  id: featured5.id,
                },
              },
            },
          ],
        },
      },
    });

    console.log("Success seeding the restaurants");

    const sushiRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: "Yo! Sushi",
      },
    });
    const pizzaRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: "Pizza Paradise",
      },
    });
    const steakRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: "Steakhouse Grill",
      },
    });
    const coffeeRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: "Café Supreme",
      },
    });
    const bakeryRestaurant = await prisma.restaurant.findFirst({
      where: {
        name: "Sweet Delights Bakery",
      },
    });

    await prisma.dish.createMany({
      data: [
        {
          name: "Sushi Roll",
          description: "Delicious sushi roll with fresh ingredients.",
          price: 10.99,
          imageUrl:
            "https://www.allrecipes.com/thmb/XT7-9MROYJZvNyQR4J40HGOVDmQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg",
          restaurantId: sushiRestaurant.id,
        },
        {
          name: "Sashimi",
          description:
            "Assorted sashimi slices served with wasabi and soy sauce.",
          price: 15.99,
          imageUrl:
            "https://receitinhas.com.br/wp-content/uploads/2018/12/iStock-623858612-1200x800.jpg",
          restaurantId: sushiRestaurant.id,
        },
        {
          name: "Margherita Pizza",
          description:
            "Classic Margherita pizza with tomato sauce, mozzarella, and basil.",
          price: 12.99,
          imageUrl:
            "https://anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg",
          restaurantId: pizzaRestaurant.id,
        },
        {
          name: "Pepperoni Pizza",
          description: "Pizza topped with spicy pepperoni slices and cheese.",
          price: 14.99,
          imageUrl:
            "https://conteudo.imguol.com.br/c/entretenimento/b1/2020/07/09/pizza-pepperoni-1594305789491_v2_4x3.jpg",
          restaurantId: pizzaRestaurant.id,
        },
        {
          name: "Filet Mignon",
          description:
            "Tender filet mignon steak cooked to perfection, served with a flavorful sauce.",
          price: 29.99,
          imageUrl:
            "https://cdn11.bigcommerce.com/s-i5ojg56z3o/images/stencil/original/products/112/376/brasstown-beef-filet-mignon-1__62084.1671511361.jpg?c=1",
          restaurantId: steakRestaurant.id,
        },
        {
          name: "Grilled Ribeye",
          description:
            "Juicy ribeye steak seasoned and grilled to your preference, served with roasted vegetables.",
          price: 24.99,
          imageUrl:
            "https://www.seannaskitchen.com/wp-content/uploads/2023/04/Grilled-Ribeye-Recipe-3.jpg",
          restaurantId: steakRestaurant.id,
        },
        {
          name: "Espresso",
          description: "Bold and rich Italian coffee.",
          price: 2.99,
          imageUrl:
            "https://perfectdailygrind.com/pt/wp-content/uploads/sites/5/2020/03/Paul-Mordheweyk-1024x850.jpg",
          restaurantId: coffeeRestaurant.id,
        },
        {
          name: "Croissant",
          description: "Flaky and buttery pastry.",
          price: 3.49,
          imageUrl:
            "https://blog.praticabr.com/wp-content/uploads/2023/07/historia-do-croissant-1024x683.jpg",
          restaurantId: bakeryRestaurant.id,
        },
      ],
    });

    console.log("Success seeding the dishes");
  } catch (error) {
    console.error("Error seeding the database", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
