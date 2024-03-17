import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & {
    prisma: PrismaClient;
  };
  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }
  prisma = globalWithPrisma.prisma;
}

async function main() {
  const newProject = await prisma.projects.create({
    data: {
      title: 'My Project',
      slug: 'my-project',
      description: 'This is my project',
      image: 'my-project.jpg',
      stacks: 'Node, Express, Prisma',
      is_show: true,
      updated_at: new Date(),
      content: 'This is the content of my project',
      is_featured: false,
    },
  });

  console.log('Created new project: ', newProject);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
