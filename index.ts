import * as Appdrop from 'appdrop-api';
import btoa from 'btoa';

/**
 * 
 * **************
 * Auth
 * **************
 * 
 */

export interface AuthenticateUserFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.AuthenticateUserParams;
  user_id: string;
}

/**
 * Exchanges an Email and Password to Authenticate a user.
 */
export async function authenticateUser<T>(params: AuthenticateUserFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      user_id,
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/authenticateUser';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/authenticateUser`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('authenticateUser error', error);
    return null;
  }
}

export interface SendPasswordResetEmailFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.SendPasswordResetEmailParams;
  user_id: string;
}

/**
 * Params to exchange a send a password reset email
 */
export async function sendPasswordResetEmail(params: SendPasswordResetEmailFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/sendPasswordResetEmail';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config,
      livemode,
      data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/sendPasswordResetEmail`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.PasswordReset;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('sendPasswordResetEmail error', error);
    return null;
  }
}

/**
* 
* **************
* Billing
* **************
* 
*/

export interface AttachCardToCustomerFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateCardParams;
  stripe_customer_id: string;
  stripe_customer_type: Appdrop.StripeCustomerType;
}

/**
 * Exchanges a Stripe Customer id and Card params for an Entity or User with
 * updated `financial_details`
 */
export async function attachCardToCustomer<T>(params: AttachCardToCustomerFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      stripe_customer_id,
      stripe_customer_type
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/customers/:stripeCustomerId/cards/:stripeCustomerType';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/customers/${stripe_customer_id}/cards/${stripe_customer_type}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('attachCardToCustomer error', error);
    return null;
  }
}

export interface CreateCustomerSubscriptionFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateSubscriptionParams;
  stripe_customer_id: string;
  stripe_customer_type: string;
}

/**
 * Exchanges a Stripe Customer id and new Subscription params for an Entity with
 * updated `financial_details`
 */
export async function createCustomerSubscription<T>(params: CreateCustomerSubscriptionFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      stripe_customer_id,
      stripe_customer_type
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/customers/:stripeCustomerId/subscriptions/:stripeCustomerType';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/customers/${stripe_customer_id}/subscriptions/${stripe_customer_type}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createCustomerSubscription error', error);
    return null;
  }
}

export interface UpdateCustomerSubscriptionFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdateSubscriptionParams;
  stripe_customer_id: string;
  stripe_customer_type: Appdrop.StripeCustomerType;
  stripe_subscription_id: string;
}

/**
 * Exchanges a Stripe Customer id and updated Subscription params for an Entity with
 * updated `financial_details`
 */
export async function updateCustomerSubscription<T>(params: UpdateCustomerSubscriptionFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      stripe_customer_id,
      stripe_customer_type,
      stripe_subscription_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/customers/:stripeCustomerId/subscriptions/:subscriptionId/:stripeCustomerType';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/customers/${stripe_customer_id}/subscriptions/${stripe_subscription_id}/${stripe_customer_type}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateCustomerSubscription error', error);
    return null;
  }
}

export interface CreateCustomerChargeFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateChargeParams;
  order_id: string;
  stripe_customer_id: string;
  stripe_customer_type: Appdrop.StripeCustomerType;
}

/**
 * Exchanges a Stripe customer id and Charge params for a Charge object
 */
export async function createCustomerCharge(params: CreateCustomerChargeFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      order_id,
      stripe_customer_id,
      stripe_customer_type
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/customers/:stripeCustomerId/orders/:orderId/charges/:stripeCustomerType';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/customers/${stripe_customer_id}/orders/${order_id}/charges/${stripe_customer_type}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Charge;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createCustomerCharge error', error);
    return null;
  }
}

export interface CreateCustomerChargeRefundFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateRefundParams;
  order_id: string;
  stripe_customer_id: string;
}

/**
 * Exchanges a Stripe customer id and Refund params for a Refund on an
 * ECommerce product order
 * 
 * @Important Only accessible by authenticated Entity.
 */
export async function createCustomerChargeRefund(params: CreateCustomerChargeRefundFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      order_id,
      stripe_customer_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/customers/:stripeCustomerId/orders/:orderId/refunds';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/customers/${stripe_customer_id}/orders/${order_id}/refunds`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Refund;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createCustomerChargeRefund error', error);
    return null;
  }
}

/**
* 
* **************
* Entities
* **************
* 
*/

export interface UpdateEntityFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdateEnterpriseParams | Appdrop.UpdateOrganizationParams;
  entity_id: string;
}

/**
 * Updates an Enterprise or Organization
 */
