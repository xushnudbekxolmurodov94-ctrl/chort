/* ============================================
   CARMARKET 2026 — MAIN JAVASCRIPT
   ============================================ */

// ========== CAR DATABASE (34 vehicles with multiple images) ==========
const CARS = [
    {
        id: 'bmw-m4-2025', brand: 'BMW', model: 'M4 Competition', price: 82900, year: 2025,
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '1,200 mi',
        horsepower: 503, engine: '3.0L Twin-Turbo I6', drivetrain: 'RWD',
        color: 'Isle of Man Green', interior: 'Black Merino Leather',
        description: 'The BMW M4 Competition delivers breathtaking performance with its twin-turbocharged inline-six engine, producing 503 horsepower. Track-ready dynamics meet everyday usability.',
        style: 'sport', type: 'Sports', likes: 245
    },
    {
        id: 'mercedes-amg-gt-2025', brand: 'Mercedes-Benz', model: 'AMG GT 63', price: 179900, year: 2025,
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
        ],
        category: 'Luxury', fuel: 'Gasoline', transmission: 'Automatic', mileage: '800 mi',
        horsepower: 577, engine: '4.0L V8 Biturbo', drivetrain: 'AWD',
        color: 'Obsidian Black', interior: 'Nappa Leather Red/Black',
        description: 'The Mercedes-AMG GT 63 is a four-door coupe that combines supercar performance with luxury grand touring comfort. Handcrafted AMG V8 power.',
        style: 'luxury', type: 'Luxury', likes: 312
    },
    {
        id: 'porsche-911-2025', brand: 'Porsche', model: '911 Carrera S', price: 134900, year: 2025,
        image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1611821064430-0d41765a6106?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '500 mi',
        horsepower: 443, engine: '3.0L Twin-Turbo Flat-6', drivetrain: 'RWD',
        color: 'GT Silver', interior: 'Black Leather',
        description: 'The iconic Porsche 911 Carrera S continues to set the benchmark for sports cars. Timeless design meets cutting-edge technology.',
        style: 'sport', type: 'Sports', likes: 489
    },
    {
        id: 'tesla-model-s-2025', brand: 'Tesla', model: 'Model S Plaid', price: 89990, year: 2025,
        image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
            'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '300 mi',
        horsepower: 1020, engine: 'Tri-Motor Electric', drivetrain: 'AWD',
        color: 'Pearl White', interior: 'All Black',
        description: 'The fastest accelerating production car ever made. Model S Plaid delivers 1,020 horsepower with zero emissions and 390 miles of range.',
        style: 'electric', type: 'Electric', likes: 567
    },
    {
        id: 'audi-rs7-2025', brand: 'Audi', model: 'RS7 Sportback', price: 128900, year: 2025,
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80'
        ],
        category: 'Luxury', fuel: 'Gasoline', transmission: 'Automatic', mileage: '2,100 mi',
        horsepower: 591, engine: '4.0L Twin-Turbo V8', drivetrain: 'AWD',
        color: 'Nardo Grey', interior: 'Black Valcona Leather',
        description: 'The Audi RS7 Sportback combines breathtaking performance with everyday practicality. A four-door grand tourer with supercar DNA.',
        style: 'luxury', type: 'Luxury', likes: 278
    },
    {
        id: 'toyota-gr-supra-2025', brand: 'Toyota', model: 'GR Supra 3.0', price: 56250, year: 2025,
        image: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?w=800&q=80',
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Manual', mileage: '4,500 mi',
        horsepower: 382, engine: '3.0L Turbo I6', drivetrain: 'RWD',
        color: 'Renaissance Red', interior: 'Black Leather',
        description: 'The legendary Supra returns with a turbocharged inline-six and available manual transmission. Pure driving excitement.',
        style: 'sport', type: 'Sports', likes: 356
    },
    {
        id: 'lexus-lc500-2025', brand: 'Lexus', model: 'LC 500 Coupe', price: 98550, year: 2025,
        image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80'
        ],
        category: 'Coupe', fuel: 'Gasoline', transmission: 'Automatic', mileage: '3,200 mi',
        horsepower: 471, engine: '5.0L V8', drivetrain: 'RWD',
        color: 'Infrared', interior: 'Circuit Red Leather',
        description: 'The Lexus LC 500 is a stunning grand touring coupe that combines breathtaking design with refined V8 performance.',
        style: 'luxury', type: 'Coupe', likes: 198
    },
    {
        id: 'lamborghini-huracan-2024', brand: 'Lamborghini', model: 'Huracán EVO', price: 268000, year: 2024,
        image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '1,800 mi',
        horsepower: 631, engine: '5.2L V10', drivetrain: 'AWD',
        color: 'Verde Mantis', interior: 'Nero Ade Leather',
        description: 'The Huracán EVO is a naturally aspirated V10 masterpiece. Raw, emotional, and utterly unforgettable driving experience.',
        style: 'sport', type: 'Sports', likes: 678
    },
    {
        id: 'ferrari-f8-2024', brand: 'Ferrari', model: 'F8 Tributo', price: 276550, year: 2024,
        image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&q=80',
            'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '900 mi',
        horsepower: 710, engine: '3.9L Twin-Turbo V8', drivetrain: 'RWD',
        color: 'Rosso Corsa', interior: 'Black Leather',
        description: 'The F8 Tributo is a tribute to the most powerful V8 in Ferrari history. A perfect blend of performance and elegance.',
        style: 'sport', type: 'Sports', likes: 723
    },
    {
        id: 'ford-mustang-gt-2025', brand: 'Ford', model: 'Mustang GT', price: 42900, year: 2025,
        image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82d718d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1584345604476-8ec5f82d718d?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Manual', mileage: '5,600 mi',
        horsepower: 480, engine: '5.0L Coyote V8', drivetrain: 'RWD',
        color: 'Grabber Blue', interior: 'Ebony Leather',
        description: 'The all-new Ford Mustang GT brings American muscle into the modern era with 480 horsepower and a throaty V8 soundtrack.',
        style: 'sport', type: 'Sports', likes: 412
    },
    {
        id: 'chevrolet-corvette-2025', brand: 'Chevrolet', model: 'Corvette Z06', price: 115900, year: 2025,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '2,400 mi',
        horsepower: 670, engine: '5.5L Flat-Plane V8', drivetrain: 'RWD',
        color: 'Torch Red', interior: 'Morello Red Leather',
        description: 'The Corvette Z06 features a high-revving flat-plane crank V8 that screams to 8,600 RPM. American supercar excellence.',
        style: 'sport', type: 'Sports', likes: 389
    },
    {
        id: 'range-rover-2025', brand: 'Range Rover', model: 'Autobiography LWB', price: 215000, year: 2025,
        image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1600712242805-5e7d6921821d?w=800&q=80',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '1,500 mi',
        horsepower: 523, engine: '4.4L Twin-Turbo V8', drivetrain: 'AWD',
        color: 'Santorini Black', interior: 'Ebony Windsor Leather',
        description: 'The Range Rover Autobiography is the pinnacle of luxury SUVs. Unmatched refinement with go-anywhere capability.',
        style: 'luxury', type: 'SUV', likes: 234
    },
    {
        id: 'tesla-model-x-2025', brand: 'Tesla', model: 'Model X Plaid', price: 94990, year: 2025,
        image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80',
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '1,100 mi',
        horsepower: 1020, engine: 'Tri-Motor Electric', drivetrain: 'AWD',
        color: 'Midnight Silver', interior: 'Cream Leather',
        description: 'The fastest and most capable SUV ever built. Model X Plaid offers falcon-wing doors, 390-mile range, and 1,020 hp.',
        style: 'electric', type: 'Electric', likes: 345
    },
    {
        id: 'bmw-x7-2025', brand: 'BMW', model: 'X7 M60i', price: 109900, year: 2025,
        image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '3,800 mi',
        horsepower: 523, engine: '4.4L Twin-Turbo V8', drivetrain: 'AWD',
        color: 'Alpine White', interior: 'Cognac Leather',
        description: 'The BMW X7 M60i is a full-size luxury SUV with commanding presence and exhilarating V8 performance.',
        style: 'luxury', type: 'SUV', likes: 187
    },
    {
        id: 'mercedes-gle-2025', brand: 'Mercedes-Benz', model: 'GLE 53 AMG Coupe', price: 83500, year: 2025,
        image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '4,200 mi',
        horsepower: 429, engine: '3.0L Turbo I6 + EQ Boost', drivetrain: 'AWD',
        color: 'Emerald Green', interior: 'Yacht Blue Leather',
        description: 'The GLE 53 AMG Coupe blends athletic performance with SUV practicality. A sporty take on luxury mobility.',
        style: 'luxury', type: 'SUV', likes: 156
    },
    {
        id: 'porsche-cayenne-2025', brand: 'Porsche', model: 'Cayenne Turbo GT', price: 195900, year: 2025,
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1611821064430-0d41765a6106?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '1,900 mi',
        horsepower: 631, engine: '4.0L Twin-Turbo V8', drivetrain: 'AWD',
        color: 'Arctic Grey', interior: 'Black/Arctic Grey Alcantara',
        description: 'The Cayenne Turbo GT is the fastest SUV around the Nürburgring. Porsche sports car DNA in an SUV package.',
        style: 'sport', type: 'SUV', likes: 267
    },
    {
        id: 'audi-e-tron-gt-2025', brand: 'Audi', model: 'e-tron GT RS', price: 147900, year: 2025,
        image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80',
            'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '2,200 mi',
        horsepower: 637, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'Daytona Grey', interior: 'Express Red Leather',
        description: 'The Audi RS e-tron GT is a stunning electric grand tourer. 637 horsepower with zero emissions and exquisite craftsmanship.',
        style: 'electric', type: 'Electric', likes: 298
    },
    {
        id: 'lucid-air-2025', brand: 'Lucid', model: 'Air Sapphire', price: 249000, year: 2025,
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80',
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80',
            'https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '600 mi',
        horsepower: 1234, engine: 'Tri-Motor Electric', drivetrain: 'AWD',
        color: 'Stellar White', interior: 'Santa Monica Leather',
        description: 'The Lucid Air Sapphire is the quickest sedan in the world with 1,234 horsepower and over 400 miles of range.',
        style: 'electric', type: 'Electric', likes: 412
    },
    {
        id: 'rivian-r1s-2025', brand: 'Rivian', model: 'R1S Adventure', price: 89900, year: 2025,
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '3,400 mi',
        horsepower: 835, engine: 'Quad-Motor Electric', drivetrain: 'AWD',
        color: 'Forest Green', interior: 'Ocean Coast Leather',
        description: 'The Rivian R1S is an electric adventure SUV with quad-motor capability. Built for exploration with zero emissions.',
        style: 'electric', type: 'SUV', likes: 234
    },
    {
        id: 'toyota-land-cruiser-2025', brand: 'Toyota', model: 'Land Cruiser 250', price: 58900, year: 2025,
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Hybrid', transmission: 'Automatic', mileage: '6,800 mi',
        horsepower: 326, engine: '2.4L Turbo Hybrid', drivetrain: 'AWD',
        color: 'Heritage Blue', interior: 'Black Leather',
        description: 'The new Land Cruiser combines legendary off-road capability with modern hybrid efficiency. Adventure ready.',
        style: 'family', type: 'SUV', likes: 289
    },
    {
        id: 'lexus-rx500h-2025', brand: 'Lexus', model: 'RX 500h F Sport', price: 62500, year: 2025,
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
            'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Hybrid', transmission: 'Automatic', mileage: '5,200 mi',
        horsepower: 366, engine: '2.4L Turbo Hybrid', drivetrain: 'AWD',
        color: 'Nori Green', interior: 'Black Leather',
        description: 'The Lexus RX 500h F Sport offers a perfect blend of luxury, efficiency, and sporty performance.',
        style: 'family', type: 'SUV', likes: 178
    },
    {
        id: 'bmw-i7-2025', brand: 'BMW', model: 'i7 xDrive60', price: 119900, year: 2025,
        image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
            'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80',
            'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=800&q=80',
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '1,800 mi',
        horsepower: 536, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'Tanzanite Blue', interior: 'Black Merino Leather',
        description: 'The BMW i7 is the electric flagship sedan. Theatre Screen, executive rear seating, and 370 miles of range.',
        style: 'luxury', type: 'Sedan', likes: 201
    },
    {
        id: 'mercedes-eqs-2025', brand: 'Mercedes-Benz', model: 'EQS 580', price: 106900, year: 2025,
        image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80',
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '2,600 mi',
        horsepower: 516, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'High-Tech Silver', interior: 'Macchiato Beige Nappa',
        description: 'The Mercedes EQS 580 is the electric S-Class. Hyperscreen, supreme comfort, and 350 miles of range.',
        style: 'luxury', type: 'Sedan', likes: 187
    },
    {
        id: 'porsche-taycan-2025', brand: 'Porsche', model: 'Taycan Turbo S', price: 195900, year: 2025,
        image: 'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80',
            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '1,400 mi',
        horsepower: 750, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'Frozen Blue', interior: 'Black/Bordeaux Red',
        description: 'The Taycan Turbo S is the electric sports car benchmark. 750 hp with launch control and Porsche driving dynamics.',
        style: 'electric', type: 'Sedan', likes: 356
    },
    {
        id: 'genesis-gv80-2025', brand: 'Genesis', model: 'GV80 3.5T', price: 69900, year: 2025,
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80'
        ],
        category: 'Luxury', fuel: 'Gasoline', transmission: 'Automatic', mileage: '4,100 mi',
        horsepower: 375, engine: '3.5L Twin-Turbo V6', drivetrain: 'AWD',
        color: 'Savile Silver', interior: 'Earth Brown Leather',
        description: 'The Genesis GV80 offers Korean luxury at its finest. Stunning design with premium materials and advanced tech.',
        style: 'luxury', type: 'SUV', likes: 145
    },
    {
        id: 'maserati-gt-2025', brand: 'Maserati', model: 'MC20 Cielo', price: 265000, year: 2025,
        image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Gasoline', transmission: 'Automatic', mileage: '700 mi',
        horsepower: 621, engine: '3.0L Twin-Turbo V6 Nettuno', drivetrain: 'RWD',
        color: 'Bianco Audace', interior: 'Blue Leather',
        description: 'The Maserati MC20 Cielo features a retractable glass roof and the revolutionary Nettuno V6 engine. Italian artistry meets performance.',
        style: 'sport', type: 'Sports', likes: 234
    },
    {
        id: 'mclaren-artura-2024', brand: 'McLaren', model: 'Artura', price: 229500, year: 2024,
        image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
            'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
        ],
        category: 'Sports', fuel: 'Hybrid', transmission: 'Automatic', mileage: '1,600 mi',
        horsepower: 671, engine: '3.0L Twin-Turbo V6 Hybrid', drivetrain: 'RWD',
        color: 'Volcano Yellow', interior: 'Jet Black Alcantara',
        description: 'The McLaren Artura is the brand\'s first hybrid supercar. A new chapter in high-performance electrification.',
        style: 'sport', type: 'Sports', likes: 312
    },
    {
        id: 'aston-martin-dbx-2025', brand: 'Aston Martin', model: 'DBX707', price: 239900, year: 2025,
        image: 'https://images.unsplash.com/photo-1600712242805-5e7d6921821d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1600712242805-5e7d6921821d?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '2,800 mi',
        horsepower: 707, engine: '4.0L Twin-Turbo V8', drivetrain: 'AWD',
        color: 'Satellite Aston Green', interior: 'Cashmere Tan Leather',
        description: 'The DBX707 is the most powerful luxury SUV in the world. 707 horsepower of British engineering excellence.',
        style: 'luxury', type: 'SUV', likes: 267
    },
    {
        id: 'bentley-continental-2025', brand: 'Bentley', model: 'Continental GT Speed', price: 285000, year: 2025,
        image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
            'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
            'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80'
        ],
        category: 'Luxury', fuel: 'Gasoline', transmission: 'Automatic', mileage: '900 mi',
        horsepower: 650, engine: '6.0L Twin-Turbo W12', drivetrain: 'AWD',
        color: 'Glacier White', interior: 'Linen Leather',
        description: 'The Bentley Continental GT Speed is the ultimate grand tourer. W12 power, handcrafted luxury, and effortless performance.',
        style: 'luxury', type: 'Coupe', likes: 198
    },
    {
        id: 'rolls-royce-ghost-2025', brand: 'Rolls-Royce', model: 'Ghost Black Badge', price: 389000, year: 2025,
        image: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=800&q=80',
            'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80',
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
            'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80'
        ],
        category: 'Luxury', fuel: 'Gasoline', transmission: 'Automatic', mileage: '400 mi',
        horsepower: 591, engine: '6.75L Twin-Turbo V12', drivetrain: 'AWD',
        color: 'Black Diamond', interior: 'Seashell Leather',
        description: 'The Rolls-Royce Ghost Black Badge is the most technologically advanced Rolls-Royce ever. Post-opulent luxury at its finest.',
        style: 'luxury', type: 'Sedan', likes: 456
    },
    {
        id: 'hyundai-ioniq5-2025', brand: 'Hyundai', model: 'Ioniq 5 N', price: 67900, year: 2025,
        image: 'https://images.unsplash.com/photo-1675654567731-b31a0d826e9a?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1675654567731-b31a0d826e9a?w=800&q=80',
            'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
            'https://images.unsplash.com/photo-1619405399517-d7fce0a139b0?w=800&q=80',
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '3,100 mi',
        horsepower: 641, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'Performance Blue', interior: 'Black Suede',
        description: 'The Ioniq 5 N proves electric cars can be fun. 641 hp, N e-Shift simulation, and track-ready dynamics.',
        style: 'electric', type: 'Electric', likes: 234
    },
    {
        id: 'cadillac-escalade-2025', brand: 'Cadillac', model: 'Escalade V', price: 158900, year: 2025,
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
            'https://images.unsplash.com/photo-1584345604476-8ec5f82d718d?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1600712242805-5e7d6921821d?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Gasoline', transmission: 'Automatic', mileage: '2,400 mi',
        horsepower: 682, engine: '6.2L Supercharged V8', drivetrain: 'AWD',
        color: 'Midnight Sky', interior: 'Kona Blue Leather',
        description: 'The Escalade V is American luxury at its most powerful. Supercharged V8 with commanding presence.',
        style: 'luxury', type: 'SUV', likes: 189
    },
    {
        id: 'dodge-charger-daytona-2025', brand: 'Dodge', model: 'Charger Daytona Scat Pack', price: 73900, year: 2025,
        image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&q=80',
            'https://images.unsplash.com/photo-1584345604476-8ec5f82d718d?w=800&q=80',
            'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80'
        ],
        category: 'Electric', fuel: 'Electric', transmission: 'Automatic', mileage: '1,200 mi',
        horsepower: 670, engine: 'Dual-Motor Electric', drivetrain: 'AWD',
        color: 'B5 Blue', interior: 'Black Leather',
        description: 'The electric Dodge Charger Daytona brings muscle car attitude to the EV era. R-Wing aerodynamics and eRupt transmission.',
        style: 'sport', type: 'Sedan', likes: 267
    },
    {
        id: 'volvo-xc90-2025', brand: 'Volvo', model: 'XC90 Recharge T8', price: 75900, year: 2025,
        image: 'https://images.unsplash.com/photo-1612731486606-273847102002?w=800&q=80',
        images: [
            'https://images.unsplash.com/photo-1612731486606-273847102002?w=800&q=80',
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
            'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
        ],
        category: 'SUV', fuel: 'Hybrid', transmission: 'Automatic', mileage: '5,800 mi',
        horsepower: 455, engine: '2.0L Turbo + Electric', drivetrain: 'AWD',
        color: 'Crystal White', interior: 'Blond Leather',
        description: 'The Volvo XC90 Recharge combines Scandinavian design with plug-in hybrid efficiency. Safety, sustainability, and style.',
        style: 'family', type: 'SUV', likes: 178
    }
];

