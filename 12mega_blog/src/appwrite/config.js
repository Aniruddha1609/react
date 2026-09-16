import conf from "../conf/conf.js";
import { Client, ID, Query, Storage, TablesDB } from "appwrite";

export class Service {
    client = new Client();
    tableDB;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.tableDB = new TablesDB(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredimage, status, userId }) {
        try {
            return await this.tableDB.createRow(
                {
                    databaseId: conf.appwriteDatabaseId,
                    tableId: conf.appwriteCollectionId,
                    rowId: slug || ID.unique(),
                    data: {
                        title,
                        content,
                        featuredimage,
                        status,
                        userId,
                    },
                },
            );
        } catch (error) {
            console.log(`Appwrite Service :: createPost :: error ${error}`);
        }
    }

    async updatePost(slug, { title, content, featuredimage, status }) {
        try {
            return await this.tableDB.updateRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredimage,
                    status,
                },
            });
        } catch (error) {
            console.log(`Appwrite service :: update post error :: ${error} `);
        }
    }

    async deletePost(slug) {
        try {
            await this.tableDB.deleteRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            });
            return true;
        } catch (error) {
            console.log(`Appwrite service :: delete post error :: ${error} `);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.tableDB.getRow({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                rowId: slug,
            });
        } catch (error) {
            console.log(`Appwrite service :: get post error :: ${error} `);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tableDB.listRows({
                databaseId: conf.appwriteDatabaseId,
                tableId: conf.appwriteCollectionId,
                queries,
            });
        } catch (error) {
            console.log(`Appwrite service :: get posts error :: ${error} `);
            return false;
        }
    }

    // file upload services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile({
                bucketId: conf.appwriteBucketId,
                fileId: ID.unique,
                file,
            });
        } catch (error) {
            console.log(`Appwrite service :: upload file error :: ${error} `);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile({
                bucketId: conf.appwriteBucketId,
                fileId,
            });
            return true;
        } catch (error) {
            console.log(`Appwrite service :: delete file error :: ${error} `);
            return false;
        }
    }

    previewFile(fileId) {
        try {
            return this.bucket.getFilePreview({
                bucketId: conf.appwriteBucketId,
                fileId,
            });
        } catch (error) {
            console.log(`Appwrite service :: preview file error :: ${error} `);
            return false;
        }
    }
}

const service = new Service();
export default service;
