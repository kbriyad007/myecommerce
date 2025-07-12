// prisma.ts (in root, alongside prisma folder)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export { prisma };