export async function updateEntity<T>(params: UpdateEntityFunctionParams) {
  try {
    const {
      app_config,
      data,
      entity_id,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/entities/:entityId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/entities/${entity_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateEntity error', error);
    return null;
  }
}

/**
* 
* **************
* Orders
* **************
* 
*/

export interface CreateOrderFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateOrderParams;
  user_id: string;
}

/**
* Creates an order
*/
export async function createOrder(params: CreateOrderFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/orders`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Order;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createOrder error', error);
    return null;
  }
}

export interface UpdateOrderFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.UpdateOrderParams |
  Appdrop.RequestReturnParams |
  Appdrop.AttachOrderPromoParams;
  order_id: string;
  user_id: string;
}

/**
 * Updates an order
 */
export async function updateOrder(params: UpdateOrderFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      order_id,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/orders/${order_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Order;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateOrder error', error);
    return null;
  }
}

export interface ConfirmOrderFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.ConfirmOrderParams;
  order_id: string;
  user_id: string;
}

/**
 * Confirms an order after the charge was approved
 */
export async function confirmOrder(params: ConfirmOrderFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      order_id,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId/confirm';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/orders/${order_id}/confirm`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Order;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('confirmOrder error', error);
    return null;
  }
}

export interface CancelOrderFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CancelOrderParams;
  order_id: string;
  user_id: string;
}

/**
 * Cancels an order
 */
export async function cancelOrder(params: CancelOrderFunctionParams) {
  try {
    const {
      app_config,
      data,
      order_id,
      livemode,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId/cancel';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}/orders/${order_id}/cancel`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Order;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('cancelOrder error', error);
    return null;
  }
}

/**
* 
* **************
* Products
* **************
* 
*/

export interface SyncPrintfulProductsFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.SyncPrintfulProductsParams;
  project_id: string;
}

/**
* Syncs a Printful store to an ECommerce project.
*/
export async function syncPrintfulProducts(params: SyncPrintfulProductsFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/syncPrintfulProducts';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}/syncPrintfulProducts`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.ECommerceProject;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('syncPrintfulProducts error', error);
    return null;
  }
}

/**
* 
* **************
* Projects
* **************
* 
*/

/**
* Creates a project template
*/
export interface CreateProjectTemplateFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateProjectTemplateParams;
}

export async function createProjectTemplate(params: CreateProjectTemplateFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projectTemplates';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projectTemplates`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.ProjectTemplate;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createProjectTemplate error', error);
    return null;
  }
}

export interface UpdateProjectTemplateFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdateProjectTemplateParams;
  project_template_id: string;
}

/**
 * Updates a project template
 */
export async function updateProjectTemplate(params: UpdateProjectTemplateFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_template_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projectTemplates/:projectTemplateId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projectTemplates/${project_template_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.ProjectTemplate;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateProjectTemplate error', error);
    return null;
  }
}

export interface CreateProjectFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.CreateECommerceProjectParams |
  Appdrop.CreateMarketplaceProjectParams;
}

/**
 * Creates a project.
 * 
 * @Important T must be `Appdrop.ECommerceProject` or `Appdrop.MarketplaceProject`
 */
export async function createProject<T>(params: CreateProjectFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createProject error', error);
    return null;
  }
}

export interface UpdateProjectFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.UpdateECommerceProjectParams |
  Appdrop.UpdateMarketplaceProjectParams;
  project_id: string;
  project_type: Appdrop.ProjectType;
}

/**
 * Updates a project.
 * 
 * @Important T must be `Appdrop.ECommerceProject` or `Appdrop.MarketplaceProject`
 */
export async function updateProject<T>(params: UpdateProjectFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateProject error', error);
    return null;
  }
}

export interface CreateAppFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.CreateAppAndroidParams |
  Appdrop.CreateAppIOSParams |
  Appdrop.CreateAppWebParams;
  project_id: string;
}

/**
 * Creates an app.
 * 
 * @Important T must be `Appdrop.AppAndroid`, `Appdrop.AppIOS` or `Appdrop.AppWeb`
 */
export async function createApp<T>(params: CreateAppFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/apps';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}/apps`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createApp error', error);
    return null;
  }
}

export interface UpdateAppFunctionParams extends Appdrop.APIRequestBody {
  app_id: string;
  data:
  Appdrop.UpdateAppAndroidParams |
  Appdrop.UpdateAppIOSParams |
  Appdrop.UpdateAppWebParams;
  project_id: string;
}

/**
 * Updates an app.
 * 
 * @Important T must be `Appdrop.AppAndroid`, `Appdrop.AppIOS` or `Appdrop.AppWeb`
 */
export async function updateApp<T>(params: UpdateAppFunctionParams) {
  try {
    const {
      app_config,
      app_id,
      data,
      project_id,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/apps/:appId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}/apps/${app_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateApp error', error);
    return null;
  }
}

export interface InitAppStateFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.InitCloudAppParams |
  Appdrop.InitECommerceAppParams |
  Appdrop.InitMarketplaceAppParams;
  project_type: Appdrop.ProjectType;
}

