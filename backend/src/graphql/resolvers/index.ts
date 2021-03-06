import path from 'path'
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeResolvers } from '@graphql-tools/merge';

const typesArray = loadFilesSync(path.join(__dirname, './'))

export default mergeResolvers(typesArray);