// ========== STATE MANAGEMENT ==========
const State = {
    cart: [], compare: [], likes: {}, theme: 'dark',
    profile: { name: '', email: '', phone: '', address: '' }, orders: [],

    init() {
        this.cart = this.load('cm_cart') || [];
        this.compare = this.load('cm_compare') || [];
        this.likes = this.load('cm_likes') || {};
        this.theme = this.load('cm_theme') || 'dark';
        this.profile = this.load('cm_profile') || { name: '', email: '', phone: '', address: '' };
        this.orders = this.load('cm_orders') || [];
        CARS.forEach(car => {
            if (this.likes[car.id] === undefined) this.likes[car.id] = car.likes || 0;
        });
    },
    save(key, data) { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) { console.warn('localStorage save failed:', e); } },
    load(key) { try { const data = localStorage.getItem(key); return data ? JSON.parse(data) : null; } catch (e) { console.warn('localStorage load failed:', e); return null; } },
    saveAll() { this.save('cm_cart', this.cart); this.save('cm_compare', this.compare); this.save('cm_likes', this.likes); this.save('cm_theme', this.theme); this.save('cm_profile', this.profile); this.save('cm_orders', this.orders); },

    addToCart(carId) {
        const existing = this.cart.find(item => item.id === carId);
        if (existing) { existing.qty += 1; } else { this.cart.push({ id: carId, qty: 1 }); }
        this.save('cm_cart', this.cart); updateCartUI();
    },
    removeFromCart(carId) { this.cart = this.cart.filter(item => item.id !== carId); this.save('cm_cart', this.cart); updateCartUI(); },
    updateCartQty(carId, qty) {
        const item = this.cart.find(i => i.id === carId);
        if (item) { if (qty <= 0) this.removeFromCart(carId); else { item.qty = qty; this.save('cm_cart', this.cart); updateCartUI(); } }
    },
    getCartTotal() { return this.cart.reduce((total, item) => { const car = CARS.find(c => c.id === item.id); return total + (car ? car.price * item.qty : 0); }, 0); },
    getCartCount() { return this.cart.reduce((count, item) => count + item.qty, 0); },

    addToCompare(carId) {
        if (this.compare.length >= 3) return false;
        if (this.compare.includes(carId)) return false;
        this.compare.push(carId); this.save('cm_compare', this.compare); updateCompareUI(); return true;
    },
    removeFromCompare(carId) { this.compare = this.compare.filter(id => id !== carId); this.save('cm_compare', this.compare); updateCompareUI(); },

    toggleLike(carId) { if (this.likes[carId]) { this.likes[carId]--; } else { this.likes[carId] = 1; } this.save('cm_likes', this.likes); },
    isLiked(carId) { return this.likes[carId] > 0; },
    getLikes(carId) { return this.likes[carId] || 0; },

    addOrder(order) { this.orders.unshift(order); this.save('cm_orders', this.orders); },
    clearCart() { this.cart = []; this.save('cm_cart', this.cart); updateCartUI(); }
};