/**
 * 
 * Inits an App Session
 * 
 * @Important T must be `Appdrop.InitCloudAppResponseBody`,
 * `Appdrop.InitMarketplaceAppResponseBody`
 * or `Appdrop.InitEcommerceAppResponseBody`
 * 
 */
export async function initAppState<T>(params: InitAppStateFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_type
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/initAppState/' + project_type as
      'v1/initAppState/cloud' |
      'v1/initAppState/ecommerce' |
      'v1/initAppState/marketplace';
    const method: Appdrop.APIRequestMethod = 'POST';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/initAppState/${project_type}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('initCloudAppState error', error);
    return null;
  }
}

export interface UpdateUserFunctionParams extends Appdrop.APIRequestBody {
  data:
  Appdrop.UpdateProjectUserParams |
  Appdrop.UpdateMarketplaceProjectUserParams |
  Appdrop.UpdateECommerceProjectUserParams;
  user_id: string;
}

/**
 * Updates a user.
 * 
 * @Important – Only users with a valid string at `password_hash`
 * can send password updates without first signing up or signing in.
 * 
 * @Important – T must be `Appdrop.ProjectUser`,
 * `Appdrop.ECommerceProjectUser` or
 * `Appdrop.MarketplaceProjectUser`
 */
export async function updateUser<T>(params: UpdateUserFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      user_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/users/:userId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/users/${user_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateUser error', error);
    return null;
  }
}

export interface CreatePromoFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreatePromoParams;
  project_id: string;
}

export interface CreatePostFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreatePostParams;
}

/**
 * Creates a post.
 * 
 * @Important T must inherit from Appdrop.Post
 */
export async function createPost<T>(params: CreatePostFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/posts';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/posts`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createPost error', error);
    return null;
  }
}

export interface UpdatePostFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdatePostParams;
  post_id: string;
}

/**
 * Updates a post.
 * 
 * @Important T must inherit from Appdrop.Post
 */
export async function updatePost<T>(params: UpdatePostFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      post_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/posts/:postId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/posts/${post_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updatePost error', error);
    return null;
  }
}

/**
 * Creates a promo.
 */
export async function createPromo(params: CreatePromoFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_id,
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/promos';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}/promos`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Promo;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createPromo error', error);
    return null;
  }
}

export interface UpdatePromoFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdatePromoParams;
  project_id: string;
  promo_id: string;
}

/**
 * Updates a promo.
 */
export async function updatePromo(params: UpdatePromoFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      project_id,
      promo_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/promos/:promoId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${project_id}/promos/${promo_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.Promo;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updatePromo error', error);
    return null;
  }
}

export interface CreateRemoteAssetFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateRemoteAssetParams;
}

/**
 * Creates a remote_asset.
 */
export async function createRemoteAsset(params: CreateRemoteAssetFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/remoteAssets';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/remoteAssets`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.RemoteAsset;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createRemoteAsset error', error);
    return null;
  }
}

export interface UpdateRemoteAssetFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdateRemoteAssetParams;
  remote_asset_id: string;
}

/**
 * Updates a remote_asset.
 * 
 * @Important T must inherit from Appdrop.RemoteAsset
 */
export async function updateRemoteAsset(params: UpdateRemoteAssetFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      remote_asset_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/remoteAssets/:remoteAssetId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/remoteAssets/${remote_asset_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as Appdrop.RemoteAsset;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateRemoteAsset error', error);
    return null;
  }
}

export interface CreateThreadFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.CreateThreadParams;
}

/**
 * Creates a thread.
 * 
 * @Important T must inherit from Appdrop.Thread
 */
