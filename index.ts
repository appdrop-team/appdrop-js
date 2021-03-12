import {
    APIRequestBase,
    APIRequestBody,
    APIRequestMethod,
    App,
    AppConfig,
    APIRequestEndpoint,
    AuthenticateUserParams,
    ConfirmOrderParams,
    CreateAppParams,
    CreateCardParams,
    CreateChargeParams,
    CreateECommerceProjectParams,
    CreateEnterpriseParams,
    CreateOrderParams,
    CreateOrganizationParams,
    CreateProjectTemplateParams,
    CreateRefundParams,
    CreateSubscriptionParams,
    CreateSupportTicketParams,
    ECommerceProject,
    ECommerceProjectUser,
    InitEcommerceAppParams,
    InitEcommerceAppResponseBody,
    Order,
    ProjectTemplate,
    Refund,
    RequestUserPasswordResetParams,
    RetrieveUserSecurityQuestionParams,
    SupportTicket,
    SyncPrintfulProductsParams,
    UpdateAppParams,
    UpdateECommerceProjectParams,
    UpdateECommerceProjectUserParams,
    UpdateEnterpriseParams,
    UpdateOrderParams,
    UpdateOrganizationParams,
    UpdateProjectTemplateParams,
    UpdateSubscriptionParams,
    StripeCustomerType,
    InitCloudAppParams,
    InitCloudAppResponseBody,
    ProjectUser,
    UpdateProjectUserParams,
    CancelOrderParams,
    Charge,
    RequestReturnParams,
} from 'appdrop-api';
import btoa from 'btoa';

/**
 * 
 * **************
 * Auth
 * **************
 * 
 */

/**
 * Exchanges an Email and Password to Authenticate a project user.
 */
export async function authenticateProjectUser<T>(
    app_config: AppConfig,
    data: AuthenticateUserParams,
    project_user_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/authenticateUser';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/authenticateUser`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('authenticateProjectUser error', error);
        return null;
    }
}

/**
 * Exchanges an email address for an `ProjectUser` object which includes 
 * the `security_question` and `security_answer_hash` property to display 
 * to the resetting user. 
 * 
 * If either property is an empty string, then 
 * the user failed to complete the security section step and must contact support
 * who can set a temporary answer to the security question for the user.
 */
export async function retrieveProjectUserSecurityQuestion<T>(
    app_config: AppConfig,
    data: RetrieveUserSecurityQuestionParams,
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/retrieveUserSecurityQuestion';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/retrieveUserSecurityQuestion`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('retrieveProjectUserSecurityQuestion error', error);
        return null;
    }
}

/**
 * Params to exchange a security answer for authentication.
 * 
 * On success, the returning `ProjectUser` object has a valid string at
 * `password_hash` which is how we know the user previously signed up successfully.
 */
export async function requestProjectUserPasswordReset<T>(
    app_config: AppConfig,
    data: RequestUserPasswordResetParams,
    project_user_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/requestUserPasswordReset';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/requestUserPasswordReset`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('requestProjectUserPasswordReset error', error);
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
 
 /**
 * Exchanges a Stripe Customer id and Card params for an Entity or ProjectUser with
 * updated `financial_details`
 */
export async function attachCardToCustomer<T>(
    app_config: AppConfig,
    data: CreateCardParams,
    stripe_customer_id: string,
    stripe_customer_type: StripeCustomerType
) {
    try {
        const _: APIRequestEndpoint = 'v1/customers/:stripeCustomerId/cards/:stripeCustomerType';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/customers/${stripe_customer_id}/cards/${stripe_customer_type}`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('attachCardToCustomer error', error);
        return null;
    }
}

/**
 * Exchanges a Stripe Customer id and new Subscription params for an Entity with
 * updated `financial_details`
 */
export async function createCustomerSubscription<T>(
    app_config: AppConfig,
    data: CreateSubscriptionParams,
    stripe_customer_id: string,
    stripe_customer_type: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/customers/:stripeCustomerId/subscriptions/:stripeCustomerType';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/customers/${stripe_customer_id}/subscriptions/${stripe_customer_type}`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createCustomerSubscription error', error);
        return null;
    }
}

/**
 * Exchanges a Stripe Customer id and updated Subscription params for an Entity with
 * updated `financial_details`
 */
export async function updateCustomerSubscription<T>(
    app_config: AppConfig,
    data: UpdateSubscriptionParams,
    stripe_customer_id: string,
    stripe_customer_type: StripeCustomerType,
    stripe_subscription_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/customers/:stripeCustomerId/subscriptions/:subscriptionId/:stripeCustomerType';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/customers/${stripe_customer_id}/subscriptions/${stripe_subscription_id}/${stripe_customer_type}`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateCustomerSubscription error', error);
        return null;
    }
}

