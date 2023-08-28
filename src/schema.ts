export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  Date: { input: any; output: any; }
  File: { input: any; output: any; }
  Object: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** Current access control list of the current object. */
export type Acl = {
  __typename?: 'ACL';
  /** Public access control list. */
  public?: Maybe<PublicAcl>;
  /** Access control list for roles. */
  roles?: Maybe<Array<RoleAcl>>;
  /** Access control list for users. */
  users?: Maybe<Array<UserAcl>>;
};

/** Allow to manage access rights. If not provided object will be publicly readable and writable */
export type AclInput = {
  /** Public access control list. */
  public?: InputMaybe<PublicAclInput>;
  /** Access control list for roles. */
  roles?: InputMaybe<Array<RoleAclInput>>;
  /** Access control list for users. */
  users?: InputMaybe<Array<UserAclInput>>;
};

/** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
export type ArrayResult = Element | Ingredient | List | Manufacturer | PortionType | Product | Recipe | Role | Session | User;

/** The ArrayWhereInput input type is used in operations that involve filtering objects by a field of type Array. */
export type ArrayWhereInput = {
  /** This is the containedBy operator to specify a constraint to select the objects where the values of an array field is contained by another specified array. */
  containedBy?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the contains operator to specify a constraint to select the objects where the values of an array field contain all elements of another specified array. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Any']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Any']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Any']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BooleanWhereInput input type is used in operations that involve filtering objects by a field of type Boolean. */
export type BooleanWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The BoxInput type is used to specifiy a box operation on a within geo query. */
export type BoxInput = {
  /** This is the bottom left coordinates of the box. */
  bottomLeft: GeoPointInput;
  /** This is the upper right coordinates of the box. */
  upperRight: GeoPointInput;
};

/** The BytesWhereInput input type is used in operations that involve filtering objects by a field of type Bytes. */
export type BytesWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Bytes']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Bytes']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The CenterSphereInput type is used to specifiy a centerSphere operation on a geoWithin query. */
export type CenterSphereInput = {
  /** This is the center of the sphere. */
  center: GeoPointInput;
  /** This is the radius of the sphere. */
  distance: Scalars['Float']['input'];
};

/** The Class type is used to return the information about an object class. */
export type Class = {
  __typename?: 'Class';
  /** This is the name of the object class. */
  name: Scalars['String']['output'];
  /** These are the schema's fields of the object class. */
  schemaFields: Array<SchemaField>;
};

export type CreateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
  /** These are the schema's fields of the object class. */
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type CreateClassPayload = {
  __typename?: 'CreateClassPayload';
  /** This is the created class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateFileInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the new file to be created and uploaded. */
  upload: Scalars['Upload']['input'];
};

export type CreateFilePayload = {
  __typename?: 'CreateFilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created file info. */
  fileInfo: FileInfo;
};

/** The CreateIngredientFieldsInput input type is used in operations that involve creation of objects in the Ingredient class. */
export type CreateIngredientFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object portion_type. */
  portion_type: Scalars['String']['input'];
  /** This is the object product_id. */
  product_id: Scalars['Object']['input'];
  /** This is the object recipe_id. */
  recipe_id: RecipePointerInput;
};

export type CreateIngredientInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateIngredientFieldsInput>;
};

export type CreateIngredientPayload = {
  __typename?: 'CreateIngredientPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  ingredient: Ingredient;
};

/** The CreateListFieldsInput input type is used in operations that involve creation of objects in the List class. */
export type CreateListFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object adquired_portion. */
  adquired_portion: Scalars['String']['input'];
  /** This is the object adquired_portion_type. */
  adquired_portion_type?: InputMaybe<Scalars['String']['input']>;
  /** This is the object product_id. */
  product_id: Scalars['Object']['input'];
  /** This is the object type. */
  type: Scalars['String']['input'];
  /** This is the object user_id. */
  user_id: UserPointerInput;
};

export type CreateListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateListFieldsInput>;
};

export type CreateListPayload = {
  __typename?: 'CreateListPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  list: List;
};

/** The CreateManufacturerFieldsInput input type is used in operations that involve creation of objects in the Manufacturer class. */
export type CreateManufacturerFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name: Scalars['String']['input'];
};

export type CreateManufacturerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateManufacturerFieldsInput>;
};

export type CreateManufacturerPayload = {
  __typename?: 'CreateManufacturerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  manufacturer: Manufacturer;
};

/** The CreatePortionTypeFieldsInput input type is used in operations that involve creation of objects in the PortionType class. */
export type CreatePortionTypeFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name: Scalars['String']['input'];
};

export type CreatePortionTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreatePortionTypeFieldsInput>;
};

export type CreatePortionTypePayload = {
  __typename?: 'CreatePortionTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  portionType: PortionType;
};

/** The CreateProductFieldsInput input type is used in operations that involve creation of objects in the Product class. */
export type CreateProductFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object manufacturer_id. */
  manufacturer_id: ManufacturerPointerInput;
  /** This is the object name. */
  name: Scalars['String']['input'];
  /** This is the object portion. */
  portion: Scalars['Float']['input'];
  /** This is the object portion_type. */
  portion_type: Scalars['String']['input'];
};

export type CreateProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateProductFieldsInput>;
};

export type CreateProductPayload = {
  __typename?: 'CreateProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  product: Product;
};

/** The CreateRecipeFieldsInput input type is used in operations that involve creation of objects in the Recipe class. */
export type CreateRecipeFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object available. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object complete. */
  complete: Scalars['Boolean']['input'];
  /** This is the object createdby. */
  createdby: UserPointerInput;
  /** This is the object duration. */
  duration: Scalars['Float']['input'];
  /** This is the object name. */
  name: Scalars['String']['input'];
  /** This is the object qt_portion. */
  qt_portion: Scalars['String']['input'];
  /** This is the object steps. */
  steps: Array<InputMaybe<Scalars['Any']['input']>>;
};

export type CreateRecipeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateRecipeFieldsInput>;
};

export type CreateRecipePayload = {
  __typename?: 'CreateRecipePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  recipe: Recipe;
};

/** The CreateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type CreateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateRoleFieldsInput>;
};

export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  role: Role;
};

/** The CreateSessionFieldsInput input type is used in operations that involve creation of objects in the Session class. */
export type CreateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object createdWith. */
  createdWith?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object expiresAt. */
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  /** This is the object installationId. */
  installationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object restricted. */
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object sessionToken. */
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  /** This is the object user. */
  user?: InputMaybe<UserPointerInput>;
};

export type CreateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateSessionFieldsInput>;
};

export type CreateSessionPayload = {
  __typename?: 'CreateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  session: Session;
};

/** The CreateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type CreateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object name. */
  name: Scalars['String']['input'];
  /** This is the object password. */
  password: Scalars['String']['input'];
  /** This is the object username. */
  username: Scalars['String']['input'];
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to create the new object. */
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the created object. */
  user: User;
};

/** The DateWhereInput input type is used in operations that involve filtering objects by a field of type Date. */
export type DateWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Date']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Date']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Date']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

export type DeleteClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
};

