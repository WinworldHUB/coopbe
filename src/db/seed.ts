import { roles, societies } from './schema/user';
import { db } from './setup';
const seedSocieties = async () => {
    const societiesData = [
      {
        name: 'Society A',
        address: '123 Main St',
        postcode: 'ABCD123',
      },
      {
        name: 'Society B',
        address: '456 Elm St',
        postcode: 'EFGH456',
      },
      // Add more societies as needed
    ];
  
    
  for (const society of societiesData) {
    await db
      ?.insert(societies)
      .values(society)
      .execute();
  }
  };
  
  // Seed data for roles
  const seedRoles = async () => {
    const rolesData = [
      {
        name: 'Tenant',
        description: 'Occupant of a property in the society',
      },
      {
        name: 'Community Member',
        description: 'Member of the society community',
      },
      {
        name: 'Service Provider',
        description: 'Provider of services to the society',
      },
    ];
  
    for (const role of rolesData) {
      await db
        ?.insert(roles)
        .values(role)
        .execute();
    }
  };
  
  // Execute seed scripts
  const seedDatabase = async () => {
    try {
      await seedSocieties();
      await seedRoles();
      console.log('Seed data inserted successfully!');
    } catch (error) {
      console.error('Error inserting seed data:', error);
    }
  };
  
  // Call the seedDatabase function to populate the tables with seed data
  seedDatabase();
  