// ========== UTILITY ==========
function formatPrice(price) { return '$' + price.toLocaleString('en-US'); }
function getCarById(id) { return CARS.find(c => c.id === id); }
function escapeHtml(str) { const div = document.createElement('div'); div.textContent = str; return div.innerHTML; }

function updateCartUI() {
    const count = State.getCartCount();
    document.querySelectorAll('#headerCartCount, #cartTabBadge').forEach(el => { if (el) el.textContent = count; });
}
function updateCompareUI() {
    const count = State.compare.length;
    document.querySelectorAll('#headerCompareBadge').forEach(el => { if (el) el.textContent = count; });
}

// ========== THEME ==========
function initTheme() { document.documentElement.setAttribute('data-theme', State.theme); }
function toggleTheme() {
    State.theme = State.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', State.theme);
    State.save('cm_theme', State.theme);
}

// ========== HEADER ==========
function initHeader() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const themeToggle = document.getElementById('themeToggle');
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); mobileMenu.classList.toggle('active'); });
    }
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => { hamburger?.classList.remove('active'); mobileMenu?.classList.remove('active'); });
    });
}

// ========== CAR CARD ==========
function renderCarCard(car) {
    const isLiked = State.isLiked(car.id);
    const likes = State.getLikes(car.id);
    return `
        <div class="car-card" data-id="${car.id}">
            <div class="car-card-image" data-view="${car.id}">
                <img src="${car.image}" alt="${escapeHtml(car.brand + ' ' + car.model)}" loading="lazy"
                     onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'">
                <span class="car-card-badge">${escapeHtml(car.category)}</span>
                <button class="car-card-like ${isLiked ? 'liked' : ''}" data-like="${car.id}" aria-label="Like">
                    <span class="like-heart">${isLiked ? '♥' : '♡'}</span>
                    <span class="like-count">${likes}</span>
                </button>
            </div>
            <div class="car-card-body">
                <span class="car-card-brand">${escapeHtml(car.brand)}</span>
                <h3 class="car-card-model">${escapeHtml(car.model)}</h3>
                <div class="car-card-specs">
                    <span class="car-card-spec"><span class="car-card-spec-icon">⚡</span>${car.horsepower} HP</span>
                    <span class="car-card-spec"><span class="car-card-spec-icon">⛽</span>${escapeHtml(car.fuel)}</span>
                    <span class="car-card-spec"><span class="car-card-spec-icon">📅</span>${car.year}</span>
                </div>
                <div class="car-card-footer">
                    <span class="car-card-price">${formatPrice(car.price)}</span>
                    <div class="car-card-actions">
                        <button class="btn btn-outline" data-view="${car.id}">View</button>
                        <button class="btn btn-primary" data-add-cart="${car.id}">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>`;
}

