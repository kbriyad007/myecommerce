// prisma.ts (in root, alongside prisma folder)
import { PrismaClient } from './lib/generated/prisma';

const prisma = new PrismaClient();

export { prisma };
