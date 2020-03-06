// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protosTypes from '../protos/protos';
import * as assert from 'assert';
import {describe, it} from 'mocha';
const productsearchModule = require('../src');

const FAKE_STATUS_CODE = 1;
class FakeError {
  name: string;
  message: string;
  code: number;
  constructor(n: number) {
    this.name = 'fakeName';
    this.message = 'fake message';
    this.code = n;
  }
}
const error = new FakeError(FAKE_STATUS_CODE);
export interface Callback {
  (err: FakeError | null, response?: {} | null): void;
}

export class Operation {
  constructor() {}
  promise() {}
}
function mockSimpleGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error: FakeError | null
) {
  return (actualRequest: {}, options: {}, callback: Callback) => {
    assert.deepStrictEqual(actualRequest, expectedRequest);
    if (error) {
      callback(error);
    } else if (response) {
      callback(null, response);
    } else {
      callback(null);
    }
  };
}
function mockLongRunningGrpcMethod(
  expectedRequest: {},
  response: {} | null,
  error?: {} | null
) {
  return (request: {}) => {
    assert.deepStrictEqual(request, expectedRequest);
    const mockOperation = {
      promise() {
        return new Promise((resolve, reject) => {
          if (error) {
            reject(error);
          } else {
            resolve([response]);
          }
        });
      },
    };
    return Promise.resolve([mockOperation]);
  };
}
describe('v1p3beta1.ProductSearchClient', () => {
  it('has servicePath', () => {
    const servicePath =
      productsearchModule.v1p3beta1.ProductSearchClient.servicePath;
    assert(servicePath);
  });
  it('has apiEndpoint', () => {
    const apiEndpoint =
      productsearchModule.v1p3beta1.ProductSearchClient.apiEndpoint;
    assert(apiEndpoint);
  });
  it('has port', () => {
    const port = productsearchModule.v1p3beta1.ProductSearchClient.port;
    assert(port);
    assert(typeof port === 'number');
  });
  it('should create a client with no option', () => {
    const client = new productsearchModule.v1p3beta1.ProductSearchClient();
    assert(client);
  });
  it('should create a client with gRPC fallback', () => {
    const client = new productsearchModule.v1p3beta1.ProductSearchClient({
      fallback: true,
    });
    assert(client);
  });
  it('has initialize method and supports deferred initialization', async () => {
    const client = new productsearchModule.v1p3beta1.ProductSearchClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.productSearchStub, undefined);
    await client.initialize();
    assert(client.productSearchStub);
  });
  it('has close method', () => {
    const client = new productsearchModule.v1p3beta1.ProductSearchClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });
  describe('createProductSet', () => {
    it('invokes createProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateProductSetRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateProductSetRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createProductSet(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getProductSet', () => {
    it('invokes getProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getProductSet(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateProductSet', () => {
    it('invokes updateProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest = {};
      request.productSet = {};
      request.productSet.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IUpdateProductSetRequest = {};
      request.productSet = {};
      request.productSet.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateProductSet(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteProductSet', () => {
    it('invokes deleteProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteProductSet(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createProduct', () => {
    it('invokes createProduct without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateProductRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createProduct(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createProduct with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateProductRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createProduct(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getProduct', () => {
    it('invokes getProduct without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetProductRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getProduct(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getProduct with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetProductRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getProduct(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('updateProduct', () => {
    it('invokes updateProduct without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IUpdateProductRequest = {};
      request.product = {};
      request.product.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.updateProduct(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes updateProduct with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IUpdateProductRequest = {};
      request.product = {};
      request.product.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.updateProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.updateProduct(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteProduct', () => {
    it('invokes deleteProduct without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteProductRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteProduct(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteProduct with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteProductRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteProduct = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteProduct(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('createReferenceImage', () => {
    it('invokes createReferenceImage without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.createReferenceImage(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes createReferenceImage with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.ICreateReferenceImageRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.createReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.createReferenceImage(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('deleteReferenceImage', () => {
    it('invokes deleteReferenceImage without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.deleteReferenceImage(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes deleteReferenceImage with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IDeleteReferenceImageRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.deleteReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.deleteReferenceImage(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('getReferenceImage', () => {
    it('invokes getReferenceImage without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.getReferenceImage(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes getReferenceImage with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IGetReferenceImageRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.getReferenceImage = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.getReferenceImage(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('addProductToProductSet', () => {
    it('invokes addProductToProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.addProductToProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes addProductToProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IAddProductToProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.addProductToProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.addProductToProductSet(request, (err: FakeError, response: {}) => {
        assert(err instanceof FakeError);
        assert.strictEqual(err.code, FAKE_STATUS_CODE);
        assert(typeof response === 'undefined');
        done();
      });
    });
  });
  describe('removeProductFromProductSet', () => {
    it('invokes removeProductFromProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request,
        expectedResponse,
        null
      );
      client.removeProductFromProductSet(request, (err: {}, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });

    it('invokes removeProductFromProductSet with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IRemoveProductFromProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.removeProductFromProductSet = mockSimpleGrpcMethod(
        request,
        null,
        error
      );
      client.removeProductFromProductSet(
        request,
        (err: FakeError, response: {}) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          assert(typeof response === 'undefined');
          done();
        }
      );
    });
  });
  describe('importProductSets', () => {
    it('invokes importProductSets without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IImportProductSetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        expectedResponse
      );
      client
        .importProductSets(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then((responses: [Operation]) => {
          assert.deepStrictEqual(responses[0], expectedResponse);
          done();
        })
        .catch((err: {}) => {
          done(err);
        });
    });

    it('invokes importProductSets with error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IImportProductSetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock gRPC layer
      client._innerApiCalls.importProductSets = mockLongRunningGrpcMethod(
        request,
        null,
        error
      );
      client
        .importProductSets(request)
        .then((responses: [Operation]) => {
          const operation = responses[0];
          return operation ? operation.promise() : {};
        })
        .then(() => {
          assert.fail();
        })
        .catch((err: FakeError) => {
          assert(err instanceof FakeError);
          assert.strictEqual(err.code, FAKE_STATUS_CODE);
          done();
        });
    });
  });
  describe('listProductSets', () => {
    it('invokes listProductSets without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductSetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listProductSets = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listProductSets(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listProductSetsStream', () => {
    it('invokes listProductSetsStream without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductSetsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listProductSets = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listProductSetsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listProducts', () => {
    it('invokes listProducts without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listProducts = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listProducts(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listProductsStream', () => {
    it('invokes listProductsStream without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductsRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listProducts = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listProductsStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listReferenceImages', () => {
    it('invokes listReferenceImages without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listReferenceImages(request, (err: FakeError, response: {}) => {
        assert.ifError(err);
        assert.deepStrictEqual(response, expectedResponse);
        done();
      });
    });
  });
  describe('listReferenceImagesStream', () => {
    it('invokes listReferenceImagesStream without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListReferenceImagesRequest = {};
      request.parent = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listReferenceImages = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listReferenceImagesStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
  describe('listProductsInProductSet', () => {
    it('invokes listProductsInProductSet without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {};
      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      client.listProductsInProductSet(
        request,
        (err: FakeError, response: {}) => {
          assert.ifError(err);
          assert.deepStrictEqual(response, expectedResponse);
          done();
        }
      );
    });
  });
  describe('listProductsInProductSetStream', () => {
    it('invokes listProductsInProductSetStream without error', done => {
      const client = new productsearchModule.v1p3beta1.ProductSearchClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      // Initialize client before mocking
      client.initialize();
      // Mock request
      const request: protosTypes.google.cloud.vision.v1p3beta1.IListProductsInProductSetRequest = {};
      request.name = '';
      // Mock response
      const expectedResponse = {response: 'data'};
      // Mock Grpc layer
      client._innerApiCalls.listProductsInProductSet = (
        actualRequest: {},
        options: {},
        callback: Callback
      ) => {
        assert.deepStrictEqual(actualRequest, request);
        callback(null, expectedResponse);
      };
      const stream = client
        .listProductsInProductSetStream(request, {})
        .on('data', (response: {}) => {
          assert.deepStrictEqual(response, expectedResponse);
          done();
        })
        .on('error', (err: FakeError) => {
          done(err);
        });
      stream.write(expectedResponse);
    });
  });
});
