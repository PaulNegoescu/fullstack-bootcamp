// Mock user data as from a JSON API
const users = [
  {
    id: 1,
    firstName: "Maya",
    lastName: "Jackson",
    email: "maya.jackson@example.com",
    age: 28,
    heightCm: 167,
    weightKg: 62,
    phones: {
      mobile: "+1-415-555-0182",
      home: "+1-415-555-0199",
      work: "+1-415-555-0175"
    },
    address: {
      street: "470 Hayes St",
      city: "San Francisco",
      state: "CA",
      postalCode: "94102",
      country: "USA"
    }
  },
  {
    id: 2,
    firstName: "Noah",
    lastName: "Kline",
    email: "noah.kline@example.com",
    age: 36,
    heightCm: 183,
    weightKg: 86,
    phones: {
      mobile: "+1-206-555-0134",
      home: "+1-206-555-0127",
      work: "+1-206-555-0156"
    },
    address: {
      street: "119 2nd Ave",
      city: "Seattle",
      state: "WA",
      postalCode: "98104",
      country: "USA"
    }
  },
  {
    id: 3,
    firstName: "Aisha",
    lastName: "Park",
    email: "aisha.park@example.com",
    age: 42,
    heightCm: 160,
    weightKg: 70,
    phones: {
      mobile: "+44-20-5555-4321",
      home: "+44-20-5555-4322",
      work: "+44-20-5555-4323"
    },
    address: {
      street: "28 Kingsway",
      city: "London",
      state: "",
      postalCode: "WC2B 6NH",
      country: "UK"
    }
  },
  {
    id: 4,
    firstName: "Ethan",
    lastName: "Nguyen",
    email: "ethan.nguyen@example.com",
    age: 31,
    heightCm: 176,
    weightKg: 78,
    phones: {
      mobile: "+61-2-5550-1155",
      home: "+61-2-5550-1188",
      work: "+61-2-5550-1100"
    },
    address: {
      street: "73 Campbell St",
      city: "Sydney",
      state: "NSW",
      postalCode: "2000",
      country: "Australia"
    }
  },
  {
    id: 5,
    firstName: "Sophia",
    lastName: "Martinez",
    email: "sophia.martinez@example.com",
    age: 26,
    heightCm: 169,
    weightKg: 58,
    phones: {
      mobile: "+1-305-555-0145",
      home: "+1-305-555-0112",
      work: "+1-305-555-0160"
    },
    address: {
      street: "202 Ocean Dr",
      city: "Miami",
      state: "FL",
      postalCode: "33139",
      country: "USA"
    }
  },
  {
    id: 6,
    firstName: "Luca",
    lastName: "Rossi",
    email: "luca.rossi@example.com",
    age: 39,
    heightCm: 182,
    weightKg: 79,
    phones: {
      mobile: "+39-06-5555-0033",
      home: "+39-06-5555-0034",
      work: "+39-06-5555-0035"
    },
    address: {
      street: "Via dei Condotti 45",
      city: "Rome",
      state: "RM",
      postalCode: "00187",
      country: "Italy"
    }
  },
  {
    id: 7,
    firstName: "Harper",
    lastName: "Kim",
    email: "harper.kim@example.com",
    age: 22,
    heightCm: 165,
    weightKg: 56,
    phones: {
      mobile: "+82-2-555-0191",
      home: "+82-2-555-0192",
      work: "+82-2-555-0193"
    },
    address: {
      street: "16 Itaewon-ro",
      city: "Seoul",
      state: "",
      postalCode: "04349",
      country: "South Korea"
    }
  },
  {
    id: 8,
    firstName: "Amara",
    lastName: "Osei",
    email: "amara.osei@example.com",
    age: 34,
    heightCm: 170,
    weightKg: 65,
    phones: {
      mobile: "+233-30-555-0150",
      home: "+233-30-555-0151",
      work: "+233-30-555-0152"
    },
    address: {
      street: "12 Oxford Street",
      city: "Accra",
      state: "Greater Accra",
      postalCode: "GA-123-4567",
      country: "Ghana"
    }
  },
  {
    id: 9,
    firstName: "Miriam",
    lastName: "Okafor",
    email: "miriam.okafor@example.com",
    age: 45,
    heightCm: 158,
    weightKg: 68,
    phones: {
      mobile: "+234-1-555-0222",
      home: "+234-1-555-0223",
      work: "+234-1-555-0224"
    },
    address: {
      street: "45 Queens Road",
      city: "Lagos",
      state: "Lagos",
      postalCode: "100001",
      country: "Nigeria"
    }
  },
  {
    id: 10,
    firstName: "Raj",
    lastName: "Patel",
    email: "raj.patel@example.com",
    age: 29,
    heightCm: 175,
    weightKg: 72,
    phones: {
      mobile: "+91-22-5555-0987",
      home: "+91-22-5555-0988",
      work: "+91-22-5555-0989"
    },
    address: {
      street: "88 Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
      postalCode: "400002",
      country: "India"
    }
  }
];

export default users;