export type DeleteClassPayload = {
  __typename?: 'DeleteClassPayload';
  /** This is the deleted class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type DeleteIngredientInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteIngredientPayload = {
  __typename?: 'DeleteIngredientPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  ingredient: Ingredient;
};

export type DeleteListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteListPayload = {
  __typename?: 'DeleteListPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  list: List;
};

export type DeleteManufacturerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteManufacturerPayload = {
  __typename?: 'DeleteManufacturerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  manufacturer: Manufacturer;
};

export type DeletePortionTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeletePortionTypePayload = {
  __typename?: 'DeletePortionTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  portionType: PortionType;
};

export type DeleteProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteProductPayload = {
  __typename?: 'DeleteProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  product: Product;
};

export type DeleteRecipeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteRecipePayload = {
  __typename?: 'DeleteRecipePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  recipe: Recipe;
};

export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  role: Role;
};

export type DeleteSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteSessionPayload = {
  __typename?: 'DeleteSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  session: Session;
};

export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the deleted object. */
  user: User;
};

/** The Element object type is used to return array items' value. */
export type Element = {
  __typename?: 'Element';
  /** Return the value of the element in the array */
  value: Scalars['Any']['output'];
};

/** The FileInfo object type is used to return the information about files. */
export type FileInfo = {
  __typename?: 'FileInfo';
  /** This is the file name. */
  name: Scalars['String']['output'];
  /** This is the url in which the file can be downloaded. */
  url: Scalars['String']['output'];
};

export type FileInput = {
  /** A File Scalar can be an url or a FileInfo object. If this field is set to null the file will be unlinked. */
  file?: InputMaybe<Scalars['File']['input']>;
  /** Use this field if you want to unlink the file (the file will not be deleted on cloud storage) */
  unlink?: InputMaybe<Scalars['Boolean']['input']>;
  /** Use this field if you want to create a new file. */
  upload?: InputMaybe<Scalars['Upload']['input']>;
};

/** The FileWhereInput input type is used in operations that involve filtering objects by a field of type File. */
export type FileWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['File']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['File']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['File']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['File']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']['input']>;
};

/** The GeoIntersectsInput type is used to specify a geoIntersects operation on a constraint. */
export type GeoIntersectsInput = {
  /** This is the point to be specified. */
  point?: InputMaybe<GeoPointInput>;
};

/** The GeoPoint object type is used to return the information about geo point fields. */
export type GeoPoint = {
  __typename?: 'GeoPoint';
  /** This is the latitude. */
  latitude: Scalars['Float']['output'];
  /** This is the longitude. */
  longitude: Scalars['Float']['output'];
};

/** The GeoPointInput type is used in operations that involve inputting fields of type geo point. */
export type GeoPointInput = {
  /** This is the latitude. */
  latitude: Scalars['Float']['input'];
  /** This is the longitude. */
  longitude: Scalars['Float']['input'];
};

/** The GeoPointWhereInput input type is used in operations that involve filtering objects by a field of type GeoPoint. */
export type GeoPointWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the geoWithin operator to specify a constraint to select the objects where the values of a geo point field is within a specified polygon or sphere. */
  geoWithin?: InputMaybe<GeoWithinInput>;
  /** This is the maxDistance operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistance?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInKilometers operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in kilometers) from the geo point specified in the $nearSphere operator. */
  maxDistanceInKilometers?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInMiles operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in miles) from the geo point specified in the $nearSphere operator. */
  maxDistanceInMiles?: InputMaybe<Scalars['Float']['input']>;
  /** This is the maxDistanceInRadians operator to specify a constraint to select the objects where the values of a geo point field is at a max distance (in radians) from the geo point specified in the $nearSphere operator. */
  maxDistanceInRadians?: InputMaybe<Scalars['Float']['input']>;
  /** This is the nearSphere operator to specify a constraint to select the objects where the values of a geo point field is near to another geo point. */
  nearSphere?: InputMaybe<GeoPointInput>;
  /** This is the within operator to specify a constraint to select the objects where the values of a geo point field is within a specified box. */
  within?: InputMaybe<WithinInput>;
};

/** The GeoWithinInput type is used to specify a geoWithin operation on a constraint. */
export type GeoWithinInput = {
  /** This is the sphere to be specified. */
  centerSphere?: InputMaybe<CenterSphereInput>;
  /** This is the polygon to be specified. */
  polygon?: InputMaybe<Array<GeoPointInput>>;
};

/** The IdWhereInput input type is used in operations that involve filtering objects by an id. */
export type IdWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['ID']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['ID']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['ID']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The Ingredient object type is used in operations that involve outputting objects of Ingredient class. */
export type Ingredient = Node & ParseObject & {
  __typename?: 'Ingredient';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object portion_type. */
  portion_type: Scalars['String']['output'];
  /** This is the object product_id. */
  product_id: Scalars['Object']['output'];
  /** This is the object recipe_id. */
  recipe_id: Recipe;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type IngredientConnection = {
  __typename?: 'IngredientConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<IngredientEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type IngredientEdge = {
  __typename?: 'IngredientEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Ingredient>;
};

/** The IngredientOrder input type is used when sorting objects of the Ingredient class. */
export enum IngredientOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PortionTypeAsc = 'portion_type_ASC',
  PortionTypeDesc = 'portion_type_DESC',
  ProductIdAsc = 'product_id_ASC',
  ProductIdDesc = 'product_id_DESC',
  RecipeIdAsc = 'recipe_id_ASC',
  RecipeIdDesc = 'recipe_id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Ingredient class. */
export type IngredientPointerInput = {
  /** Create and link an object from Ingredient class. */
  createAndLink?: InputMaybe<CreateIngredientFieldsInput>;
  /** Link an existing object from Ingredient class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Ingredient class into a relation field. */
export type IngredientRelationInput = {
  /** Add existing objects from the Ingredient class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Ingredient class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateIngredientFieldsInput>>;
  /** Remove existing objects from the Ingredient class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The IngredientRelationWhereInput input type is used in operations that involve filtering objects of Ingredient class. */
export type IngredientRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<IngredientWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<IngredientWhereInput>;
};

/** The IngredientWhereInput input type is used in operations that involve filtering objects of Ingredient class. */
export type IngredientWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<IngredientWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object portion_type. */
  portion_type?: InputMaybe<StringWhereInput>;
  /** This is the object product_id. */
  product_id?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object recipe_id. */
  recipe_id?: InputMaybe<RecipeRelationWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** An entry from an object, i.e., a pair of key and value. */
export type KeyValueInput = {
  /** The key used to retrieve the value of this entry. */
  key: Scalars['String']['input'];
  /** The value of the entry. Could be any type of scalar data. */
  value: Scalars['Any']['input'];
};

/** The List object type is used in operations that involve outputting objects of List class. */
export type List = Node & ParseObject & {
  __typename?: 'List';
  ACL: Acl;
  /** This is the object adquired_portion. */
  adquired_portion: Scalars['String']['output'];
  /** This is the object adquired_portion_type. */
  adquired_portion_type?: Maybe<Scalars['String']['output']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object product_id. */
  product_id: Scalars['Object']['output'];
  /** This is the object type. */
  type: Scalars['String']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object user_id. */
  user_id: User;
};

/** A connection to a list of items. */
export type ListConnection = {
  __typename?: 'ListConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ListEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ListEdge = {
  __typename?: 'ListEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<List>;
};

/** The ListOrder input type is used when sorting objects of the List class. */
export enum ListOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AdquiredPortionAsc = 'adquired_portion_ASC',
  AdquiredPortionDesc = 'adquired_portion_DESC',
  AdquiredPortionTypeAsc = 'adquired_portion_type_ASC',
  AdquiredPortionTypeDesc = 'adquired_portion_type_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  ProductIdAsc = 'product_id_ASC',
  ProductIdDesc = 'product_id_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserIdAsc = 'user_id_ASC',
  UserIdDesc = 'user_id_DESC'
}

/** Allow to link OR add and link an object of the List class. */
export type ListPointerInput = {
  /** Create and link an object from List class. */
  createAndLink?: InputMaybe<CreateListFieldsInput>;
  /** Link an existing object from List class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the List class into a relation field. */
export type ListRelationInput = {
  /** Add existing objects from the List class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the List class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateListFieldsInput>>;
  /** Remove existing objects from the List class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The ListRelationWhereInput input type is used in operations that involve filtering objects of List class. */
export type ListRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<ListWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<ListWhereInput>;
};

/** The ListWhereInput input type is used in operations that involve filtering objects of List class. */
export type ListWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<ListWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<ListWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<ListWhereInput>>;
  /** This is the object adquired_portion. */
  adquired_portion?: InputMaybe<StringWhereInput>;
  /** This is the object adquired_portion_type. */
  adquired_portion_type?: InputMaybe<StringWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object product_id. */
  product_id?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object type. */
  type?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object user_id. */
  user_id?: InputMaybe<UserRelationWhereInput>;
};

export type LogInInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the password used to log in the user. */
  password: Scalars['String']['input'];
  /** This is the username used to log in the user. */
  username: Scalars['String']['input'];
};