// ========== GLOBAL EVENTS ==========
function initGlobalEvents() {
    document.addEventListener('click', (e) => {
        const addCart = e.target.closest('[data-add-cart]');
        if (addCart) { State.addToCart(addCart.getAttribute('data-add-cart')); showToast('Added to cart!'); return; }

        const viewTarget = e.target.closest('[data-view]');
        if (viewTarget) { window.location.href = 'details.html?id=' + viewTarget.getAttribute('data-view'); return; }

        const likeTarget = e.target.closest('[data-like]');
        if (likeTarget) {
            e.stopPropagation();
            const carId = likeTarget.getAttribute('data-like');
            State.toggleLike(carId);
            const isLiked = State.isLiked(carId);
            likeTarget.classList.toggle('liked', isLiked);
            likeTarget.querySelector('.like-heart').textContent = isLiked ? '♥' : '♡';
            likeTarget.querySelector('.like-count').textContent = State.getLikes(carId);
            return;
        }
    });
}

function showToast(message) {
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--primary);color:#fff;padding:14px 24px;border-radius:var(--radius-md);font-weight:600;font-size:0.9rem;z-index:9999;box-shadow:var(--shadow-lg);animation:fadeInUp 0.3s ease;';
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateY(10px)'; toast.style.transition = '0.3s ease'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ========== HOME PAGE ==========
function initHomePage() {
    if (!document.getElementById('featuredGrid')) return;

    const brands = [...new Set(CARS.map(c => c.brand))].sort();
    const searchBrand = document.getElementById('searchBrand');
    if (searchBrand) brands.forEach(b => { const opt = document.createElement('option'); opt.value = b; opt.textContent = b; searchBrand.appendChild(opt); });

    const featured = CARS.filter(c => ['porsche-911-2025', 'tesla-model-s-2025', 'lamborghini-huracan-2024', 'ferrari-f8-2024'].includes(c.id));
    const featuredGrid = document.getElementById('featuredGrid');
    if (featuredGrid) featuredGrid.innerHTML = featured.map(renderCarCard).join('');

    const categories = ['Sports', 'Luxury', 'Electric', 'SUV', 'Coupe', 'Sedan'];
    categories.forEach(cat => {
        const el = document.getElementById('cat' + cat);
        if (el) { const count = CARS.filter(c => c.category === cat || c.type === cat).length; el.textContent = count + ' cars'; }
    });

    document.getElementById('smartSearchBtn')?.addEventListener('click', () => {
        const brand = document.getElementById('searchBrand')?.value || '';
        const model = document.getElementById('searchModel')?.value || '';
        const price = document.getElementById('searchPrice')?.value || '';
        const type = document.getElementById('searchType')?.value || '';
        const params = new URLSearchParams();
        if (brand) params.set('brand', brand);
        if (model) params.set('search', model);
        if (price) params.set('maxPrice', price);
        if (type) params.set('category', type);
        window.location.href = 'inventory.html?' + params.toString();
    });

    initDNAQuiz();

    const mostLiked = [...CARS].sort((a, b) => State.getLikes(b.id) - State.getLikes(a.id)).slice(0, 4);
    const mostLikedGrid = document.getElementById('mostLikedGrid');
    if (mostLikedGrid) mostLikedGrid.innerHTML = mostLiked.map(renderCarCard).join('');
}

// ========== DNA QUIZ ==========
const DNA_QUESTIONS = [
    { question: 'What driving style do you prefer?', options: [{ label: '🏎 Thrilling & Fast', value: 'sport' }, { label: '✨ Smooth & Comfortable', value: 'luxury' }, { label: '⚡ Efficient & Modern', value: 'electric' }, { label: '👨‍‍👧 Practical & Spacious', value: 'family' }] },
    { question: 'What\'s your budget range?', options: [{ label: 'Under $75,000', value: 'budget' }, { label: '$75,000 – $150,000', value: 'mid' }, { label: '$150,000 – $300,000', value: 'premium' }, { label: 'Over $300,000', value: 'ultra' }] },
    { question: 'What fuel type interests you?', options: [{ label: '⚡ Electric', value: 'Electric' }, { label: '🔄 Hybrid', value: 'Hybrid' }, { label: '⛽ Gasoline', value: 'Gasoline' }, { label: '🤷 No Preference', value: 'any' }] },
    { question: 'What vehicle type suits you?', options: [{ label: '💎 Luxury', value: 'Luxury' }, { label: '🏎 Sports', value: 'Sports' }, { label: '👨‍👩‍👧 Family / SUV', value: 'SUV' }, { label: '🏙 City / Sedan', value: 'Sedan' }] }
];
let dnaState = { current: 0, answers: [] };

function initDNAQuiz() {
    const quiz = document.getElementById('dnaQuiz');
    if (!quiz) return;
    renderDNAQuestion();
    document.getElementById('dnaNext')?.addEventListener('click', () => {
        if (dnaState.current < DNA_QUESTIONS.length - 1) { dnaState.current++; renderDNAQuestion(); } else { showDNAResults(); }
    });
    document.getElementById('dnaPrev')?.addEventListener('click', () => { if (dnaState.current > 0) { dnaState.current--; renderDNAQuestion(); } });
    document.getElementById('dnaRestart')?.addEventListener('click', () => { dnaState = { current: 0, answers: [] }; document.getElementById('dnaQuiz').style.display = ''; document.getElementById('dnaResults').style.display = 'none'; renderDNAQuestion(); });
}