export async function createThread<T>(params: CreateThreadFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/threads';
    const method: Appdrop.APIRequestMethod = 'PUT';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/threads`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('createThread error', error);
    return null;
  }
}

export interface UpdateThreadFunctionParams extends Appdrop.APIRequestBody {
  data: Appdrop.UpdateThreadParams;
  thread_id: string;
}

/**
 * Updates a thread.
 * 
 * @Important T must inherit from Appdrop.Thread
 */
export async function updateThread<T>(params: UpdateThreadFunctionParams) {
  try {
    const {
      app_config,
      data,
      livemode,
      thread_id
    } = params;
    const _: Appdrop.APIRequestEndpoint = 'v1/projects/:projectId/threads/:threadId';
    const method: Appdrop.APIRequestMethod = 'PATCH';
    const request_body: Appdrop.APIRequestBody = {
      app_config: app_config,
      livemode: livemode,
      data: data
    };
    const response = await fetch(`${Appdrop.APIRequestBase}/v1/projects/${app_config.project_id}/threads/${thread_id}`, {
      headers: {
        "Authorization": `Basic ${btoa(app_config.api_key)}`,
        "Content-Type": 'text/plain'
      },
      body: JSON.stringify(request_body),
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json();
      return response_json as T;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('updateThread error', error);
    return null;
  }
}

/**
 * Params for the `latLongToAddress` function
 */
interface LatLongToAddressParams {
  lat: number;
  long: number;
  google_geocoding_api_key: string;
}

/**
 * Geocode response
 */
interface LatLongToAddressResponse {
  results: {
    address_components: {
      long_name : string;
      short_name : string;
      types : ('postal_code'|'locality'|'administrative_area_level_1'|'country')[];
    }[];
    /**
     * Example: Memphis, TN 38128, USA
     */
    formatted_address: string;
    types: ('postal_code')[];
  }[];
}
/**
 * Exchanges a latitude and longitude for an Address (excludes line1 and line2)
 */
export async function latLongToAddress(params: LatLongToAddressParams) {
  try {
    const {
      lat,
      long,
      google_geocoding_api_key
    } = params;
    const method: Appdrop.APIRequestMethod = 'GET';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${google_geocoding_api_key}`, {
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json() as LatLongToAddressResponse;
      const { results } = response_json;
      const postal_code_result = results.find(result => result.types.length === 1 && result.types[0] === 'postal_code');
      if (postal_code_result === undefined) {
        throw new Error(
          JSON.stringify({
            error: 'invalid lat long',
            params
          })
        );
      }
      const { address_components } = postal_code_result;
      const city_component = address_components
        .find((address_component: any) =>
          address_component.types.includes('locality')
        );
      let city = '';
      if (city_component !== undefined) {
        city = city_component.long_name;
      }
      const country_component = address_components
        .find((address_component: any) =>
          address_component.types.includes('country')
        );
      let country_code = 'US';
      if (country_component !== undefined) {
        country_code = country_component.short_name;
      }
      const state_code_component = address_components
        .find((address_component: any) =>
          address_component.types.includes('administrative_area_level_1')
        );
      let state_code = '';
      if (state_code_component !== undefined) {
        state_code = state_code_component.short_name;
      }
      const zip_component = address_components
        .find((address_component: any) =>
          address_component.types.includes('postal_code')
        );
      let zip = '';
      if (zip_component !== undefined) {
        zip = zip_component.short_name;
      }
      const address: Appdrop.Address = {
        address1: '',
        address2: '',
        city,
        country_code: country_code as Appdrop.CountryCode,
        state_code,
        zip,
      };
      return address;
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('latLongToAddress error', error);
    return null;
  }
}

/**
 * Params for the `addressToLatLong` function
 */
interface AddressToLatLongParams {
  google_geocoding_api_key: string;
  address: Appdrop.Address;
}

/**
 * Geocode response
 */
interface AddressToLatLongResponse {
  results : {
    address_components : {
      long_name : string;
      short_name : string;
      types : ('street_number'|'route'|'subpremise'|'postal_code'|'locality'|'administrative_area_level_1'|'country')[];
    }[];
    /**
     * Example: 505 Church St #1, Nashville, TN 37219, USA
     */
    formatted_address : string;
    geometry : {
       location : {
          lat: number;
          lng: number;
       };
    };
 }[];
}

/**
 * Exchanges an address for a latitude, longitude, and formatted address string
 */
export async function addressToLatLong(params: AddressToLatLongParams) {
  try {
    const {
      address: {
        address1,
        address2,
        city,
        country_code,
        state_code,
        zip,
      },
      google_geocoding_api_key
    } = params;
    let address_str = '';
    if (Appdrop.validString(address1, true)) {
      address_str += (address1 + ', ');
    }
    if (Appdrop.validString(address2, true)) {
      address_str += (address2 + ', ');
    }
    if (Appdrop.validString(city, true)) {
      address_str += (city + ', ');
    }
    if (Appdrop.validString(state_code, true)) {
      address_str += (state_code + ', ');
    }
    if (Appdrop.validString(zip, true)) {
      address_str += (zip + ', ');
    }
    if (Appdrop.validString(country_code, true)) {
      address_str += country_code;
    }
    const address_uri = encodeURI(address_str);
    const method: Appdrop.APIRequestMethod = 'GET';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address_uri}&key=${google_geocoding_api_key}`, {
      method: method
    });
    if (response.status === 200) {
      const response_json = await response.json() as AddressToLatLongResponse;
      const { results } = response_json;
      if (!results || results.length === 0) {
        throw new Error(
          JSON.stringify({
            error: 'invalid lat long',
            params
          })
        );
      }
      const {
        formatted_address,
        geometry: {
          location: {
            lat,
            lng
          }
        }
      } = results[0];
      return {
        address: formatted_address,
        lat,
        long: lng
      };
    }
    else {
      const response_json = await response.json();
      throw new Error(JSON.stringify(response_json, null, '\t'));
    }
  }
  catch (error) {
    console.error('addressToLatLong error', error);
    return null;
  }
}