export type LogInPayload = {
  __typename?: 'LogInPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the existing user that was logged in and returned as a viewer. */
  viewer: Viewer;
};

export type LogInWithInput = {
  authData: Scalars['Object']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<UserLoginWithInput>;
};

export type LogInWithPayload = {
  __typename?: 'LogInWithPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer;
};

export type LogOutInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

export type LogOutPayload = {
  __typename?: 'LogOutPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

/** The Manufacturer object type is used in operations that involve outputting objects of Manufacturer class. */
export type Manufacturer = Node & ParseObject & {
  __typename?: 'Manufacturer';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type ManufacturerConnection = {
  __typename?: 'ManufacturerConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ManufacturerEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ManufacturerEdge = {
  __typename?: 'ManufacturerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Manufacturer>;
};

/** The ManufacturerOrder input type is used when sorting objects of the Manufacturer class. */
export enum ManufacturerOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Manufacturer class. */
export type ManufacturerPointerInput = {
  /** Create and link an object from Manufacturer class. */
  createAndLink?: InputMaybe<CreateManufacturerFieldsInput>;
  /** Link an existing object from Manufacturer class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Manufacturer class into a relation field. */
export type ManufacturerRelationInput = {
  /** Add existing objects from the Manufacturer class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Manufacturer class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateManufacturerFieldsInput>>;
  /** Remove existing objects from the Manufacturer class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The ManufacturerRelationWhereInput input type is used in operations that involve filtering objects of Manufacturer class. */
export type ManufacturerRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<ManufacturerWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<ManufacturerWhereInput>;
};

/** The ManufacturerWhereInput input type is used in operations that involve filtering objects of Manufacturer class. */
export type ManufacturerWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<ManufacturerWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<ManufacturerWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<ManufacturerWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** Mutation is the top level type for mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** The createClass mutation can be used to create the schema for a new object class. */
  createClass?: Maybe<CreateClassPayload>;
  /** The createFile mutation can be used to create and upload a new file. */
  createFile?: Maybe<CreateFilePayload>;
  /** The createIngredient mutation can be used to create a new object of the Ingredient class. */
  createIngredient?: Maybe<CreateIngredientPayload>;
  /** The createList mutation can be used to create a new object of the List class. */
  createList?: Maybe<CreateListPayload>;
  /** The createManufacturer mutation can be used to create a new object of the Manufacturer class. */
  createManufacturer?: Maybe<CreateManufacturerPayload>;
  /** The createPortionType mutation can be used to create a new object of the PortionType class. */
  createPortionType?: Maybe<CreatePortionTypePayload>;
  /** The createProduct mutation can be used to create a new object of the Product class. */
  createProduct?: Maybe<CreateProductPayload>;
  /** The createRecipe mutation can be used to create a new object of the Recipe class. */
  createRecipe?: Maybe<CreateRecipePayload>;
  /** The createRole mutation can be used to create a new object of the Role class. */
  createRole?: Maybe<CreateRolePayload>;
  /** The createSession mutation can be used to create a new object of the Session class. */
  createSession?: Maybe<CreateSessionPayload>;
  /** The createUser mutation can be used to create a new object of the User class. */
  createUser?: Maybe<CreateUserPayload>;
  /** The deleteClass mutation can be used to delete an existing object class. */
  deleteClass?: Maybe<DeleteClassPayload>;
  /** The deleteIngredient mutation can be used to delete an object of the Ingredient class. */
  deleteIngredient?: Maybe<DeleteIngredientPayload>;
  /** The deleteList mutation can be used to delete an object of the List class. */
  deleteList?: Maybe<DeleteListPayload>;
  /** The deleteManufacturer mutation can be used to delete an object of the Manufacturer class. */
  deleteManufacturer?: Maybe<DeleteManufacturerPayload>;
  /** The deletePortionType mutation can be used to delete an object of the PortionType class. */
  deletePortionType?: Maybe<DeletePortionTypePayload>;
  /** The deleteProduct mutation can be used to delete an object of the Product class. */
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** The deleteRecipe mutation can be used to delete an object of the Recipe class. */
  deleteRecipe?: Maybe<DeleteRecipePayload>;
  /** The deleteRole mutation can be used to delete an object of the Role class. */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** The deleteSession mutation can be used to delete an object of the Session class. */
  deleteSession?: Maybe<DeleteSessionPayload>;
  /** The deleteUser mutation can be used to delete an object of the User class. */
  deleteUser?: Maybe<DeleteUserPayload>;
  /** The logIn mutation can be used to log in an existing user. */
  logIn?: Maybe<LogInPayload>;
  /** The logInWith mutation can be used to signup, login user with 3rd party authentication system. This mutation create a user if the authData do not correspond to an existing one. */
  logInWith?: Maybe<LogInWithPayload>;
  /** The logOut mutation can be used to log out an existing user. */
  logOut?: Maybe<LogOutPayload>;
  /** The resetPassword mutation can be used to reset the password of an existing user. */
  resetPassword?: Maybe<ResetPasswordPayload>;
  /** The sendVerificationEmail mutation can be used to send the verification email again. */
  sendVerificationEmail?: Maybe<SendVerificationEmailPayload>;
  /** The signUp mutation can be used to create and sign up a new user. */
  signUp?: Maybe<SignUpPayload>;
  /** The updateClass mutation can be used to update the schema for an existing object class. */
  updateClass?: Maybe<UpdateClassPayload>;
  /** The updateIngredient mutation can be used to update an object of the Ingredient class. */
  updateIngredient?: Maybe<UpdateIngredientPayload>;
  /** The updateList mutation can be used to update an object of the List class. */
  updateList?: Maybe<UpdateListPayload>;
  /** The updateManufacturer mutation can be used to update an object of the Manufacturer class. */
  updateManufacturer?: Maybe<UpdateManufacturerPayload>;
  /** The updatePortionType mutation can be used to update an object of the PortionType class. */
  updatePortionType?: Maybe<UpdatePortionTypePayload>;
  /** The updateProduct mutation can be used to update an object of the Product class. */
  updateProduct?: Maybe<UpdateProductPayload>;
  /** The updateRecipe mutation can be used to update an object of the Recipe class. */
  updateRecipe?: Maybe<UpdateRecipePayload>;
  /** The updateRole mutation can be used to update an object of the Role class. */
  updateRole?: Maybe<UpdateRolePayload>;
  /** The updateSession mutation can be used to update an object of the Session class. */
  updateSession?: Maybe<UpdateSessionPayload>;
  /** The updateUser mutation can be used to update an object of the User class. */
  updateUser?: Maybe<UpdateUserPayload>;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateClassArgs = {
  input: CreateClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateFileArgs = {
  input: CreateFileInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateIngredientArgs = {
  input: CreateIngredientInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateListArgs = {
  input: CreateListInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateManufacturerArgs = {
  input: CreateManufacturerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreatePortionTypeArgs = {
  input: CreatePortionTypeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateRecipeArgs = {
  input: CreateRecipeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateSessionArgs = {
  input: CreateSessionInput;
};


/** Mutation is the top level type for mutations. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteClassArgs = {
  input: DeleteClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteIngredientArgs = {
  input: DeleteIngredientInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteListArgs = {
  input: DeleteListInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteManufacturerArgs = {
  input: DeleteManufacturerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeletePortionTypeArgs = {
  input: DeletePortionTypeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteProductArgs = {
  input: DeleteProductInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteRecipeArgs = {
  input: DeleteRecipeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteSessionArgs = {
  input: DeleteSessionInput;
};


/** Mutation is the top level type for mutations. */
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogInArgs = {
  input: LogInInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogInWithArgs = {
  input: LogInWithInput;
};


/** Mutation is the top level type for mutations. */
export type MutationLogOutArgs = {
  input: LogOutInput;
};


/** Mutation is the top level type for mutations. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


/** Mutation is the top level type for mutations. */
export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};


/** Mutation is the top level type for mutations. */
export type MutationSignUpArgs = {
  input: SignUpInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateClassArgs = {
  input: UpdateClassInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateIngredientArgs = {
  input: UpdateIngredientInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateListArgs = {
  input: UpdateListInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateManufacturerArgs = {
  input: UpdateManufacturerInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdatePortionTypeArgs = {
  input: UpdatePortionTypeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateRecipeArgs = {
  input: UpdateRecipeInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateSessionArgs = {
  input: UpdateSessionInput;
};


/** Mutation is the top level type for mutations. */
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output'];
};

/** The NumberWhereInput input type is used in operations that involve filtering objects by a field of type Number. */
export type NumberWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** The ObjectWhereInput input type is used in operations that involve filtering result by a field of type Object. */
export type ObjectWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<KeyValueInput>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<KeyValueInput>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<KeyValueInput>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<KeyValueInput>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<KeyValueInput>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The ParseObject interface type is used as a base type for the auto generated object types. */
export type ParseObject = {
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** The PointerFieldInput is used to specify a field of type pointer for an object class schema. */
export type PointerFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['input'];
};

/** The PolygonWhereInput input type is used in operations that involve filtering objects by a field of type Polygon. */
export type PolygonWhereInput = {
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the geoIntersects operator to specify a constraint to select the objects where the values of a polygon field intersect a specified point. */
  geoIntersects?: InputMaybe<GeoIntersectsInput>;
};

/** The PortionType object type is used in operations that involve outputting objects of PortionType class. */
export type PortionType = Node & ParseObject & {
  __typename?: 'PortionType';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type PortionTypeConnection = {
  __typename?: 'PortionTypeConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PortionTypeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PortionTypeEdge = {
  __typename?: 'PortionTypeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PortionType>;
};

/** The PortionTypeOrder input type is used when sorting objects of the PortionType class. */
export enum PortionTypeOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the PortionType class. */
export type PortionTypePointerInput = {
  /** Create and link an object from PortionType class. */
  createAndLink?: InputMaybe<CreatePortionTypeFieldsInput>;
  /** Link an existing object from PortionType class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the PortionType class into a relation field. */
export type PortionTypeRelationInput = {
  /** Add existing objects from the PortionType class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the PortionType class into the relation. */
  createAndAdd?: InputMaybe<Array<CreatePortionTypeFieldsInput>>;
  /** Remove existing objects from the PortionType class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The PortionTypeRelationWhereInput input type is used in operations that involve filtering objects of PortionType class. */
export type PortionTypeRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<PortionTypeWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<PortionTypeWhereInput>;
};

/** The PortionTypeWhereInput input type is used in operations that involve filtering objects of PortionType class. */
export type PortionTypeWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<PortionTypeWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<PortionTypeWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<PortionTypeWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The Product object type is used in operations that involve outputting objects of Product class. */
export type Product = Node & ParseObject & {
  __typename?: 'Product';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object manufacturer_id. */
  manufacturer_id: Manufacturer;
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object portion. */
  portion: Scalars['Float']['output'];
  /** This is the object portion_type. */
  portion_type: Scalars['String']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProductEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Product>;
};

/** The ProductOrder input type is used when sorting objects of the Product class. */
export enum ProductOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ManufacturerIdAsc = 'manufacturer_id_ASC',
  ManufacturerIdDesc = 'manufacturer_id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PortionAsc = 'portion_ASC',
  PortionDesc = 'portion_DESC',
  PortionTypeAsc = 'portion_type_ASC',
  PortionTypeDesc = 'portion_type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Product class. */
export type ProductPointerInput = {
  /** Create and link an object from Product class. */
  createAndLink?: InputMaybe<CreateProductFieldsInput>;
  /** Link an existing object from Product class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Product class into a relation field. */
export type ProductRelationInput = {
  /** Add existing objects from the Product class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Product class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateProductFieldsInput>>;
  /** Remove existing objects from the Product class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The ProductRelationWhereInput input type is used in operations that involve filtering objects of Product class. */
export type ProductRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<ProductWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<ProductWhereInput>;
};

/** The ProductWhereInput input type is used in operations that involve filtering objects of Product class. */
export type ProductWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<ProductWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object manufacturer_id. */
  manufacturer_id?: InputMaybe<ManufacturerRelationWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object portion. */
  portion?: InputMaybe<NumberWhereInput>;
  /** This is the object portion_type. */
  portion_type?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** Allow to manage public rights. */
export type PublicAcl = {
  __typename?: 'PublicACL';
  /** Allow anyone to read the current object. */
  read?: Maybe<Scalars['Boolean']['output']>;
  /** Allow anyone to write on the current object. */
  write?: Maybe<Scalars['Boolean']['output']>;
};

/** Allow to manage public rights. */
export type PublicAclInput = {
  /** Allow anyone to read the current object. */
  read: Scalars['Boolean']['input'];
  /** Allow anyone to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** Query is the top level type for queries. */
export type Query = {
  __typename?: 'Query';
  /** The class query can be used to retrieve an existing object class. */
  class: Class;
  /** The classes query can be used to retrieve the existing object classes. */
  classes: Array<Class>;
  /** The health query can be used to check if the server is up and running. */
  health: Scalars['Boolean']['output'];
  /** The ingredient query can be used to get an object of the Ingredient class by its id. */
  ingredient: Ingredient;
  /** The ingredients query can be used to find objects of the Ingredient class. */
  ingredients: IngredientConnection;
  /** The list query can be used to get an object of the List class by its id. */
  list: List;
  /** The lists query can be used to find objects of the List class. */
  lists: ListConnection;
  /** The manufacturer query can be used to get an object of the Manufacturer class by its id. */
  manufacturer: Manufacturer;
  /** The manufacturers query can be used to find objects of the Manufacturer class. */
  manufacturers: ManufacturerConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** The portionType query can be used to get an object of the PortionType class by its id. */
  portionType: PortionType;
  /** The portionTypes query can be used to find objects of the PortionType class. */
  portionTypes: PortionTypeConnection;
  /** The product query can be used to get an object of the Product class by its id. */
  product: Product;
  /** The products query can be used to find objects of the Product class. */
  products: ProductConnection;
  /** The recipe query can be used to get an object of the Recipe class by its id. */
  recipe: Recipe;
  /** The recipes query can be used to find objects of the Recipe class. */
  recipes: RecipeConnection;
  /** The role query can be used to get an object of the Role class by its id. */
  role: Role;
  /** The roles query can be used to find objects of the Role class. */
  roles: RoleConnection;
  /** The session query can be used to get an object of the Session class by its id. */
  session: Session;
  /** The sessions query can be used to find objects of the Session class. */
  sessions: SessionConnection;
  /** The user query can be used to get an object of the User class by its id. */
  user: User;
  /** The users query can be used to find objects of the User class. */
  users: UserConnection;
  /** The viewer query can be used to return the current user data. */
  viewer: Viewer;
};


/** Query is the top level type for queries. */
export type QueryClassArgs = {
  name: Scalars['String']['input'];
};


/** Query is the top level type for queries. */
export type QueryIngredientArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryIngredientsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<IngredientOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IngredientWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryListArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryListsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<ListOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ListWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryManufacturerArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryManufacturersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<ManufacturerOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ManufacturerWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


/** Query is the top level type for queries. */
export type QueryPortionTypeArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryPortionTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<PortionTypeOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PortionTypeWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryProductArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<ProductOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryRecipeArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryRecipesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RecipeOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RecipeWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** Query is the top level type for queries. */
export type QuerySessionArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QuerySessionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<SessionOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


/** Query is the top level type for queries. */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
  options?: InputMaybe<ReadOptionsInput>;
};


/** Query is the top level type for queries. */
export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

/** The ReadOptionsInputt type is used in queries in order to set the read preferences. */
export type ReadOptionsInput = {
  /** The read preference for the queries to be executed to include fields. */
  includeReadPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the main query to be executed. */
  readPreference?: InputMaybe<ReadPreference>;
  /** The read preference for the subqueries that may be required. */
  subqueryReadPreference?: InputMaybe<ReadPreference>;
};

/** The ReadPreference enum type is used in queries in order to select in which database replica the operation must run. */
export enum ReadPreference {
  Nearest = 'NEAREST',
  Primary = 'PRIMARY',
  PrimaryPreferred = 'PRIMARY_PREFERRED',
  Secondary = 'SECONDARY',
  SecondaryPreferred = 'SECONDARY_PREFERRED'
}

/** The Recipe object type is used in operations that involve outputting objects of Recipe class. */
export type Recipe = Node & ParseObject & {
  __typename?: 'Recipe';
  ACL: Acl;
  /** This is the object available. */
  available?: Maybe<Scalars['Boolean']['output']>;
  /** This is the object complete. */
  complete: Scalars['Boolean']['output'];
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object createdby. */
  createdby: User;
  /** This is the object duration. */
  duration: Scalars['Float']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object qt_portion. */
  qt_portion: Scalars['String']['output'];
  /** Use Inline Fragment on Array to get results: https://graphql.org/learn/queries/#inline-fragments */
  steps: Array<Maybe<ArrayResult>>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
};

/** A connection to a list of items. */
export type RecipeConnection = {
  __typename?: 'RecipeConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecipeEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RecipeEdge = {
  __typename?: 'RecipeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Recipe>;
};

/** The RecipeOrder input type is used when sorting objects of the Recipe class. */
export enum RecipeOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AvailableAsc = 'available_ASC',
  AvailableDesc = 'available_DESC',
  CompleteAsc = 'complete_ASC',
  CompleteDesc = 'complete_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedbyAsc = 'createdby_ASC',
  CreatedbyDesc = 'createdby_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  QtPortionAsc = 'qt_portion_ASC',
  QtPortionDesc = 'qt_portion_DESC',
  StepsAsc = 'steps_ASC',
  StepsDesc = 'steps_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** Allow to link OR add and link an object of the Recipe class. */
export type RecipePointerInput = {
  /** Create and link an object from Recipe class. */
  createAndLink?: InputMaybe<CreateRecipeFieldsInput>;
  /** Link an existing object from Recipe class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Recipe class into a relation field. */
export type RecipeRelationInput = {
  /** Add existing objects from the Recipe class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Recipe class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateRecipeFieldsInput>>;
  /** Remove existing objects from the Recipe class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The RecipeRelationWhereInput input type is used in operations that involve filtering objects of Recipe class. */
export type RecipeRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<RecipeWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<RecipeWhereInput>;
};

/** The RecipeWhereInput input type is used in operations that involve filtering objects of Recipe class. */
export type RecipeWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<RecipeWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  /** This is the object available. */
  available?: InputMaybe<BooleanWhereInput>;
  /** This is the object complete. */
  complete?: InputMaybe<BooleanWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object createdby. */
  createdby?: InputMaybe<UserRelationWhereInput>;
  /** This is the object duration. */
  duration?: InputMaybe<NumberWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object qt_portion. */
  qt_portion?: InputMaybe<StringWhereInput>;
  /** This is the object steps. */
  steps?: InputMaybe<ArrayWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
};

/** The RelationFieldInput is used to specify a field of type relation for an object class schema. */
export type RelationFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

/** The Role object type is used in operations that involve outputting objects of Role class. */
export type Role = Node & ParseObject & {
  __typename?: 'Role';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name?: Maybe<Scalars['String']['output']>;
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object roles. */
  roles: RoleConnection;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object users. */
  users: UserConnection;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleRolesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<RoleOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoleWhereInput>;
};


/** The Role object type is used in operations that involve outputting objects of Role class. */
export type RoleUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  options?: InputMaybe<ReadOptionsInput>;
  order?: InputMaybe<Array<UserOrder>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

/** Allow to manage roles in ACL. If read and write are null the role have read and write rights. */
export type RoleAcl = {
  __typename?: 'RoleACL';
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']['output'];
  /** Name of the targetted Role. */
  roleName: Scalars['ID']['output'];
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']['output'];
};

/** Allow to manage roles in ACL. */
export type RoleAclInput = {
  /** Allow users who are members of the role to read the current object. */
  read: Scalars['Boolean']['input'];
  /** Name of the targetted Role. */
  roleName: Scalars['String']['input'];
  /** Allow users who are members of the role to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** A connection to a list of items. */
export type RoleConnection = {
  __typename?: 'RoleConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RoleEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Role>;
};

/** The RoleOrder input type is used when sorting objects of the Role class. */
export enum RoleOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RolesAsc = 'roles_ASC',
  RolesDesc = 'roles_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsersAsc = 'users_ASC',
  UsersDesc = 'users_DESC'
}

/** Allow to link OR add and link an object of the Role class. */
export type RolePointerInput = {
  /** Create and link an object from Role class. */
  createAndLink?: InputMaybe<CreateRoleFieldsInput>;
  /** Link an existing object from Role class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Role class into a relation field. */
export type RoleRelationInput = {
  /** Add existing objects from the Role class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Role class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateRoleFieldsInput>>;
  /** Remove existing objects from the Role class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The RoleRelationWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<RoleWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<RoleWhereInput>;
};

/** The RoleWhereInput input type is used in operations that involve filtering objects of Role class. */
export type RoleWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<RoleWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationWhereInput>;
};

/** The SchemaACLField is used to return information of an ACL field. */
export type SchemaAclField = SchemaField & {
  __typename?: 'SchemaACLField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaArrayField is used to return information of an Array field. */
export type SchemaArrayField = SchemaField & {
  __typename?: 'SchemaArrayField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaArrayFieldInput is used to specify a field of type array for an object class schema. */
export type SchemaArrayFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaBooleanField is used to return information of a Boolean field. */
export type SchemaBooleanField = SchemaField & {
  __typename?: 'SchemaBooleanField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaBooleanFieldInput is used to specify a field of type boolean for an object class schema. */
export type SchemaBooleanFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaBytesField is used to return information of a Bytes field. */
export type SchemaBytesField = SchemaField & {
  __typename?: 'SchemaBytesField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaBytesFieldInput is used to specify a field of type bytes for an object class schema. */
export type SchemaBytesFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaDateField is used to return information of a Date field. */
export type SchemaDateField = SchemaField & {
  __typename?: 'SchemaDateField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaDateFieldInput is used to specify a field of type date for an object class schema. */
export type SchemaDateFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaField interface type is used as a base type for the different supported fields of an object class schema. */
export type SchemaField = {
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaFieldInput is used to specify a field of an object class schema. */
export type SchemaFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The CreateClassSchemaInput type is used to specify the schema for a new object class to be created. */
export type SchemaFieldsInput = {
  /** These are the Array fields to be added to the class schema. */
  addArrays?: InputMaybe<Array<SchemaArrayFieldInput>>;
  /** These are the Boolean fields to be added to the class schema. */
  addBooleans?: InputMaybe<Array<SchemaBooleanFieldInput>>;
  /** These are the Bytes fields to be added to the class schema. */
  addBytes?: InputMaybe<Array<SchemaBytesFieldInput>>;
  /** These are the Date fields to be added to the class schema. */
  addDates?: InputMaybe<Array<SchemaDateFieldInput>>;
  /** These are the File fields to be added to the class schema. */
  addFiles?: InputMaybe<Array<SchemaFileFieldInput>>;
  /** This is the Geo Point field to be added to the class schema. Currently it is supported only one GeoPoint field per Class. */
  addGeoPoint?: InputMaybe<SchemaGeoPointFieldInput>;
  /** These are the Number fields to be added to the class schema. */
  addNumbers?: InputMaybe<Array<SchemaNumberFieldInput>>;
  /** These are the Object fields to be added to the class schema. */
  addObjects?: InputMaybe<Array<SchemaObjectFieldInput>>;
  /** These are the Pointer fields to be added to the class schema. */
  addPointers?: InputMaybe<Array<PointerFieldInput>>;
  /** These are the Polygon fields to be added to the class schema. */
  addPolygons?: InputMaybe<Array<SchemaPolygonFieldInput>>;
  /** These are the Relation fields to be added to the class schema. */
  addRelations?: InputMaybe<Array<RelationFieldInput>>;
  /** These are the String fields to be added to the class schema. */
  addStrings?: InputMaybe<Array<SchemaStringFieldInput>>;
  /** These are the fields to be removed from the class schema. */
  remove?: InputMaybe<Array<SchemaFieldInput>>;
};

/** The SchemaFileField is used to return information of a File field. */
export type SchemaFileField = SchemaField & {
  __typename?: 'SchemaFileField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaFileFieldInput is used to specify a field of type file for an object class schema. */
export type SchemaFileFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaGeoPointField is used to return information of a Geo Point field. */
export type SchemaGeoPointField = SchemaField & {
  __typename?: 'SchemaGeoPointField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaGeoPointFieldInput is used to specify a field of type geo point for an object class schema. */
export type SchemaGeoPointFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaNumberField is used to return information of a Number field. */
export type SchemaNumberField = SchemaField & {
  __typename?: 'SchemaNumberField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaNumberFieldInput is used to specify a field of type number for an object class schema. */
export type SchemaNumberFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaObjectField is used to return information of an Object field. */
export type SchemaObjectField = SchemaField & {
  __typename?: 'SchemaObjectField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaObjectFieldInput is used to specify a field of type object for an object class schema. */
export type SchemaObjectFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaPointerField is used to return information of a Pointer field. */
export type SchemaPointerField = SchemaField & {
  __typename?: 'SchemaPointerField';
  /** This is the field name. */
  name: Scalars['String']['output'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['output'];
};

/** The SchemaPolygonField is used to return information of a Polygon field. */
export type SchemaPolygonField = SchemaField & {
  __typename?: 'SchemaPolygonField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaPolygonFieldInput is used to specify a field of type polygon for an object class schema. */
export type SchemaPolygonFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SchemaRelationField is used to return information of a Relation field. */
export type SchemaRelationField = SchemaField & {
  __typename?: 'SchemaRelationField';
  /** This is the field name. */
  name: Scalars['String']['output'];
  /** This is the name of the target class for the field. */
  targetClassName: Scalars['String']['output'];
};

/** The SchemaStringField is used to return information of a String field. */
export type SchemaStringField = SchemaField & {
  __typename?: 'SchemaStringField';
  /** This is the field name. */
  name: Scalars['String']['output'];
};

/** The SchemaStringFieldInput is used to specify a field of type string for an object class schema. */
export type SchemaStringFieldInput = {
  /** This is the field name. */
  name: Scalars['String']['input'];
};

/** The SearchInput type is used to specifiy a search operation on a full text search. */
export type SearchInput = {
  /** This is the flag to enable or disable case sensitive search. */
  caseSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the flag to enable or disable diacritic sensitive search. */
  diacriticSensitive?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the language to tetermine the list of stop words and the rules for tokenizer. */
  language?: InputMaybe<Scalars['String']['input']>;
  /** This is the term to be searched. */
  term: Scalars['String']['input'];
};

/** The SelectInput type is used to specify an inQueryKey or a notInQueryKey operation on a constraint. */
export type SelectInput = {
  /** This is the key in the result of the subquery that must match (not match) the field. */
  key: Scalars['String']['input'];
  /** This is the subquery to be executed. */
  query: SubqueryInput;
};

export type SendVerificationEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

export type SendVerificationEmailPayload = {
  __typename?: 'SendVerificationEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** It's always true. */
  ok: Scalars['Boolean']['output'];
};

/** The Session object type is used in operations that involve outputting objects of Session class. */
export type Session = Node & ParseObject & {
  __typename?: 'Session';
  ACL: Acl;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object createdWith. */
  createdWith?: Maybe<Scalars['Object']['output']>;
  /** This is the object expiresAt. */
  expiresAt?: Maybe<Scalars['Date']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object installationId. */
  installationId?: Maybe<Scalars['String']['output']>;
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the object restricted. */
  restricted?: Maybe<Scalars['Boolean']['output']>;
  /** This is the object sessionToken. */
  sessionToken?: Maybe<Scalars['String']['output']>;
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object user. */
  user?: Maybe<User>;
};

/** A connection to a list of items. */
export type SessionConnection = {
  __typename?: 'SessionConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SessionEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SessionEdge = {
  __typename?: 'SessionEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<Session>;
};

/** The SessionOrder input type is used when sorting objects of the Session class. */
export enum SessionOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedWithAsc = 'createdWith_ASC',
  CreatedWithDesc = 'createdWith_DESC',
  ExpiresAtAsc = 'expiresAt_ASC',
  ExpiresAtDesc = 'expiresAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InstallationIdAsc = 'installationId_ASC',
  InstallationIdDesc = 'installationId_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  RestrictedAsc = 'restricted_ASC',
  RestrictedDesc = 'restricted_DESC',
  SessionTokenAsc = 'sessionToken_ASC',
  SessionTokenDesc = 'sessionToken_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UserAsc = 'user_ASC',
  UserDesc = 'user_DESC'
}

/** Allow to link OR add and link an object of the Session class. */
export type SessionPointerInput = {
  /** Create and link an object from Session class. */
  createAndLink?: InputMaybe<CreateSessionFieldsInput>;
  /** Link an existing object from Session class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the Session class into a relation field. */
export type SessionRelationInput = {
  /** Add existing objects from the Session class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the Session class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateSessionFieldsInput>>;
  /** Remove existing objects from the Session class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The SessionRelationWhereInput input type is used in operations that involve filtering objects of Session class. */
export type SessionRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<SessionWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<SessionWhereInput>;
};

/** The SessionWhereInput input type is used in operations that involve filtering objects of Session class. */
export type SessionWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<SessionWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<SessionWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<SessionWhereInput>>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object createdWith. */
  createdWith?: InputMaybe<ObjectWhereInput>;
  /** This is the object expiresAt. */
  expiresAt?: InputMaybe<DateWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object installationId. */
  installationId?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object restricted. */
  restricted?: InputMaybe<BooleanWhereInput>;
  /** This is the object sessionToken. */
  sessionToken?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object user. */
  user?: InputMaybe<UserRelationWhereInput>;
};

export type SignUpInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<CreateUserFieldsInput>;
};

export type SignUpPayload = {
  __typename?: 'SignUpPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the new user that was created, signed up and returned as a viewer. */
  viewer: Viewer;
};

/** The StringWhereInput input type is used in operations that involve filtering objects by a field of type String. */
export type StringWhereInput = {
  /** This is the equalTo operator to specify a constraint to select the objects where the value of a field equals to a specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the exists operator to specify a constraint to select the objects where a field exists (or do not exist). */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the greaterThan operator to specify a constraint to select the objects where the value of a field is greater than a specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** This is the greaterThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is greater than or equal to a specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the in operator to specify a constraint to select the objects where the value of a field equals any value in the specified array. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** This is the inQueryKey operator to specify a constraint to select the objects where a field equals to a key in the result of a different query. */
  inQueryKey?: InputMaybe<SelectInput>;
  /** This is the lessThan operator to specify a constraint to select the objects where the value of a field is less than a specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** This is the lessThanOrEqualTo operator to specify a constraint to select the objects where the value of a field is less than or equal to a specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the matchesRegex operator to specify a constraint to select the objects where the value of a field matches a specified regular expression. */
  matchesRegex?: InputMaybe<Scalars['String']['input']>;
  /** This is the notEqualTo operator to specify a constraint to select the objects where the value of a field do not equal to a specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** This is the notIn operator to specify a constraint to select the objects where the value of a field do not equal any value in the specified array. */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** This is the notInQueryKey operator to specify a constraint to select the objects where a field do not equal to a key in the result of a different query. */
  notInQueryKey?: InputMaybe<SelectInput>;
  /** This is the options operator to specify optional flags (such as "i" and "m") to be added to a matchesRegex operation in the same set of constraints. */
  options?: InputMaybe<Scalars['String']['input']>;
  /** This is the $text operator to specify a full text search constraint. */
  text?: InputMaybe<TextInput>;
};

/** The SubqueryInput type is used to specify a sub query to another class. */
export type SubqueryInput = {
  /** This is the class name of the object. */
  className: Scalars['String']['input'];
  /** These are the conditions that the objects need to match in order to be found */
  where: Scalars['Object']['input'];
};

/** The TextInput type is used to specify a text operation on a constraint. */
export type TextInput = {
  /** This is the search to be executed. */
  search: SearchInput;
};

export type UpdateClassInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the name of the object class. */
  name: Scalars['String']['input'];
  /** These are the schema's fields of the object class. */
  schemaFields?: InputMaybe<SchemaFieldsInput>;
};

export type UpdateClassPayload = {
  __typename?: 'UpdateClassPayload';
  /** This is the updated class. */
  class: Class;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

/** The UpdateIngredientFieldsInput input type is used in operations that involve creation of objects in the Ingredient class. */
export type UpdateIngredientFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object portion_type. */
  portion_type?: InputMaybe<Scalars['String']['input']>;
  /** This is the object product_id. */
  product_id?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object recipe_id. */
  recipe_id?: InputMaybe<RecipePointerInput>;
};

export type UpdateIngredientInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateIngredientFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateIngredientPayload = {
  __typename?: 'UpdateIngredientPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  ingredient: Ingredient;
};

/** The UpdateListFieldsInput input type is used in operations that involve creation of objects in the List class. */
export type UpdateListFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object adquired_portion. */
  adquired_portion?: InputMaybe<Scalars['String']['input']>;
  /** This is the object adquired_portion_type. */
  adquired_portion_type?: InputMaybe<Scalars['String']['input']>;
  /** This is the object product_id. */
  product_id?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object type. */
  type?: InputMaybe<Scalars['String']['input']>;
  /** This is the object user_id. */
  user_id?: InputMaybe<UserPointerInput>;
};

export type UpdateListInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateListFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateListPayload = {
  __typename?: 'UpdateListPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  list: List;
};

/** The UpdateManufacturerFieldsInput input type is used in operations that involve creation of objects in the Manufacturer class. */
export type UpdateManufacturerFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateManufacturerInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateManufacturerFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateManufacturerPayload = {
  __typename?: 'UpdateManufacturerPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  manufacturer: Manufacturer;
};

/** The UpdatePortionTypeFieldsInput input type is used in operations that involve creation of objects in the PortionType class. */
export type UpdatePortionTypeFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePortionTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdatePortionTypeFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdatePortionTypePayload = {
  __typename?: 'UpdatePortionTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  portionType: PortionType;
};

/** The UpdateProductFieldsInput input type is used in operations that involve creation of objects in the Product class. */
export type UpdateProductFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object manufacturer_id. */
  manufacturer_id?: InputMaybe<ManufacturerPointerInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object portion. */
  portion?: InputMaybe<Scalars['Float']['input']>;
  /** This is the object portion_type. */
  portion_type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateProductFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  product: Product;
};

/** The UpdateRecipeFieldsInput input type is used in operations that involve creation of objects in the Recipe class. */
export type UpdateRecipeFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object available. */
  available?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object complete. */
  complete?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object createdby. */
  createdby?: InputMaybe<UserPointerInput>;
  /** This is the object duration. */
  duration?: InputMaybe<Scalars['Float']['input']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object qt_portion. */
  qt_portion?: InputMaybe<Scalars['String']['input']>;
  /** This is the object steps. */
  steps?: InputMaybe<Array<InputMaybe<Scalars['Any']['input']>>>;
};

export type UpdateRecipeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateRecipeFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateRecipePayload = {
  __typename?: 'UpdateRecipePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  recipe: Recipe;
};

/** The UpdateRoleFieldsInput input type is used in operations that involve creation of objects in the Role class. */
export type UpdateRoleFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object roles. */
  roles?: InputMaybe<RoleRelationInput>;
  /** This is the object users. */
  users?: InputMaybe<UserRelationInput>;
};

export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateRoleFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  role: Role;
};

/** The UpdateSessionFieldsInput input type is used in operations that involve creation of objects in the Session class. */
export type UpdateSessionFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object createdWith. */
  createdWith?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object expiresAt. */
  expiresAt?: InputMaybe<Scalars['Date']['input']>;
  /** This is the object installationId. */
  installationId?: InputMaybe<Scalars['String']['input']>;
  /** This is the object restricted. */
  restricted?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object sessionToken. */
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  /** This is the object user. */
  user?: InputMaybe<UserPointerInput>;
};

export type UpdateSessionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateSessionFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateSessionPayload = {
  __typename?: 'UpdateSessionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  session: Session;
};

/** The UpdateUserFieldsInput input type is used in operations that involve creation of objects in the User class. */
export type UpdateUserFieldsInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object authData. */
  authData?: InputMaybe<Scalars['Object']['input']>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** This is the object password. */
  password?: InputMaybe<Scalars['String']['input']>;
  /** This is the object username. */
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** These are the fields that will be used to update the object. */
  fields?: InputMaybe<UpdateUserFieldsInput>;
  /** This is the object id. You can use either the global or the object id. */
  id: Scalars['ID']['input'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** This is the updated object. */
  user: User;
};

/** The User object type is used in operations that involve outputting objects of User class. */
export type User = Node & ParseObject & {
  __typename?: 'User';
  ACL: Acl;
  /** This is the object authData. */
  authData?: Maybe<Scalars['Object']['output']>;
  /** This is the date in which the object was created. */
  createdAt: Scalars['Date']['output'];
  /** This is the object email. */
  email?: Maybe<Scalars['String']['output']>;
  /** This is the object emailVerified. */
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of an object */
  id: Scalars['ID']['output'];
  /** This is the object name. */
  name: Scalars['String']['output'];
  /** This is the object id. */
  objectId: Scalars['ID']['output'];
  /** This is the date in which the object was las updated. */
  updatedAt: Scalars['Date']['output'];
  /** This is the object username. */
  username?: Maybe<Scalars['String']['output']>;
};

/** Allow to manage users in ACL. If read and write are null the users have read and write rights. */
export type UserAcl = {
  __typename?: 'UserACL';
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']['output'];
  /** ID of the targetted User. */
  userId: Scalars['ID']['output'];
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']['output'];
};

/** Allow to manage users in ACL. */
export type UserAclInput = {
  /** Allow the user to read the current object. */
  read: Scalars['Boolean']['input'];
  /** ID of the targetted User. */
  userId: Scalars['ID']['input'];
  /** Allow the user to write on the current object. */
  write: Scalars['Boolean']['input'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** This is the total matched objecs count that is returned when the count flag is set. */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<User>;
};

export type UserLoginWithInput = {
  ACL?: InputMaybe<AclInput>;
  /** This is the object email. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  /** This is the object name. */
  name: Scalars['String']['input'];
};

/** The UserOrder input type is used when sorting objects of the User class. */
export enum UserOrder {
  AclAsc = 'ACL_ASC',
  AclDesc = 'ACL_DESC',
  AuthDataAsc = 'authData_ASC',
  AuthDataDesc = 'authData_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailVerifiedAsc = 'emailVerified_ASC',
  EmailVerifiedDesc = 'emailVerified_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ObjectIdAsc = 'objectId_ASC',
  ObjectIdDesc = 'objectId_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

/** Allow to link OR add and link an object of the User class. */
export type UserPointerInput = {
  /** Create and link an object from User class. */
  createAndLink?: InputMaybe<CreateUserFieldsInput>;
  /** Link an existing object from User class. You can use either the global or the object id. */
  link?: InputMaybe<Scalars['ID']['input']>;
};

/** Allow to add, remove, createAndAdd objects of the User class into a relation field. */
export type UserRelationInput = {
  /** Add existing objects from the User class into the relation. You can use either the global or the object ids. */
  add?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Create and add objects of the User class into the relation. */
  createAndAdd?: InputMaybe<Array<CreateUserFieldsInput>>;
  /** Remove existing objects from the User class out of the relation. You can use either the global or the object ids. */
  remove?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** The UserRelationWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserRelationWhereInput = {
  /** Check if the relation/pointer contains objects. */
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Run a relational/pointer query where at least one child object can match. */
  have?: InputMaybe<UserWhereInput>;
  /** Run an inverted relational/pointer query where at least one child object can match. */
  haveNot?: InputMaybe<UserWhereInput>;
};

/** The UserWhereInput input type is used in operations that involve filtering objects of User class. */
export type UserWhereInput = {
  /** This is the object ACL. */
  ACL?: InputMaybe<ObjectWhereInput>;
  /** This is the AND operator to compound constraints. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** This is the NOR operator to compound constraints. */
  NOR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the OR operator to compound constraints. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** This is the object authData. */
  authData?: InputMaybe<ObjectWhereInput>;
  /** This is the object createdAt. */
  createdAt?: InputMaybe<DateWhereInput>;
  /** This is the object email. */
  email?: InputMaybe<StringWhereInput>;
  /** This is the object emailVerified. */
  emailVerified?: InputMaybe<BooleanWhereInput>;
  /** This is the object id. */
  id?: InputMaybe<IdWhereInput>;
  /** This is the object name. */
  name?: InputMaybe<StringWhereInput>;
  /** This is the object objectId. */
  objectId?: InputMaybe<IdWhereInput>;
  /** This is the object password. */
  password?: InputMaybe<StringWhereInput>;
  /** This is the object updatedAt. */
  updatedAt?: InputMaybe<DateWhereInput>;
  /** This is the object username. */
  username?: InputMaybe<StringWhereInput>;
};

/** The Viewer object type is used in operations that involve outputting the current user data. */
export type Viewer = {
  __typename?: 'Viewer';
  /** The current user session token. */
  sessionToken: Scalars['String']['output'];
  /** This is the current user. */
  user: User;
};

/** The WithinInput type is used to specify a within operation on a constraint. */
export type WithinInput = {
  /** This is the box to be specified. */
  box: BoxInput;
};