function renderDNAQuestion() {
    const q = DNA_QUESTIONS[dnaState.current];
    document.getElementById('dnaQuestionText').textContent = q.question;
    document.getElementById('dnaProgressText').textContent = `${dnaState.current + 1} / ${DNA_QUESTIONS.length}`;
    const progressPercent = ((dnaState.current + 1) / DNA_QUESTIONS.length) * 100;
    const bar = document.getElementById('dnaProgressBar');
    if (bar) { bar.style.position = 'relative'; bar.innerHTML = `<div style="position:absolute;left:0;top:0;height:100%;width:${progressPercent}%;background:var(--accent-gradient);border-radius:4px;transition:width 0.4s ease;"></div>`; }
    const optionsContainer = document.getElementById('dnaOptions');
    optionsContainer.innerHTML = q.options.map(opt => `<div class="dna-option ${dnaState.answers[dnaState.current] === opt.value ? 'selected' : ''}" data-dna-value="${opt.value}">${escapeHtml(opt.label)}</div>`).join('');
    optionsContainer.querySelectorAll('.dna-option').forEach(opt => {
        opt.addEventListener('click', () => { optionsContainer.querySelectorAll('.dna-option').forEach(o => o.classList.remove('selected')); opt.classList.add('selected'); dnaState.answers[dnaState.current] = opt.getAttribute('data-dna-value'); });
    });
    document.getElementById('dnaPrev').disabled = dnaState.current === 0;
    document.getElementById('dnaNext').textContent = dnaState.current === DNA_QUESTIONS.length - 1 ? 'See Results →' : 'Next →';
}

function showDNAResults() {
    const answers = dnaState.answers;
    if (answers.length < DNA_QUESTIONS.length || answers.some(a => !a)) { showToast('Please answer all questions'); return; }
    const [style, budget, fuel, type] = answers;
    const scored = CARS.map(car => {
        let score = 0;
        if (car.style === style) score += 3;
        if (budget === 'budget' && car.price < 75000) score += 3;
        else if (budget === 'mid' && car.price >= 75000 && car.price < 150000) score += 3;
        else if (budget === 'premium' && car.price >= 150000 && car.price < 300000) score += 3;
        else if (budget === 'ultra' && car.price >= 300000) score += 3;
        else score += 1;
        if (fuel === 'any') score += 2; else if (car.fuel === fuel) score += 3;
        if (car.category === type || car.type === type) score += 3;
        return { car, score };
    });
    scored.sort((a, b) => b.score - a.score);
    const top3 = scored.slice(0, 3).map(s => s.car);
    document.getElementById('dnaQuiz').style.display = 'none';
    document.getElementById('dnaResults').style.display = '';
    document.getElementById('dnaResultsGrid').innerHTML = top3.map(car => `
        <div class="car-card" data-id="${car.id}">
            <div class="car-card-image" data-view="${car.id}">
                <img src="${car.image}" alt="${escapeHtml(car.model)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'">
                <span class="car-card-badge">${escapeHtml(car.category)}</span>
            </div>
            <div class="car-card-body">
                <span class="car-card-brand">${escapeHtml(car.brand)}</span>
                <h3 class="car-card-model">${escapeHtml(car.model)}</h3>
                <div class="car-card-specs"><span class="car-card-spec"> ${car.horsepower} HP</span><span class="car-card-spec">⛽ ${escapeHtml(car.fuel)}</span></div>
                <div class="car-card-footer"><span class="car-card-price">${formatPrice(car.price)}</span><div class="car-card-actions"><button class="btn btn-outline" data-view="${car.id}">View Details</button></div></div>
            </div>
        </div>`).join('');
}

// ========== INVENTORY PAGE ==========
function initInventoryPage() {
    if (!document.getElementById('inventoryGrid')) return;
    const brands = [...new Set(CARS.map(c => c.brand))].sort();
    const filterBrand = document.getElementById('filterBrand');
    if (filterBrand) brands.forEach(b => { const opt = document.createElement('option'); opt.value = b; opt.textContent = b; filterBrand.appendChild(opt); });

    const params = new URLSearchParams(window.location.search);
    if (params.get('category')) { const catSelect = document.getElementById('filterCategory'); if (catSelect) catSelect.value = params.get('category'); }
    if (params.get('brand')) { const brandSelect = document.getElementById('filterBrand'); if (brandSelect) brandSelect.value = params.get('brand'); }
    if (params.get('search')) { const searchInput = document.getElementById('filterSearch'); if (searchInput) searchInput.value = params.get('search'); }
    if (params.get('maxPrice')) { const priceInput = document.getElementById('filterMaxPrice'); if (priceInput) priceInput.value = params.get('maxPrice'); }

    ['filterSearch', 'filterBrand', 'filterCategory', 'filterFuel', 'filterTransmission', 'filterMinPrice', 'filterMaxPrice', 'filterSort'].forEach(id => {
        const el = document.getElementById(id);
        if (el) { el.addEventListener('input', applyFilters); el.addEventListener('change', applyFilters); }
    });
    document.getElementById('clearFilters')?.addEventListener('click', clearAllFilters);
    document.getElementById('emptyClearFilters')?.addEventListener('click', clearAllFilters);
    document.getElementById('filterToggleMobile')?.addEventListener('click', () => { document.getElementById('filtersSidebar')?.classList.toggle('active'); });
    applyFilters();
}

function applyFilters() {
    const search = (document.getElementById('filterSearch')?.value || '').toLowerCase();
    const brand = document.getElementById('filterBrand')?.value || '';
    const category = document.getElementById('filterCategory')?.value || '';
    const fuel = document.getElementById('filterFuel')?.value || '';
    const transmission = document.getElementById('filterTransmission')?.value || '';
    const minPrice = parseInt(document.getElementById('filterMinPrice')?.value) || 0;
    const maxPrice = parseInt(document.getElementById('filterMaxPrice')?.value) || Infinity;
    const sort = document.getElementById('filterSort')?.value || 'default';

    let filtered = CARS.filter(car => {
        if (search && !(`${car.brand} ${car.model}`.toLowerCase().includes(search))) return false;
        if (brand && car.brand !== brand) return false;
        if (category && car.category !== category && car.type !== category) return false;
        if (fuel && car.fuel !== fuel) return false;
        if (transmission && car.transmission !== transmission) return false;
        if (car.price < minPrice) return false;
        if (car.price > maxPrice) return false;
        return true;
    });

    switch (sort) {
        case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
        case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
        case 'year-desc': filtered.sort((a, b) => b.year - a.year); break;
        case 'year-asc': filtered.sort((a, b) => a.year - b.year); break;
        case 'hp-desc': filtered.sort((a, b) => b.horsepower - a.horsepower); break;
        case 'likes-desc': filtered.sort((a, b) => State.getLikes(b.id) - State.getLikes(a.id)); break;
    }

    const grid = document.getElementById('inventoryGrid');
    const emptyState = document.getElementById('emptyState');
    const resultsCount = document.getElementById('resultsCount');
    if (grid) {
        if (filtered.length === 0) { grid.style.display = 'none'; if (emptyState) emptyState.style.display = ''; }
        else { grid.style.display = ''; if (emptyState) emptyState.style.display = 'none'; grid.innerHTML = filtered.map(renderCarCard).join(''); }
    }
    if (resultsCount) resultsCount.textContent = `${filtered.length} vehicle${filtered.length !== 1 ? 's' : ''} found`;
}