/**
 * Exchanges a Stripe customer id and Charge params for a Charge object
 */
export async function createCustomerCharge(
    app_config: AppConfig,
    data: CreateChargeParams,
    order_id: string,
    stripe_customer_id: string,
    stripe_customer_type: StripeCustomerType
) {
    try {
        const _: APIRequestEndpoint = 'v1/customers/:stripeCustomerId/orders/:orderId/charges/:stripeCustomerType';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/customers/${stripe_customer_id}/orders/${order_id}/charges/${stripe_customer_type}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Charge;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createCustomerCharge error', error);
        return null;
    }
}

/**
 * Exchanges a Stripe customer id and Refund params for a Refund on an
 * ECommerce product order
 * 
 * @Important Only accessible by authenticated Entity.
 */
export async function createCustomerChargeRefund(
    app_config: AppConfig,
    data: CreateRefundParams,
    order_id: string,
    stripe_customer_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/customers/:stripeCustomerId/orders/:orderId/refunds';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/customers/${stripe_customer_id}/orders/${order_id}/refunds`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Refund;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
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
 
/**
 * Updates an Enterprise or Organization
 */
export async function updateEntity<T>(
    app_config: AppConfig,
    data: UpdateEnterpriseParams|UpdateOrganizationParams,
    entity_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/entities/:entityId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/entities/${entity_id}`, {
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
            throw new Error(JSON.stringify(response_json,null,'\t'));
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
 
 /**
 * Creates an order
 */
export async function createOrder(
    app_config: AppConfig,
    data: CreateOrderParams,
    project_user_id: string
)  {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/orders`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Order;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createOrder error', error);
        return null;
    }
}

/**
 * Updates an order
 */
export async function updateOrder(
    app_config: AppConfig,
    data: UpdateOrderParams|RequestReturnParams,
    project_user_id: string,
    order_id: string
)  {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/orders/${order_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Order;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateOrder error', error);
        return null;
    }
}

/**
 * Confirms an order after the charge was approved
 */
export async function confirmOrder(
    app_config: AppConfig,
    data: ConfirmOrderParams,
    project_user_id: string,
    order_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId/confirm';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/orders/${order_id}/confirm`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Order;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('confirmOrder error', error);
        return null;
    }
}

/**
 * Cancels an order
 */
