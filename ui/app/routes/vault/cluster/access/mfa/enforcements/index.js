/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MfaEnforcementsRoute extends Route {
  @service store;

  model() {
    return this.store.query('mfa-login-enforcement', {}).catch((err) => {
      if (err.httpStatus === 404) {
        return [];
      } else {
        throw err;
      }
    });
  }
  setupController(controller, model) {
    controller.set('model', model);
  }
}