function clearAllFilters() {
    ['filterSearch', 'filterMinPrice', 'filterMaxPrice'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    ['filterBrand', 'filterCategory', 'filterFuel', 'filterTransmission', 'filterSort'].forEach(id => { const el = document.getElementById(id); if (el) el.selectedIndex = 0; });
    applyFilters();
}

// ========== DETAILS PAGE ==========
let currentImageIndex = 0;
let currentCarImages = [];

function initDetailsPage() {
    if (!document.getElementById('detailsContent')) return;
    const params = new URLSearchParams(window.location.search);
    const carId = params.get('id');
    const car = getCarById(carId);

    if (!car) { document.getElementById('detailsError').style.display = ''; document.getElementById('detailsContent').style.display = 'none'; return; }

    document.title = `${car.brand} ${car.model} — CarMarket 2026`;
    currentCarImages = car.images && car.images.length > 0 ? car.images : [car.image];
    currentImageIndex = 0;

    updateDetailsImage(car);

    document.getElementById('detailsCategory').textContent = car.category;
    document.getElementById('detailsFuel').textContent = car.fuel;
    document.getElementById('detailsTitle').textContent = `${car.brand} ${car.model}`;
    document.getElementById('detailsYear').textContent = `Year: ${car.year}`;
    document.getElementById('detailsPrice').textContent = formatPrice(car.price);
    document.getElementById('detailsDescription').textContent = car.description;
    document.getElementById('specEngine').textContent = car.engine;
    document.getElementById('specHP').textContent = car.horsepower + ' HP';
    document.getElementById('specTransmission').textContent = car.transmission;
    document.getElementById('specDrivetrain').textContent = car.drivetrain;
    document.getElementById('specMileage').textContent = car.mileage;
    document.getElementById('specFuel').textContent = car.fuel;
    document.getElementById('specExterior').textContent = car.color;
    document.getElementById('specInterior').textContent = car.interior;

    const likeBtn = document.getElementById('detailsLike');
    const isLiked = State.isLiked(car.id);
    likeBtn.classList.toggle('liked', isLiked);
    likeBtn.querySelector('.like-heart').textContent = isLiked ? '♥' : '♡';
    document.getElementById('detailsLikeCount').textContent = State.getLikes(car.id);

    likeBtn.addEventListener('click', () => {
        State.toggleLike(car.id);
        const nowLiked = State.isLiked(car.id);
        likeBtn.classList.toggle('liked', nowLiked);
        likeBtn.querySelector('.like-heart').textContent = nowLiked ? '♥' : '♡';
        document.getElementById('detailsLikeCount').textContent = State.getLikes(car.id);
    });

    // Thumbnails
    const thumbsContainer = document.getElementById('detailsThumbnails');
    thumbsContainer.innerHTML = currentCarImages.map((img, i) => `
        <img src="${img}" alt="Thumbnail ${i + 1}" class="${i === 0 ? 'active' : ''}" loading="lazy" data-thumb-index="${i}"
             onerror="this.style.display='none'">
    `).join('');

    thumbsContainer.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            const idx = parseInt(img.getAttribute('data-thumb-index'));
            currentImageIndex = idx;
            updateDetailsImage(car);
            thumbsContainer.querySelectorAll('img').forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        });
    });

    // Image navigation
    document.getElementById('imgPrev')?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentCarImages.length) % currentCarImages.length;
        updateDetailsImage(car);
        updateThumbActive();
    });
    document.getElementById('imgNext')?.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentCarImages.length;
        updateDetailsImage(car);
        updateThumbActive();
    });

    document.getElementById('detailsAddToCart').addEventListener('click', () => { State.addToCart(car.id); showToast(`${car.brand} ${car.model} added to cart!`); });
    document.getElementById('detailsCompare').addEventListener('click', () => {
        const added = State.addToCompare(car.id);
        if (added) showToast('Added to comparison!');
        else if (State.compare.includes(car.id)) showToast('Already in comparison');
        else showToast('Maximum 3 cars for comparison');
    });

    const similar = CARS.filter(c => c.id !== car.id && (c.category === car.category || c.type === car.type)).slice(0, 4);
    if (similar.length > 0) { document.getElementById('similarSection').style.display = ''; document.getElementById('similarGrid').innerHTML = similar.map(renderCarCard).join(''); }

    document.getElementById('detailsContent').style.display = '';
}