export async function cancelOrder(
    app_config: AppConfig,
    data: CancelOrderParams,
    project_user_id: string,
    order_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId/orders/:orderId/cancel';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}/orders/${order_id}/cancel`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as Order;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
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
 
 /**
 * Syncs a Printful store to an ECommerce project.
 */
export async function syncPrintfulProducts(
    app_config: AppConfig,
    data: SyncPrintfulProductsParams,
    project_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/syncPrintfulProducts';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${project_id}/syncPrintfulProducts`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ECommerceProject;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
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
export async function createProjectTemplate(
    app_config: AppConfig,
    data: CreateProjectTemplateParams
) {
    try {
        const _: APIRequestEndpoint = 'v1/projectTemplates';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projectTemplates`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ProjectTemplate;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createProjectTemplate error', error);
        return null;
    }
}

/**
 * Updates a project template
 */
export async function updateProjectTemplate(
    app_config: AppConfig,
    data: UpdateProjectTemplateParams,
    project_template_id: string
)  {
    try {
        const _: APIRequestEndpoint = 'v1/projectTemplates/:projectTemplateId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projectTemplates/${project_template_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ProjectTemplate;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateProjectTemplate error', error);
        return null;
    }
}

/**
 * Creates an ECommerce project.
 */
export async function createECommerceProject(
    app_config: AppConfig,
    data: CreateECommerceProjectParams
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ECommerceProject;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createECommerceProject error', error);
        return null;
    }
}

/**
 * Updates an ECommerce project.
 */
export async function updateECommerceProject(
    app_config: AppConfig,
    data: UpdateECommerceProjectParams,
    project_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${project_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ECommerceProject;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateECommerceProject error', error);
        return null;
    }
}

/**
 * Creates an app.
 */
export async function createApp(
    app_config: AppConfig,
    data: CreateAppParams,
    project_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/apps';
        const method: APIRequestMethod = 'PUT';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${project_id}/apps`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as App;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('createApp error', error);
        return null;
    }
}

/**
 * Updates an app.
 */
export async function updateApp(
    app_config: AppConfig,
    data: UpdateAppParams,
    project_id: string,
    app_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/apps/:appId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${project_id}/apps/${app_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as App;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateApp error', error);
        return null;
    }
}

/**
 * Initializes an Cloud app session by:
 * 
 * (1) returning a minted guest user or previously minted returning user (depending on the 
 * `data.project_user_id` value pulled from cache),
 * 
 * (2) returning a minted guest entity or previously minted entity (depending on the 
 * `data.project_user_id` value pulled from cache),
 * 
 * ...
 * 
 * and so on according to InitCloudAppResponseBody
 */
export async function initCloudAppState(
    app_config: AppConfig,
    data: InitCloudAppParams,
) {
    try {
        const _: APIRequestEndpoint = 'v1/initAppState/cloud';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/initAppState/cloud`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as InitCloudAppResponseBody;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('initCloudAppState error', error);
        return null;
    }
}

/**
 * Updates an Cloud project user.
 * 
 * @Important – Only users with a valid string at `password_hash`
 * can send password updates without first signing up or signing in.
 */
export async function updateCloudProjectUser(
    app_config: AppConfig,
    data: UpdateProjectUserParams,
    project_user_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ProjectUser;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateCloudProjectUser error', error);
        return null;
    }
}

/**
 * Initializes an ECommerce app session by:
 * 
 * (1) returning a minted guest user or previously minted returning user (depending on the 
 * `data.project_user_id` value pulled from cache), and
 * 
 * (2) returning the list of products / orders
 */
export async function initECommerceAppState(
    app_config: AppConfig,
    data: InitEcommerceAppParams,
) {
    try {
        const _: APIRequestEndpoint = 'v1/initAppState/ecommerce';
        const method: APIRequestMethod = 'POST';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/initAppState/ecommerce`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as InitEcommerceAppResponseBody;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('initECommerceAppState error', error);
        return null;
    }
}

/**
 * Updates an ECommerce project user.
 * 
 * @Important – Only users with a valid string at `password_hash`
 * can send password updates without first signing up or signing in.
 */
export async function updateECommerceProjectUser(
    app_config: AppConfig,
    data: UpdateECommerceProjectUserParams,
    project_user_id: string
) {
    try {
        const _: APIRequestEndpoint = 'v1/projects/:projectId/users/:userId';
        const method: APIRequestMethod = 'PATCH';
        const request_body: APIRequestBody = {
            app_config: app_config,
            data: data
        };
        const response = await fetch(`${APIRequestBase}/v1/projects/${app_config.project_id}/users/${project_user_id}`, {
            headers: {
                "Authorization": `Basic ${btoa(app_config.api_key)}`,
                "Content-Type": 'text/plain'
            },
            body: JSON.stringify(request_body),
            method: method
        });
        if (response.status === 200) {
            const response_json = await response.json(); 
            return response_json as ECommerceProjectUser;
        }
        else {
            const response_json = await response.json(); 
            throw new Error(JSON.stringify(response_json,null,'\t'));
        }
    }
    catch (error) {
        console.error('updateECommerceProjectUser error', error);
        return null;
    }
}
