/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  replicationMode: service(),
  beforeModel() {
    this.replicationMode.setMode(null);
  },
  model() {
    return this.modelFor('application');
  },
});