function updateDetailsImage(car) {
    const mainImg = document.getElementById('detailsMainImg');
    mainImg.src = currentCarImages[currentImageIndex];
    mainImg.alt = `${car.brand} ${car.model}`;
    mainImg.onerror = function() { this.src = 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'; };
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${currentCarImages.length}`;
}

function updateThumbActive() {
    const thumbs = document.querySelectorAll('#detailsThumbnails img');
    thumbs.forEach((img, i) => { img.classList.toggle('active', i === currentImageIndex); });
}

// ========== COMPARE PAGE ==========
function initComparePage() {
    if (!document.getElementById('compareTable')) return;
    renderCompare();
    document.getElementById('clearCompare')?.addEventListener('click', () => { State.compare = []; State.save('cm_compare', State.compare); updateCompareUI(); renderCompare(); });
    document.getElementById('addMoreCars')?.addEventListener('click', openAddCarModal);
    document.getElementById('modalClose')?.addEventListener('click', closeAddCarModal);
    document.getElementById('modalOverlay')?.addEventListener('click', closeAddCarModal);
    document.getElementById('modalSearch')?.addEventListener('input', (e) => renderModalCars(e.target.value));
}

function renderCompare() {
    const empty = document.getElementById('compareEmpty');
    const wrapper = document.getElementById('compareTableWrapper');
    const recommendation = document.getElementById('smartRecommendation');
    if (State.compare.length === 0) { if (empty) empty.style.display = ''; if (wrapper) wrapper.style.display = 'none'; if (recommendation) recommendation.style.display = 'none'; return; }
    if (empty) empty.style.display = 'none';
    if (wrapper) wrapper.style.display = '';

    const cars = State.compare.map(id => getCarById(id)).filter(Boolean);
    const cols = cars.length + 1;
    const specs = [
        { label: 'Price', key: 'price', format: (v) => formatPrice(v), best: 'lowest' },
        { label: 'Year', key: 'year', format: (v) => v, best: 'highest' },
        { label: 'Horsepower', key: 'horsepower', format: (v) => v + ' HP', best: 'highest' },
        { label: 'Engine', key: 'engine', format: (v) => v },
        { label: 'Fuel', key: 'fuel', format: (v) => v },
        { label: 'Transmission', key: 'transmission', format: (v) => v },
        { label: 'Drivetrain', key: 'drivetrain', format: (v) => v },
        { label: 'Mileage', key: 'mileage', format: (v) => v },
        { label: 'Category', key: 'category', format: (v) => v },
        { label: 'Exterior Color', key: 'color', format: (v) => v },
        { label: 'Interior', key: 'interior', format: (v) => v }
    ];
    const gridTemplate = `200px repeat(${cars.length}, 1fr)`;
    let html = '';
    html += `<div class="compare-row header-row" style="grid-template-columns: ${gridTemplate}">`;
    html += `<div class="compare-cell label-cell"></div>`;
    cars.forEach(car => {
        html += `<div class="compare-cell header-cell"><img src="${car.image}" alt="${escapeHtml(car.model)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80'"><div class="compare-car-name">${escapeHtml(car.brand)} ${escapeHtml(car.model)}</div><div class="compare-car-price">${formatPrice(car.price)}</div><div class="compare-actions"><button class="btn btn-outline" data-view="${car.id}">View</button><button class="btn btn-primary" data-add-cart="${car.id}">Add to Cart</button></div><button class="compare-remove" data-remove-compare="${car.id}">✕ Remove</button></div>`;
    });
    html += '</div>';
    specs.forEach(spec => {
        const values = cars.map(c => c[spec.key]);
        let bestIdx = -1;
        if (spec.best === 'lowest') { const nums = values.map(v => typeof v === 'number' ? v : parseFloat(String(v).replace(/[^0-9.]/g, ''))); bestIdx = nums.indexOf(Math.min(...nums)); }
        else if (spec.best === 'highest') { const nums = values.map(v => typeof v === 'number' ? v : parseFloat(String(v).replace(/[^0-9.]/g, ''))); bestIdx = nums.indexOf(Math.max(...nums)); }
        html += `<div class="compare-row" style="grid-template-columns: ${gridTemplate}"><div class="compare-cell label-cell">${spec.label}</div>`;
        cars.forEach((car, i) => { const val = spec.format(car[spec.key]); let cls = 'compare-value'; if (i === bestIdx) cls += ' best'; html += `<div class="compare-cell"><span class="${cls}">${escapeHtml(String(val))}</span></div>`; });
        html += '</div>';
    });
    document.getElementById('compareTable').innerHTML = html;
    document.querySelectorAll('[data-remove-compare]').forEach(btn => { btn.addEventListener('click', () => { State.removeFromCompare(btn.getAttribute('data-remove-compare')); renderCompare(); }); });
    if (cars.length >= 2) renderSmartRecommendation(cars);
}

function renderSmartRecommendation(cars) {
    const recommendation = document.getElementById('smartRecommendation');
    const content = document.getElementById('recommendationContent');
    if (!recommendation || !content) return;
    recommendation.style.display = '';
    const cheapest = cars.reduce((a, b) => a.price < b.price ? a : b);
    const mostPowerful = cars.reduce((a, b) => a.horsepower > b.horsepower ? a : b);
    const newest = cars.reduce((a, b) => a.year > b.year ? a : b);
    const electric = cars.find(c => c.fuel === 'Electric');
    let html = '';
    html += `<div class="recommendation-item"><div class="rec-label">💰 Most Affordable</div><div class="rec-value">${escapeHtml(cheapest.brand)} ${escapeHtml(cheapest.model)} — ${formatPrice(cheapest.price)}</div></div>`;
    html += `<div class="recommendation-item"><div class="rec-label">🏆 Most Powerful</div><div class="rec-value">${escapeHtml(mostPowerful.brand)} ${escapeHtml(mostPowerful.model)} — ${mostPowerful.horsepower} HP</div></div>`;
    html += `<div class="recommendation-item"><div class="rec-label">📅 Newest</div><div class="rec-value">${escapeHtml(newest.brand)} ${escapeHtml(newest.model)} — ${newest.year}</div></div>`;
    if (electric) html += `<div class="recommendation-item"><div class="rec-label">⚡ Electric Option</div><div class="rec-value">${escapeHtml(electric.brand)} ${escapeHtml(electric.model)}</div></div>`;
    content.innerHTML = html;
}

function openAddCarModal() { const modal = document.getElementById('addCarModal'); if (modal) { modal.classList.add('active'); renderModalCars(''); document.getElementById('modalSearch').value = ''; } }
function closeAddCarModal() { const modal = document.getElementById('addCarModal'); if (modal) modal.classList.remove('active'); }

function renderModalCars(search) {
    const grid = document.getElementById('modalCarGrid');
    if (!grid) return;
    const searchLower = search.toLowerCase();
    const available = CARS.filter(c => !State.compare.includes(c.id) && (search === '' || `${c.brand} ${c.model}`.toLowerCase().includes(searchLower)));
    grid.innerHTML = available.map(car => `<div class="modal-car-item" data-modal-add="${car.id}"><img src="${car.image}" alt="${escapeHtml(car.model)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80'"><div class="modal-car-name">${escapeHtml(car.brand)} ${escapeHtml(car.model)}</div><div class="modal-car-price">${formatPrice(car.price)}</div></div>`).join('');
    grid.querySelectorAll('[data-modal-add]').forEach(item => {
        item.addEventListener('click', () => {
            const carId = item.getAttribute('data-modal-add');
            const added = State.addToCompare(carId);
            if (added) { showToast('Added to comparison!'); renderCompare(); if (State.compare.length >= 3) closeAddCarModal(); else renderModalCars(document.getElementById('modalSearch')?.value || ''); }
        });
    });
    if (available.length === 0) grid.innerHTML = '<p style="text-align:center;color:var(--text-secondary);grid-column:1/-1;padding:40px;">No more cars available to compare.</p>';
}

// ========== PROFILE PAGE ==========
function initProfilePage() {
    if (!document.querySelector('.profile-tabs')) return;
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById('panel-' + tab.getAttribute('data-tab'))?.classList.add('active');
        });
    });
    loadProfile();
    document.getElementById('saveProfile')?.addEventListener('click', saveProfile);
    document.getElementById('cancelProfile')?.addEventListener('click', loadProfile);
    renderCart();
    document.getElementById('proceedCheckout')?.addEventListener('click', () => {
        document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-tab="checkout"]').classList.add('active');
        document.getElementById('panel-checkout').classList.add('active');
        renderCheckout();
    });
    renderCheckout();
    renderOrders();
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const cardForm = document.getElementById('cardForm');
            const isCard = radio.value === 'card' || radio.value === 'uzcard' || radio.value === 'humo';
            if (cardForm) cardForm.style.display = isCard ? '' : 'none';
        });
    });
    document.getElementById('cardNumber')?.addEventListener('input', (e) => { let val = e.target.value.replace(/\D/g, '').substring(0, 16); val = val.replace(/(.{4})/g, '$1 ').trim(); e.target.value = val; });
    document.getElementById('cardExpiry')?.addEventListener('input', (e) => { let val = e.target.value.replace(/\D/g, '').substring(0, 4); if (val.length >= 2) val = val.substring(0, 2) + '/' + val.substring(2); e.target.value = val; });
    document.getElementById('placeOrder')?.addEventListener('click', placeOrder);
    document.getElementById('orderConfirmClose')?.addEventListener('click', () => { document.getElementById('orderConfirmModal').classList.remove('active'); });
    document.getElementById('viewOrdersBtn')?.addEventListener('click', () => {
        document.getElementById('orderConfirmModal').classList.remove('active');
        document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.profile-panel').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-tab="orders"]').classList.add('active');
        document.getElementById('panel-orders').classList.add('active');
        renderOrders();
    });
}

function loadProfile() {
    const p = State.profile;
    const nameEl = document.getElementById('profileName'); const emailEl = document.getElementById('profileEmail'); const phoneEl = document.getElementById('profilePhone'); const addressEl = document.getElementById('profileAddress'); const initialsEl = document.getElementById('profileInitials');
    if (nameEl) nameEl.value = p.name || ''; if (emailEl) emailEl.value = p.email || ''; if (phoneEl) phoneEl.value = p.phone || ''; if (addressEl) addressEl.value = p.address || '';
    if (initialsEl) { const name = p.name || 'User'; initialsEl.textContent = name.split(' ').map(w => w[0]).join('').toUpperCase().substring(0, 2); }
}
function saveProfile() {
    State.profile = { name: document.getElementById('profileName')?.value || '', email: document.getElementById('profileEmail')?.value || '', phone: document.getElementById('profilePhone')?.value || '', address: document.getElementById('profileAddress')?.value || '' };
    State.save('cm_profile', State.profile); loadProfile(); showToast('Profile saved!');
}

function renderCart() {
    const empty = document.getElementById('cartEmpty'); const content = document.getElementById('cartContent');
    if (State.cart.length === 0) { if (empty) empty.style.display = ''; if (content) content.style.display = 'none'; return; }
    if (empty) empty.style.display = 'none'; if (content) content.style.display = '';
    const itemsContainer = document.getElementById('cartItems');
    if (!itemsContainer) return;
    itemsContainer.innerHTML = State.cart.map(item => {
        const car = getCarById(item.id); if (!car) return '';
        return `<div class="cart-item"><div class="cart-item-img"><img src="${car.image}" alt="${escapeHtml(car.model)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&q=80'"></div><div class="cart-item-info"><div class="cart-item-name">${escapeHtml(car.brand)} ${escapeHtml(car.model)}</div><div class="cart-item-meta">${car.year} · ${escapeHtml(car.fuel)} · ${formatPrice(car.price)} each</div></div><div class="cart-item-qty"><button data-qty-minus="${car.id}">−</button><span>${item.qty}</span><button data-qty-plus="${car.id}">+</button></div><div class="cart-item-price">${formatPrice(car.price * item.qty)}</div><button class="cart-item-remove" data-remove-cart="${car.id}">✕</button></div>`;
    }).join('');
    itemsContainer.querySelectorAll('[data-qty-minus]').forEach(btn => { btn.addEventListener('click', () => { const id = btn.getAttribute('data-qty-minus'); const item = State.cart.find(i => i.id === id); if (item) State.updateCartQty(id, item.qty - 1); renderCart(); renderCheckout(); }); });
    itemsContainer.querySelectorAll('[data-qty-plus]').forEach(btn => { btn.addEventListener('click', () => { const id = btn.getAttribute('data-qty-plus'); const item = State.cart.find(i => i.id === id); if (item) State.updateCartQty(id, item.qty + 1); renderCart(); renderCheckout(); }); });
    itemsContainer.querySelectorAll('[data-remove-cart]').forEach(btn => { btn.addEventListener('click', () => { State.removeFromCart(btn.getAttribute('data-remove-cart')); renderCart(); renderCheckout(); }); });
    const subtotal = State.getCartTotal(); const serviceFee = subtotal > 0 ? 500 : 0; const total = subtotal + serviceFee;
    const subtotalEl = document.getElementById('cartSubtotal'); const feeEl = document.getElementById('cartServiceFee'); const totalEl = document.getElementById('cartTotal');
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal); if (feeEl) feeEl.textContent = formatPrice(serviceFee); if (totalEl) totalEl.textContent = formatPrice(total);
}

function renderCheckout() {
    const empty = document.getElementById('checkoutEmpty'); const content = document.getElementById('checkoutContent');
    if (State.cart.length === 0) { if (empty) empty.style.display = ''; if (content) content.style.display = 'none'; return; }
    if (empty) empty.style.display = 'none'; if (content) content.style.display = '';
    const p = State.profile; const nameEl = document.getElementById('checkoutName'); const emailEl = document.getElementById('checkoutEmail'); const addressEl = document.getElementById('checkoutAddress');
    if (nameEl && !nameEl.value && p.name) nameEl.value = p.name; if (emailEl && !emailEl.value && p.email) emailEl.value = p.email; if (addressEl && !addressEl.value && p.address) addressEl.value = p.address;
    const itemsContainer = document.getElementById('checkoutItems');
    if (itemsContainer) itemsContainer.innerHTML = State.cart.map(item => { const car = getCarById(item.id); if (!car) return ''; return `<div class="checkout-item"><span class="checkout-item-name">${escapeHtml(car.brand)} ${escapeHtml(car.model)} × ${item.qty}</span><span class="checkout-item-price">${formatPrice(car.price * item.qty)}</span></div>`; }).join('');
    const subtotal = State.getCartTotal(); const fee = 500; const total = subtotal + fee;
    const subtotalEl = document.getElementById('checkoutSubtotal'); const feeEl = document.getElementById('checkoutFee'); const totalEl = document.getElementById('checkoutTotal');
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal); if (feeEl) feeEl.textContent = formatPrice(fee); if (totalEl) totalEl.textContent = formatPrice(total);
}

function placeOrder() {
    if (State.cart.length === 0) { showToast('Cart is empty'); return; }
    const errors = [];
    const name = document.getElementById('checkoutName')?.value?.trim(); const email = document.getElementById('checkoutEmail')?.value?.trim(); const address = document.getElementById('checkoutAddress')?.value?.trim();
    if (!name) errors.push('Full name is required'); if (!email) errors.push('Email is required'); else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Invalid email format'); if (!address) errors.push('Address is required');
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value; const isCard = paymentMethod === 'card' || paymentMethod === 'uzcard' || paymentMethod === 'humo';
    if (isCard) {
        const cardNumber = document.getElementById('cardNumber')?.value?.replace(/\s/g, '') || ''; const cardExpiry = document.getElementById('cardExpiry')?.value || ''; const cardCVV = document.getElementById('cardCVV')?.value || '';
        if (!cardNumber) errors.push('Card number is required'); else if (cardNumber.length < 13 || cardNumber.length > 16) errors.push('Invalid card number');
        if (!cardExpiry) errors.push('Expiry date is required'); else if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) errors.push('Expiry must be MM/YY format'); else { const [mm, yy] = cardExpiry.split('/').map(Number); if (mm < 1 || mm > 12) errors.push('Invalid expiry month'); }
        if (!cardCVV) errors.push('CVV is required'); else if (cardCVV.length < 3 || cardCVV.length > 4) errors.push('CVV must be 3-4 digits');
    }
    const errorsContainer = document.getElementById('checkoutErrors');
    if (errors.length > 0) { if (errorsContainer) errorsContainer.innerHTML = errors.map(e => `<div class="error-msg">⚠ ${escapeHtml(e)}</div>`).join(''); return; }
    if (errorsContainer) errorsContainer.innerHTML = '';
    const btn = document.getElementById('placeOrder'); const btnText = btn?.querySelector('.btn-text'); const btnLoading = btn?.querySelector('.btn-loading');
    if (btnText) btnText.style.display = 'none'; if (btnLoading) btnLoading.style.display = ''; btn.disabled = true;
    setTimeout(() => {
        const subtotal = State.getCartTotal(); const orderId = 'CM-' + Date.now().toString(36).toUpperCase();
        const order = { id: orderId, items: State.cart.map(item => { const car = getCarById(item.id); return { id: item.id, name: car ? `${car.brand} ${car.model}` : 'Unknown', price: car ? car.price : 0, qty: item.qty }; }), subtotal: subtotal, serviceFee: 500, total: subtotal + 500, date: new Date().toISOString(), status: 'Demo Order Created', paymentMethod: paymentMethod };
        State.addOrder(order);
        const confirmDetails = document.getElementById('orderConfirmDetails');
        if (confirmDetails) confirmDetails.innerHTML = `<div class="confirm-icon">✅</div><h4>Demo Order Created Successfully</h4><p><strong>Order ID:</strong> ${orderId}</p><p><strong>Items:</strong> ${order.items.length}</p><p><strong>Total:</strong> ${formatPrice(order.total)}</p><p><strong>Date:</strong> ${new Date(order.date).toLocaleDateString()}</p><p style="color:var(--warning);margin-top:12px;">⚠️ This is a demo order. No real payment was processed.</p>`;
        document.getElementById('orderConfirmModal')?.classList.add('active');
        State.clearCart(); renderCart(); renderCheckout();
        if (btnText) btnText.style.display = ''; if (btnLoading) btnLoading.style.display = 'none'; btn.disabled = false;
    }, 2000);
}

function renderOrders() {
    const empty = document.getElementById('ordersEmpty'); const list = document.getElementById('ordersList');
    if (State.orders.length === 0) { if (empty) empty.style.display = ''; if (list) list.innerHTML = ''; return; }
    if (empty) empty.style.display = 'none'; if (!list) return;
    list.innerHTML = State.orders.map(order => `<div class="order-card"><div class="order-header"><span class="order-id">Order ${escapeHtml(order.id)}</span><span class="order-status">${escapeHtml(order.status)}</span></div><div class="order-items">${order.items.map(item => `<div class="order-item"><span>${escapeHtml(item.name)} × ${item.qty}</span><span>${formatPrice(item.price * item.qty)}</span></div>`).join('')}</div><div class="order-total"><span>Total</span><span>${formatPrice(order.total)}</span></div><div class="order-date">${new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div></div>`).join('');
}

// ========== INIT ==========
function init() {
    State.init(); initTheme(); initHeader(); initGlobalEvents(); updateCartUI(); updateCompareUI();
    initHomePage(); initInventoryPage(); initDetailsPage(); initComparePage(); initProfilePage();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();