import { Directive } from '@angular/core';

@Directive()
export abstract class PdfViewerDataComponent {
  rate_schedule: {
    endorsement_settings: {
      endorsements: [
        {
          object: 'Power Units';
          action: ['Remove', 'Add'];
          prorate_type: 'Average Per Unit';
          rate: null;
          prorate: true;
          permissions: 'Self Service';
          _id: '62edd7617bd1a32b170a71bb';
        },
        {
          object: 'Power Units';
          action: ['Change'];
          prorate_type: 'No Rate';
          rate: null;
          prorate: true;
          permissions: 'Self Service';
          _id: '62edd7617bd1a32b170a71bc';
        },
        {
          object: 'Drivers';
          action: ['Change', 'Remove', 'Add'];
          prorate_type: 'No Rate';
          rate: null;
          prorate: true;
          permissions: 'Self Service';
          _id: '62edd7617bd1a32b170a71bd';
        },
        {
          object: 'DOT';
          action: ['Change', 'Remove', 'Add'];
          prorate_type: 'No Rate';
          rate: null;
          prorate: true;
          permissions: 'Self Service';
          _id: '62edd7617bd1a32b170a71be';
        }
      ];
      fees: [];
    };
    policy_number_settings: {
      current_block: [];
      issued_by: 'Self Generating';
      custom_format: [
        {
          format: 'String';
          value: 'SKY';
          length: 1;
          _id: '63a20dcef3a45e434c5363d3';
        },
        {
          format: 'Separator';
          value: '-';
          length: 1;
          _id: '63a20dcef3a45e434c5363d4';
        },
        {
          format: 'Random Numbers';
          value: null;
          length: 7;
          _id: '63a20dcef3a45e434c5363d5';
        },
        {
          format: 'Separator';
          value: '-';
          length: 1;
          _id: '63a20dcef3a45e434c5363d6';
        },
        {
          format: 'Policy Sequence';
          value: null;
          length: 2;
          _id: '63a20dcef3a45e434c5363d7';
        }
      ];
    };
    owner: {
      account_id: '62210d2630652cd01506b0ac';
      account_type: 'Client';
      company_name: 'Stadnick MGA';
    };
    settings: { losses: { active: false }; commodities: { active: true } };
    _id: '6229866307c7d3e5ef40aa43';
    status: 'Active';
    program: {
      commision: { rate_type: 'Percentage'; rate: 18 };
      owner: {
        account_id: '62210d2630652cd01506b0ac';
        program_carrier_name: 'Skylab Specialty Program';
        account_type: 'Client';
        company_name: 'Stadnick MGA';
        program_manager: 'Bruce Wayne';
        program_manager_email: 'the@bwayne.com';
        program_manager_phone: '12345646';
      };
      taxes_and_fees: 'Premium Taxes Standard';
      compliance_management: 'Self Managed';
      financing_settings: [];
      _id: '6226cd52a1289b68f773e2de';
      title: 'Skylab Specialty Program';
      program_type: 'Distrubuted Locked';
      rating_config: 'Not Rated';
      status: 'Active';
      line_of_coverage: '620bf653f6de300dd98c603b';
      coverage_requirements: [];
      created_at: '2022-03-08T03:28:18.354Z';
      updated_at: '2022-12-08T21:14:14.363Z';
      access: [
        {
          commision: { rate_type: 'Percentage'; rate: 0 };
          connection: '6222c8f1d2c9f37f2055aff9';
          account: '62225827fb1b66bfbad46aa5';
          account_type: 'Client';
          company_name: 'Jones MGA';
          status: 'Active';
          permissions: 'Client';
          _id: '62c7a367bfbaaf88b6ca1aa7';
        }
      ];
      __v: 0;
      documents: [
        {
          document: '622ca4e7742ebbc706860e77';
          required: false;
          signature_required: false;
          _id: '622ca4e8d2f2beabaa9b770d';
        },
        {
          document: '622cb105742ebbc706860eaf';
          required: false;
          signature_required: false;
          _id: '622cb106a49113eedd252a0d';
        }
      ];
      subscription: '62bafb4098e7a3a054a6ab1d';
      lines_of_coverage: ['620bf653f6de300dd98c603b'];
      modules: [
        {
          authentication: {
            method: 'Bearer';
            user_name: 'r.stadnick@skylabinsurancesolutions.com';
            password: 'r.stadnick+test';
            api_key: null;
          };
          authentication_test: {
            method: 'Bearer';
            user_name: 'r.stadnick+test@skylabinsurancesolutions.com';
            password: 'r.stadnick+test';
            api_key: null;
          };
          rating_factors: [];
          module: '632380166e215394ac7fa616';
          module_title: 'Speed Gauge';
          status: 'Active';
          error: null;
          _id: '632492c1c5f0852592dff719';
        }
      ];
      treaty_years: [
        {
          treaty_eff_date: {
            date: '2022-08-01T06:00:00.000Z';
            year: 2022;
            month: 7;
            day: 1;
          };
          treaty_exp_date: {
            date: '2023-07-30T06:00:00.000Z';
            year: 2023;
            month: 6;
            day: 30;
          };
          capacity: 20000000;
          max_policy_limit: 1000000;
          base_commision_rate_type: 'Percentage';
          base_commision_rate: 18;
          _id: '63691f908931d9c3df62bdc1';
          risk_participate: [];
        }
      ];
    };
    base_rate: 10000;
    created_at: '2022-03-10T05:02:27.914Z';
    updated_at: '2022-12-29T22:17:53.072Z';
    start_date: '2022-04-11T23:24:17.526Z';
    limits: [
      {
        limit: 1000000;
        split_limit: null;
        rate_type: 'Factor';
        rate: 1.1;
        _id: '63cf05f7e1a073e715a9579f';
      },
      {
        limit: 950000;
        split_limit: null;
        rate_type: 'Factor';
        rate: 1;
        _id: '63cf05d9e1a073e715a955f5';
      },
      {
        limit: 750000;
        split_limit: null;
        rate_type: 'Factor';
        rate: 0.95;
        _id: '63cf05dde1a073e715a956ca';
      }
    ];
    fees: [
      {
        selected: true;
        name: 'Policy';
        rate_type: 'Percentage';
        rate: 6;
        earned: 'Accrued';
        tax_exempt: false;
        rate_application: 'On Policy';
        required: true;
        _id: '623858d33f04363fae678834';
      },
      {
        selected: true;
        name: 'Technology';
        rate_type: 'Flat Rate';
        rate: 150;
        earned: 'Fully Earned';
        tax_exempt: false;
        rate_application: 'On Policy';
        required: true;
        _id: '62ee7aa332b6553af294ce16';
      }
    ];
    coverage_options: [
      {
        title: 'Hired Autos';
        custom_title: null;
        description: null;
        status: 'Offered';
        access: ['Rate Schedule Owner', 'Program Owner'];
        options: [
          {
            limit: '1000';
            split_limit: null;
            rate_type: 'Flat Rate';
            rate: 1000;
            rate_application: 'On Policy';
            rating_factor: {
              custom_field_default_value: null;
              _id: '62cc4fa6140cc1f9dde0cb6e';
              rating_title: 'Number of Units';
              system: 'System';
              custom_feild_name: 'power_units';
              input_kind: 'Count';
              rating_stage: 'Power Units';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-07-11T16:28:22.743Z';
              updated_at: '2022-07-12T11:47:29.630Z';
              selectors: [
                {
                  title: 'Is In Between';
                  description: 'Number of units is between {{value_1}} and {{value_2}}';
                  _id: '62cc4fd6140cc1f9dde0cf50';
                },
                {
                  title: 'Is Less Than';
                  description: 'Count is less than {{value}}';
                  _id: '62cc4ff0140cc1f9dde0d168';
                },
                {
                  title: 'Is Greater Than';
                  description: 'Count is greater than {{value}}';
                  _id: '62cc4ffc140cc1f9dde0d25e';
                }
              ];
              modifiers: [];
              __v: 0;
            };
            selector: 'Is In Between';
            inputs: [
              { value: 0; _id: '6393ba4467fb1e2800a772ca' },
              { value: 1; _id: '6393ba4467fb1e2800a772cb' }
            ];
            is_default: false;
            _id: '6393ba4467fb1e2800a772c9';
          },
          {
            limit: '1000';
            split_limit: null;
            rate_type: 'Flat Rate';
            rate: 2000;
            rate_application: 'On Policy';
            rating_factor: {
              custom_field_default_value: null;
              _id: '62cc4fa6140cc1f9dde0cb6e';
              rating_title: 'Number of Units';
              system: 'System';
              custom_feild_name: 'power_units';
              input_kind: 'Count';
              rating_stage: 'Power Units';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-07-11T16:28:22.743Z';
              updated_at: '2022-07-12T11:47:29.630Z';
              selectors: [
                {
                  title: 'Is In Between';
                  description: 'Number of units is between {{value_1}} and {{value_2}}';
                  _id: '62cc4fd6140cc1f9dde0cf50';
                },
                {
                  title: 'Is Less Than';
                  description: 'Count is less than {{value}}';
                  _id: '62cc4ff0140cc1f9dde0d168';
                },
                {
                  title: 'Is Greater Than';
                  description: 'Count is greater than {{value}}';
                  _id: '62cc4ffc140cc1f9dde0d25e';
                }
              ];
              modifiers: [];
              __v: 0;
            };
            selector: 'Is In Between';
            inputs: [
              { value: 2; _id: '6393ba4467fb1e2800a772cd' },
              { value: 4; _id: '6393ba4467fb1e2800a772ce' }
            ];
            is_default: false;
            _id: '6393ba4467fb1e2800a772cc';
          }
        ];
        documents: [];
        _id: '6393ba4467fb1e2800a772c8';
      },
      {
        title: 'Non Owned';
        custom_title: null;
        description: null;
        status: 'Offered';
        access: [];
        options: [
          {
            limit: '1200';
            split_limit: null;
            rate_type: 'Flat Rate';
            rate: 136;
            rate_application: 'On Policy';
            rating_factor: {
              account_id: null;
              _id: '62bfae99f6340dfa3e57b55f';
              rating_title: 'Number of Employees';
              system: 'System';
              rating_stage: 'DOT';
              access: [];
              active: true;
              description: '';
              hints: [];
              created_at: '2022-07-02T02:34:01.948Z';
              updated_at: '2022-09-27T17:08:53.578Z';
              selectors: [
                {
                  title: 'Is Greater Than';
                  description: 'If the number of employees is greater than {{value}}';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '62c06348307684227d061d32';
                    }
                  ];
                  _id: '62c06348307684227d061d31';
                }
              ];
              modifiers: [];
              __v: 0;
              custom_feild_name: 'number_of_employees';
              input_kind: 'Number';
              custom_field_default_value: 0;
            };
            selector: 'Is In Between';
            inputs: [
              { value: 1; _id: '63c98665348e10d66cc34993' },
              { value: 125; _id: '63c98665348e10d66cc34994' }
            ];
            is_default: false;
            _id: '63c98665348e10d66cc34992';
          }
        ];
        documents: [];
        _id: '63c98665348e10d66cc34991';
      }
    ];
    states: [
      {
        is_active: true;
        start_date: '2022-03-14T15:41:06.323Z';
        end_date: null;
        base_rate_adjustment: 0.952;
        base_rate_type: 'Factor';
        state: 'TX';
        fees_taxable: true;
        _id: '62518c1a2ee5dbc148240b6d';
        fees: [
          {
            required: true;
            selected: true;
            name: 'Other Fee';
            rate_type: 'Flat Rate';
            rate: 150;
            earned: 'Fully Earned';
            tax_exempt: false;
            rate_application: 'On Policy';
            _id: '633189fa1a6d525a287b87f4';
          },
          {
            required: true;
            selected: true;
            name: 'SL Service Charge';
            rate_type: 'Percentage';
            rate: 0.015;
            earned: 'Fully Earned';
            tax_exempt: false;
            rate_application: 'On Policy';
            _id: '63318a0a1a6d525a287b8800';
          }
        ];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'TX';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '626ae4b91a51da6168e9f702';
          },
          {
            title: 'SL Tax';
            jurisdiction: 'TX';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.11;
            _id: '633189e71a6d525a287b87dc';
          }
        ];
        documents: [
          {
            merge_tag: { tag: 'Policy Deck'; index: 0; base: false };
            title: 'Texas UM Selction.pdf';
            description: null;
            stages: ['Policy'];
            required: true;
            active: true;
            document: {
              _id: '63d96e3ebfa076bd03a83bbf';
              updated_at: '2023-01-31T19:38:38.149Z';
              created_by: '61f3f3103db0ca3687dc6b5f';
              account_id: '62210d2630652cd01506b0ac';
              is_deleted: false;
              fieldname: 'file';
              originalname: 'Idaho UM Selction.pdf';
              encoding: '7bit';
              mimetype: 'application/pdf';
              size: 84969;
              acl: 'private';
              contentType: 'application/pdf';
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/5f2e5/Idaho UM Selction.pdf';
              Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/5f2e5/Idaho UM Selction.pdf';
              Key: '62210d2630652cd01506b0ac/5f2e5/Idaho UM Selction.pdf';
              Bucket: 'skylabis-accounts';
              region: 'us-west-2';
              metadata: {
                user_id: '61f3f3103db0ca3687dc6b5f';
                account_id: '62210d2630652cd01506b0ac';
              };
              created_at: '2023-01-31T19:38:38.155Z';
              __v: 0;
            };
            access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
            _id: '63d96e4b2708e624b3ffcc21';
          }
        ];
      },
      {
        is_active: true;
        start_date: '2022-03-14T15:41:06.323Z';
        end_date: null;
        base_rate_adjustment: 16011.72;
        base_rate_type: 'Flat Rate';
        state: 'FL';
        fees_taxable: false;
        _id: '62fbdae429955f11ccb7d4b4';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'FL';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '638e32b4e6fdd8039b936019';
          }
        ];
        documents: [
          {
            merge_tag: {
              tag: 'Policy Forms (Merge Tag - policy-deck)';
              index: 0;
              base: false;
            };
            title: 'FL Amendatory Endorsement.docx.pdf';
            description: null;
            stages: ['Application'];
            required: false;
            active: true;
            document: {
              _id: '63d96eb1bfa076bd03a83bc5';
              updated_at: '2023-01-31T19:40:33.146Z';
              created_by: '61f3f3103db0ca3687dc6b5f';
              account_id: '62210d2630652cd01506b0ac';
              is_deleted: false;
              fieldname: 'file';
              originalname: 'Texas Amendatory Endorsement.docx.pdf';
              encoding: '7bit';
              mimetype: 'application/pdf';
              size: 348797;
              acl: 'private';
              contentType: 'application/pdf';
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/b41c1/Texas Amendatory Endorsement.docx.pdf';
              Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/b41c1/Texas Amendatory Endorsement.docx.pdf';
              Key: '62210d2630652cd01506b0ac/b41c1/Texas Amendatory Endorsement.docx.pdf';
              Bucket: 'skylabis-accounts';
              region: 'us-west-2';
              metadata: {
                user_id: '61f3f3103db0ca3687dc6b5f';
                account_id: '62210d2630652cd01506b0ac';
              };
              created_at: '2023-01-31T19:40:33.149Z';
              __v: 0;
            };
            access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
            _id: '63d96ebd2708e624b3ffcdbb';
          }
        ];
      },
      {
        base_rate_type: 'Factor';
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-14T17:31:39.747Z';
        base_rate_adjustment: 1;
        state: 'CO';
        _id: '622f7e0bda883cd78dfd2b85';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'CO';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '62aa5554758a932c5701afff';
          }
        ];
        documents: [];
      },
      {
        base_rate_type: 'Factor';
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-14T17:31:39.747Z';
        base_rate_adjustment: 1.075;
        state: 'GA';
        _id: '622f7ef2da883cd78dfd2bad';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'GA';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '63d293b120506494a84a1128';
          }
        ];
        documents: [
          {
            merge_tag: { tag: 'Policy Deck'; index: 0; base: false };
            title: 'GA UM Selction.pdf';
            description: null;
            stages: ['Application'];
            required: false;
            active: true;
            document: {
              _id: '63d983f2bfa076bd03a83c4c';
              updated_at: '2023-01-31T21:11:14.323Z';
              created_by: '61f3f3103db0ca3687dc6b5f';
              account_id: '62210d2630652cd01506b0ac';
              is_deleted: false;
              fieldname: 'file';
              originalname: 'Idaho UM Selction.pdf';
              encoding: '7bit';
              mimetype: 'application/pdf';
              size: 84969;
              acl: 'private';
              contentType: 'application/pdf';
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/77656/Idaho UM Selction.pdf';
              Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/77656/Idaho UM Selction.pdf';
              Key: '62210d2630652cd01506b0ac/77656/Idaho UM Selction.pdf';
              Bucket: 'skylabis-accounts';
              region: 'us-west-2';
              metadata: {
                user_id: '61f3f3103db0ca3687dc6b5f';
                account_id: '62210d2630652cd01506b0ac';
              };
              created_at: '2023-01-31T21:11:14.325Z';
              __v: 0;
            };
            access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
            _id: '63d983fc2de481cb6d4c401c';
          }
        ];
      },
      {
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-15T00:27:39.268Z';
        end_date: null;
        base_rate_adjustment: 0.95;
        base_rate_type: 'Factor';
        state: 'MT';
        _id: '6230a58113b685164f73b53c';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-15T00:27:39.268Z';
        end_date: null;
        base_rate_adjustment: 0.85;
        base_rate_type: 'Factor';
        state: 'ID';
        _id: '62309b3e13b685164f73b0ac';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        base_rate_type: 'Factor';
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-15T00:27:39.268Z';
        base_rate_adjustment: 1;
        state: 'AR';
        _id: '622ffe6ded54f4a6681f71b7';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-21T20:30:06.555Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'AK';
        _id: '6238ec45c58279e056ae4399';
        fees: [];
        coverage_options: [
          {
            title: 'Um/Uim';
            custom_title: null;
            description: null;
            status: 'Offered';
            access: [];
            options: [
              {
                limit: '10000';
                split_limit: null;
                rate_type: 'Flat Rate';
                rate: 136;
                rate_application: 'On Policy';
                rating_factor: {
                  custom_field_default_value: null;
                  _id: '62cc4fa6140cc1f9dde0cb6e';
                  rating_title: 'Number of Units';
                  system: 'System';
                  custom_feild_name: 'power_units';
                  input_kind: 'Count';
                  rating_stage: 'Power Units';
                  access: [];
                  account_id: null;
                  active: true;
                  description: null;
                  created_at: '2022-07-11T16:28:22.743Z';
                  updated_at: '2022-07-12T11:47:29.630Z';
                  selectors: [
                    {
                      title: 'Is In Between';
                      description: 'Number of units is between {{value_1}} and {{value_2}}';
                      _id: '62cc4fd6140cc1f9dde0cf50';
                    },
                    {
                      title: 'Is Less Than';
                      description: 'Count is less than {{value}}';
                      _id: '62cc4ff0140cc1f9dde0d168';
                    },
                    {
                      title: 'Is Greater Than';
                      description: 'Count is greater than {{value}}';
                      _id: '62cc4ffc140cc1f9dde0d25e';
                    }
                  ];
                  modifiers: [];
                  __v: 0;
                };
                selector: 'Is Greater Than';
                inputs: [{ value: 0; _id: '63446afd5c6ed82f7ea68ca7' }];
                is_default: true;
                _id: '63446afd5c6ed82f7ea68ca6';
              }
            ];
            documents: [
              {
                merge_tag: { tag: null; index: 1; base: false };
                active: true;
                title: 'AK UM PIP';
                description: '';
                stages: ['Application'];
                required: false;
                document: {
                  _id: '63173cdbce59a9e6da7919ef';
                  created_by: null;
                  account_id: '62210d2630652cd01506b0ac';
                  is_deleted: true;
                  data: {
                    account_id: '62210d2630652cd01506b0ac';
                    rate_owner: '62210d2630652cd01506b0ac';
                    policy_id: '62b7aa3e279878425f6a0266';
                  };
                  fieldname: 'Texas UM_UIM Selection.pdf';
                  originalname: 'Texas UM_UIM Selection.pdf';
                  mimetype: 'application/pdf';
                  size: 311797;
                  acl: 'private';
                  contentType: 'application/pdf';
                  url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf';
                  Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf';
                  Key: '62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf';
                  Bucket: 'skylabis-accounts';
                  region: 'us-west-2';
                  metadata: {
                    account_id: '62210d2630652cd01506b0ac';
                    rate_owner: '62210d2630652cd01506b0ac';
                    policy_id: '62b7aa3e279878425f6a0266';
                  };
                  created_at: '2022-09-06T12:28:11.896Z';
                  updated_at: '2022-09-06T12:28:11.896Z';
                  __v: 0;
                };
                access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
                _id: '63446afd5c6ed82f7ea68ca8';
              }
            ];
            _id: '634456bc7c3d5d53c907bed8';
          }
        ];
        taxes: [];
        documents: [];
      },
      {
        fees_taxable: false;
        is_active: true;
        start_date: '2022-03-21T20:30:06.555Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'NM';
        _id: '6238ecddc58279e056ae446a';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-04-07T16:36:31.215Z';
        end_date: null;
        base_rate_adjustment: 1.5;
        base_rate_type: 'Factor';
        state: 'CA';
        fees_taxable: false;
        _id: '6324c9f77f080b5b8e103b72';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'CA';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '638e2e8fde83dbd2e312d4e1';
          }
        ];
        documents: [];
      },
      {
        fees_taxable: false;
        is_active: true;
        start_date: '2022-04-07T16:36:31.215Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'KY';
        _id: '624f2ad320da8a3ca1280d1a';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-04-28T23:11:36.472Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'MD';
        fees_taxable: false;
        _id: '626b204a630558c31e8bd16b';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'MD';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.54;
            _id: '626b2068630558c31e8bd1e5';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-06-16T23:28:37.485Z';
        end_date: null;
        base_rate_adjustment: 1.125;
        base_rate_type: 'Factor';
        state: 'TN';
        fees_taxable: false;
        _id: '62abc1967e1fc337ff571ba2';
        fees: [];
        coverage_options: [
          {
            title: 'Um/Uim';
            custom_title: null;
            description: null;
            status: 'Required';
            access: [];
            options: [
              {
                limit: '10000';
                split_limit: null;
                rate_type: 'Flat Rate';
                rate: 129;
                rate_application: 'Per Unit';
                rating_factor: null;
                selector: null;
                inputs: [];
                is_default: false;
                _id: '633e0e59c05fe39c97d765b1';
              }
            ];
            documents: [];
            _id: '633e0e59c05fe39c97d765b0';
          }
        ];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'TN';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.054;
            _id: '62abc1a27e1fc337ff571c1f';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-06-23T23:55:11.556Z';
        end_date: null;
        base_rate_adjustment: 1.25;
        base_rate_type: 'Factor';
        state: 'MI';
        fees_taxable: true;
        _id: '62b4ff6ce1eadfadd3c9d745';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'MI';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.54;
            _id: '62b4ff78e1eadfadd3c9d74e';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-06-26T00:33:03.793Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'AL';
        fees_taxable: false;
        _id: '62b7af4c279878425f6a04ff';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'AL';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '62b7af7b279878425f6a0508';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-07-08T18:50:18.097Z';
        end_date: null;
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'AZ';
        fees_taxable: false;
        _id: '62c87fe06d7c0717e2a57668';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'AZ';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.054;
            _id: '62c87fe76d7c0717e2a57671';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-07-19T16:16:53.316Z';
        end_date: null;
        base_rate_adjustment: 1.023;
        base_rate_type: 'Factor';
        state: 'IL';
        fees_taxable: false;
        _id: '62d6d9edcae8b3531561678d';
        fees: [];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'IL';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 0.54;
            _id: '62d6d9f5cae8b35315616798';
          }
        ];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-07-21T19:58:58.479Z';
        end_date: null;
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'OR';
        fees_taxable: false;
        _id: '62d9b2b74ccbbbda5f0f4667';
        fees: [];
        coverage_options: [
          {
            custom_title: null;
            title: 'Um/Uim';
            description: null;
            status: 'Offered';
            access: [];
            options: [
              {
                limit: '85000';
                rate_type: 'Flat Rate';
                rate: 210;
                rate_application: 'Per Unit';
                rating_factor: null;
                selector: null;
                inputs: [];
                is_default: false;
                _id: '630e5c927e6ce699274e799d';
              }
            ];
            documents: [
              {
                merge_tag: { tag: null; index: 1; base: false };
                active: true;
                title: 'Oregon UM';
                description: '';
                stages: ['Application'];
                required: true;
                document: {
                  _id: '630e3da65602be3c5f5bb3ee';
                  updated_at: '2022-08-30T16:41:10.481Z';
                  created_by: '61f3f3103db0ca3687dc6b5f';
                  account_id: '62210d2630652cd01506b0ac';
                  is_deleted: false;
                  fieldname: 'file';
                  originalname: 'Oregon UM - Lower Limit.pdf';
                  encoding: '7bit';
                  mimetype: 'application/pdf';
                  size: 35024;
                  acl: 'private';
                  contentType: 'application/pdf';
                  url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf';
                  Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf';
                  Key: '62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf';
                  Bucket: 'skylabis-accounts';
                  region: 'us-west-2';
                  metadata: {
                    user_id: '61f3f3103db0ca3687dc6b5f';
                    account_id: '62210d2630652cd01506b0ac';
                  };
                  created_at: '2022-08-30T16:41:10.483Z';
                  __v: 0;
                };
                access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
                _id: '630e5c927e6ce699274e799e';
              }
            ];
            _id: '630e3bf17e6ce699274e75c1';
          }
        ];
        taxes: [];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-08-06T18:30:26.667Z';
        end_date: null;
        base_rate_adjustment: 1.55;
        base_rate_type: 'Factor';
        state: 'NY';
        fees_taxable: false;
        _id: '62eed46221ff1500ba4bb397';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        is_active: true;
        start_date: '2022-09-07T10:25:06.714Z';
        end_date: null;
        base_rate_adjustment: 1.015;
        base_rate_type: 'Factor';
        state: 'NV';
        fees_taxable: false;
        _id: '631876d1c5b445f746ad057c';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
      },
      {
        is_active: false;
        start_date: '2022-12-06T00:43:50.081Z';
        base_rate_adjustment: 1.2;
        base_rate_type: 'Factor';
        state: 'MO';
        fees_taxable: true;
        _id: '638e90a718ac567cf310c1b5';
        fees: [
          {
            name: 'SL Service Charge';
            rate_type: 'Flat Rate';
            rate: 144;
            earned: 'Fully Earned';
            tax_exempt: false;
            rate_application: 'On Policy';
            required: true;
            selected: true;
            _id: '638e90d518ac567cf310c3e6';
          }
        ];
        coverage_options: [];
        taxes: [
          {
            title: 'State Tax';
            jurisdiction: 'MO';
            jurisdiction_code: null;
            rate_kind: 'Percentage';
            rate: 5.4;
            _id: '638e90c518ac567cf310c32a';
          }
        ];
        documents: [];
        end_date: null;
      },
      {
        is_active: true;
        start_date: '2023-01-12T13:27:52.340Z';
        base_rate_adjustment: 1;
        base_rate_type: 'Factor';
        state: 'WA';
        fees_taxable: false;
        _id: '63c07d679998d757359f1b5d';
        fees: [];
        coverage_options: [];
        taxes: [];
        documents: [];
        end_date: null;
      }
    ];
    access: [
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '6222c8c7d2c9f37f2055afe8';
        account: '62225e391b6395ab703472c1';
        account_type: 'Agency';
        company_name: "Maggie's Agency";
        status: 'Active';
        permissions: 'Client';
        _id: '627279d7aebb6765fccae727';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c7369943eedb43eaf01908';
        account: '62c7366f3ac67bb7df34255c';
        account_type: 'Agency';
        company_name: "Deb's Agency";
        status: 'Active';
        permissions: 'Client';
        _id: '62c79842efd07ce28acdae32';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c735556d374fe97426d83d';
        account: '62c734903ac67bb7df342514';
        account_type: 'Agency';
        company_name: 'Betty Jo Insurance Agency';
        status: 'Active';
        permissions: 'Client';
        _id: '62c799c1eb3a0305bd5725ae';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c73617ba6aa0be36bad540';
        account: '62c735cf3ac67bb7df34253f';
        account_type: 'Agency';
        company_name: 'TT Incorporated';
        status: 'Active';
        permissions: 'Client';
        _id: '62c799c6eb3a0305bd5725b3';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c736682e594bd0b7ca8000';
        account: '62c736193ac67bb7df34254c';
        account_type: 'Agency';
        company_name: 'Thomas Agency';
        status: 'Active';
        permissions: 'Client';
        _id: '62c799cdeb3a0305bd5725b8';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c735780a56095219b45c40';
        account: '62c735383ac67bb7df342521';
        account_type: 'Agency';
        company_name: 'Miller Inc.';
        status: 'Active';
        permissions: 'Client';
        _id: '62c799d2eb3a0305bd5725bd';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62c7364c0ac12ed5a9dc27e6';
        account: '62c733123ac67bb7df3424ce';
        account_type: 'Agency';
        company_name: 'John Smith Insurance';
        status: 'Active';
        permissions: 'Client';
        _id: '62c79a98eb3a0305bd57263f';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '62d9b7fa6c17717421d111f4';
        account: '62c733a83ac67bb7df3424f3';
        account_type: 'Agency';
        company_name: "Mary's Insurance";
        status: 'Active';
        permissions: 'Client';
        _id: '62d9b82b291ac88f4a22fd07';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '639a602ea139c4d837d9026e';
        account: '63993a8c41a547ad08b15d0c';
        account_type: 'Agency';
        company_name: '123';
        status: 'Active';
        permissions: 'Client';
        _id: '639cba2e42f44d50212d3b0e';
      },
      {
        commision: { rate_type: 'Percentage'; rate: 10 };
        connection: '63a47697603b9e42ef2bb13a';
        account: '63a47654bcb9464c67593d42';
        account_type: 'Agency';
        company_name: 'Agency Name';
        status: 'Active';
        permissions: 'Client';
        _id: '63a477bca231115a7382eb37';
      }
    ];
    __v: 4;
    title: 'Auto Liability 001';
    end_date: null;
    documents: [
      {
        merge_tag: {
          tag: 'Policy Forms (Merge Tag - policy-deck)';
          index: 1;
          base: true;
        };
        title: 'Policy Forms (Merge Tag - policy-deck)';
        description: null;
        stages: ['Policy'];
        required: false;
        active: true;
        document: {
          _id: '62c7294dc2c58daeac200ff9';
          updated_at: '2022-07-07T18:43:25.312Z';
          created_by: '61f3f3103db0ca3687dc6b5f';
          account_id: '62210d2630652cd01506b0ac';
          is_deleted: false;
          fieldname: 'file';
          originalname: 'AL APPLICATION V1 (1).docx';
          encoding: '7bit';
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          size: 26996;
          acl: 'private';
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx';
          Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx';
          Key: '62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx';
          Bucket: 'skylabis-accounts';
          region: 'us-west-2';
          metadata: {
            user_id: '61f3f3103db0ca3687dc6b5f';
            account_id: '62210d2630652cd01506b0ac';
          };
          created_at: '2022-07-07T18:43:25.315Z';
          __v: 0;
        };
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
        _id: '62deec57f388c62ebd9fbf8f';
      },
      {
        merge_tag: { tag: 'Quote Indication'; index: 0; base: false };
        title: 'MCS 90 - Prefilled Application';
        description: null;
        stages: ['Application'];
        required: false;
        active: true;
        document: {
          _id: '62df461227a733277c51e962';
          updated_at: '2022-07-26T01:40:34.590Z';
          created_by: '61f3f3103db0ca3687dc6b5f';
          account_id: '62210d2630652cd01506b0ac';
          is_deleted: false;
          fieldname: 'file';
          originalname: 'mcs-90-requirements from FMSCA (1).pdf';
          encoding: '7bit';
          mimetype: 'application/pdf';
          size: 199935;
          acl: 'private';
          contentType: 'application/pdf';
          url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf';
          Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf';
          Key: '62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf';
          Bucket: 'skylabis-accounts';
          region: 'us-west-2';
          metadata: {
            user_id: '61f3f3103db0ca3687dc6b5f';
            account_id: '62210d2630652cd01506b0ac';
          };
          created_at: '2022-07-26T01:40:34.593Z';
          __v: 0;
        };
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
        _id: '62df4614325436cf651e064c';
      },
      {
        merge_tag: { tag: 'Quote Indication'; index: 1; base: true };
        title: 'Quote Application';
        description: null;
        stages: ['Application'];
        required: false;
        active: true;
        document: {
          _id: '6359a096d16464295a6d00d5';
          updated_at: '2022-10-26T21:03:18.578Z';
          created_by: '61f3f3103db0ca3687dc6b5f';
          account_id: '62210d2630652cd01506b0ac';
          is_deleted: false;
          fieldname: 'file';
          originalname: 'Quote Indication Doc - Final (3).docx';
          encoding: '7bit';
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          size: 10365;
          acl: 'private';
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx';
          Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx';
          Key: '62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx';
          Bucket: 'skylabis-accounts';
          region: 'us-west-2';
          metadata: {
            user_id: '61f3f3103db0ca3687dc6b5f';
            account_id: '62210d2630652cd01506b0ac';
          };
          created_at: '2022-10-26T21:03:18.580Z';
          __v: 0;
        };
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
        _id: '6359a0a404a6e81dacbf0fed';
      },
      {
        merge_tag: { tag: ''; index: 1; base: false };
        title: 'Skylab Indication Template';
        description: null;
        stages: ['Indication'];
        required: false;
        active: true;
        document: {
          _id: '63cc1b64dedcb0977fbb207e';
          updated_at: '2023-01-21T17:05:40.697Z';
          created_by: '61f3f3103db0ca3687dc6b5f';
          account_id: '62210d2630652cd01506b0ac';
          is_deleted: false;
          fieldname: 'file';
          originalname: 'Skylab Template.docx';
          encoding: '7bit';
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          size: 10557;
          acl: 'private';
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/a264c/Skylab Template.docx';
          Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/a264c/Skylab Template.docx';
          Key: '62210d2630652cd01506b0ac/a264c/Skylab Template.docx';
          Bucket: 'skylabis-accounts';
          region: 'us-west-2';
          metadata: {
            user_id: '61f3f3103db0ca3687dc6b5f';
            account_id: '62210d2630652cd01506b0ac';
          };
          created_at: '2023-01-21T17:05:40.706Z';
          __v: 0;
        };
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
        _id: '63cc1b72e789c24368a19a56';
      },
      {
        merge_tag: { tag: 'Policy Deck'; index: 1; base: false };
        title: 'COMPLETE POLICY.docx';
        description: null;
        stages: ['Application'];
        required: false;
        active: true;
        document: {
          _id: '63d9859bbfa076bd03a83c50';
          updated_at: '2023-01-31T21:18:19.903Z';
          created_by: '61f3f3103db0ca3687dc6b5f';
          account_id: '62210d2630652cd01506b0ac';
          is_deleted: false;
          fieldname: 'file';
          originalname: 'COMPLETE POLICY.docx';
          encoding: '7bit';
          mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          size: 243610;
          acl: 'private';
          contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
          url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/f3b68/COMPLETE POLICY.docx';
          Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/f3b68/COMPLETE POLICY.docx';
          Key: '62210d2630652cd01506b0ac/f3b68/COMPLETE POLICY.docx';
          Bucket: 'skylabis-accounts';
          region: 'us-west-2';
          metadata: {
            user_id: '61f3f3103db0ca3687dc6b5f';
            account_id: '62210d2630652cd01506b0ac';
          };
          created_at: '2023-01-31T21:18:19.903Z';
          __v: 0;
        };
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'];
        _id: '63d985a42de481cb6d4c44f0';
      }
    ];
    rate_factors: [
      {
        title: 'New Venture - Less than 1 year';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              custom_field_default_value: null;
              access: [];
              account_id: null;
              _id: '622f9750aac602d9e53473db';
              active: true;
              rating_stage: 'DOT';
              rating_title: 'Years In Business';
              description: null;
              hints: [];
              created_at: '2022-03-14T19:28:16.084Z';
              updated_at: '2022-07-05T16:39:35.510Z';
              __v: 0;
              selectors: [
                {
                  title: 'Is In Between';
                  description: 'If the years in business are in between the two values this will be true.';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248812af726d0582fc53527';
                    },
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248812af726d0582fc53528';
                    }
                  ];
                  _id: '6248812af726d0582fc53526';
                },
                {
                  title: 'Is Less Than';
                  description: 'If the years in business are less than the input value.';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248815bf726d0582fc53537';
                    }
                  ];
                  _id: '6248815bf726d0582fc53536';
                }
              ];
              system: 'System';
              custom_feild_name: 'company_start_date';
              input_kind: 'Date';
              modifiers: [];
            };
            modifier: 'Any';
            selector: 'Is Less Than';
            inputs: [{ value: 1; _id: '63dd188c8691f437288d1262' }];
            junction: null;
            _id: '62c46d03e1f91d47061f11f8';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Reject';
            rate_type: 'Factor';
            rate: 1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '6391e4be78236c2d423c9f3a';
          }
        ];
        documents: [];
        _id: '63dd188c8691f437288d1260';
      },
      {
        title: 'Accident/Violation 0/0 ';
        group: 'Driver Group';
        factor: [
          {
            rating_factor: {
              _id: '62e7f9e56749dc0abfc52240';
              rating_title: 'Driver Accident At Fault';
              system: 'System';
              custom_feild_name: 'accident_at_fault';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:57.474Z';
              updated_at: '2022-08-31T20:28:25.250Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb983668ec117e2e390e0';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc466cad909bc57118568' },
                { kind: 'All'; _id: '630fc467cad909bc5711856a' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: 'Any';
            selector: 'Is Exactly';
            inputs: [{ value: 0; _id: '638b529e51547ab1aabf3627' }];
            junction: 'And';
            _id: '630fba4e668ec117e2e3912d';
          },
          {
            rating_factor: {
              _id: '62e7f9bb6749dc0abfc5223c';
              rating_title: 'Driver Minor Violations';
              system: 'System';
              custom_feild_name: 'minor_violations';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:15.352Z';
              updated_at: '2022-08-31T20:28:36.159Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb998668ec117e2e390ec';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc473cad909bc57118570' },
                { kind: 'All'; _id: '630fc473cad909bc57118572' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: 'Any';
            selector: 'Is Exactly';
            inputs: [{ value: 0; _id: '638b529e51547ab1aabf3629' }];
            junction: null;
            _id: '630fd8a19d9b23f2ed21a2fa';
          }
        ];
        actions: [
          {
            fee: {
              selected: true;
              name: 'Fee';
              rate_type: 'Flat Rate';
              rate: 0;
              earned: 'Fully Earned';
              tax_exempt: false;
              required: true;
              rate_application: 'Per Driver';
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 0.85;
            rate_application: 'Per Driver';
            rate_group_type: 'Average';
            _id: '630fca9bcea14f65d808516f';
          }
        ];
        documents: [];
        _id: '638b529e51547ab1aabf3625';
      },
      {
        title: 'Violation/Accident 1/1';
        group: 'Driver Group';
        factor: [
          {
            rating_factor: {
              _id: '62e7f9e56749dc0abfc52240';
              rating_title: 'Driver Accident At Fault';
              system: 'System';
              custom_feild_name: 'accident_at_fault';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:57.474Z';
              updated_at: '2022-08-31T20:28:25.250Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb983668ec117e2e390e0';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc466cad909bc57118568' },
                { kind: 'All'; _id: '630fc467cad909bc5711856a' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: 'Any';
            selector: 'Is Exactly';
            inputs: [{ value: 1; _id: '63d0301cbcd50627a8a2f3ef' }];
            junction: 'And';
            _id: '630fba4e668ec117e2e3912d';
          },
          {
            rating_factor: {
              _id: '62e7f9bb6749dc0abfc5223c';
              rating_title: 'Driver Minor Violations';
              system: 'System';
              custom_feild_name: 'minor_violations';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:15.352Z';
              updated_at: '2022-08-31T20:28:36.159Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb998668ec117e2e390ec';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc473cad909bc57118570' },
                { kind: 'All'; _id: '630fc473cad909bc57118572' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: 'Any';
            selector: 'Is Exactly';
            inputs: [{ value: 1; _id: '63d0301cbcd50627a8a2f3f1' }];
            junction: null;
            _id: '630fd8a19d9b23f2ed21a2fa';
          }
        ];
        actions: [
          {
            fee: {
              name: 'Fee';
              rate_type: 'Flat Rate';
              rate: 0;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'Per Driver';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.25;
            rate_application: 'Per Driver';
            rate_group_type: 'Average';
            _id: '630fca9bcea14f65d808516f';
          }
        ];
        documents: [];
        _id: '63d0301cbcd50627a8a2f3ed';
      },
      {
        title: 'Just Document';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              custom_field_default_value: null;
              access: [];
              account_id: null;
              _id: '622f9750aac602d9e53473db';
              active: true;
              rating_stage: 'DOT';
              rating_title: 'Years In Business';
              description: null;
              hints: [];
              created_at: '2022-03-14T19:28:16.084Z';
              updated_at: '2022-07-05T16:39:35.510Z';
              __v: 0;
              selectors: [
                {
                  title: 'Is In Between';
                  description: 'If the years in business are in between the two values this will be true.';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248812af726d0582fc53527';
                    },
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248812af726d0582fc53528';
                    }
                  ];
                  _id: '6248812af726d0582fc53526';
                },
                {
                  title: 'Is Less Than';
                  description: 'If the years in business are less than the input value.';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '6248815bf726d0582fc53537';
                    }
                  ];
                  _id: '6248815bf726d0582fc53536';
                }
              ];
              system: 'System';
              custom_feild_name: 'company_start_date';
              input_kind: 'Date';
              modifiers: [];
            };
            modifier: null;
            selector: 'Is Less Than';
            inputs: [{ value: 20; _id: '63923c39491d657400cb811b' }];
            junction: null;
            _id: '63359f4240b85735c92c458b';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '63923c39491d657400cb811c';
          }
        ];
        documents: [
          {
            merge_tag: { tag: null; index: 1; base: false };
            title: 'Test Rate Factor Doc';
            description: null;
            stages: ['Indication', 'Application', 'Policy'];
            required: false;
            active: true;
            document: {
              _id: '630fb2500fde537d33c4b48d';
              created_by: null;
              account_id: '62210d2630652cd01506b0ac';
              is_deleted: false;
              data: {
                account_id: '62210d2630652cd01506b0ac';
                rate_owner: '62210d2630652cd01506b0ac';
                policy_id: '630e3d2f7e6ce699274e7612';
              };
              fieldname: 'Oregon UM.pdf';
              originalname: 'Oregon UM.pdf';
              mimetype: 'application/pdf';
              size: 158150;
              acl: 'private';
              contentType: 'application/pdf';
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf';
              Location: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf';
              Key: '62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf';
              Bucket: 'skylabis-accounts';
              region: 'us-west-2';
              metadata: {
                account_id: '62210d2630652cd01506b0ac';
                rate_owner: '62210d2630652cd01506b0ac';
                policy_id: '630e3d2f7e6ce699274e7612';
              };
              created_at: '2022-08-31T19:11:12.825Z';
              updated_at: '2022-08-31T19:11:12.825Z';
              __v: 0;
            };
            access: [];
            _id: '63923c39491d657400cb811d';
          }
        ];
        _id: '63923c39491d657400cb8119';
      },
      {
        title: 'Driver Safety Fee';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62c513d16d576cb876835ed3';
              rating_title: 'Speed Gauge DOT Score';
              system: 'Custom';
              custom_feild_name: 'speed_gauge_dot_score';
              input_kind: 'Number';
              rating_stage: 'DOT';
              access: ['Program Owner'];
              account_id: '62210d2630652cd01506b0ac';
              active: true;
              description: null;
              hints: [];
              created_at: '2022-07-06T04:47:13.971Z';
              updated_at: '2022-10-26T18:31:00.244Z';
              selectors: [
                {
                  title: 'Is Less Than';
                  description: 'If Score is less than {{value}}';
                  _id: '62c513f06d576cb876835edb';
                },
                {
                  title: 'Is In Between';
                  description: 'Score is between {{value_1}} and {{value_2}}';
                  _id: '62ed28ea9b27b4bf0ad08d01';
                }
              ];
              modifiers: [];
              __v: 0;
              custom_field_default_value: 650;
            };
            modifier: null;
            selector: 'Is Less Than';
            inputs: [{ value: 1000; _id: '638e92fb85dd1eea984429d9' }];
            junction: null;
            _id: '633adca6bbae39db24ca0bb7';
          }
        ];
        actions: [
          {
            fee: {
              name: 'Safety Fee';
              rate_type: 'Flat Rate';
              rate: 180;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: false;
              selected: true;
            };
            action: 'Add Fee';
            rate_type: 'Factor';
            rate: 1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '633adca6bbae39db24ca0bb9';
          }
        ];
        documents: [];
        _id: '638e92fb85dd1eea984429d7';
      },
      {
        title: 'Radius Less than 1000';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              custom_field_default_value: null;
              access: [];
              account_id: null;
              _id: '61f3f4c45a0aa0799bc666e0';
              active: true;
              rating_stage: 'DOT';
              rating_title: 'Radius';
              description: null;
              hints: [];
              created_at: '2022-01-28T13:51:00.844Z';
              updated_at: '2022-07-05T15:15:43.770Z';
              __v: 0;
              min_value: 0;
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Radius if it exactly matches the input value.';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '624880ddf726d0582fc5350b';
                    }
                  ];
                  _id: '624880ddf726d0582fc5350a';
                },
                {
                  title: 'Is Less Than';
                  description: 'If the radius is less than this number';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '626333423e52d47d9c2d780e';
                    }
                  ];
                  _id: '626333423e52d47d9c2d780d';
                }
              ];
              system: 'System';
              custom_feild_name: 'radius';
              input_kind: 'Number';
              modifiers: [];
            };
            modifier: null;
            selector: 'Is Less Than';
            inputs: [{ value: 250; _id: '63cf07e7e1a073e715a95ab7' }];
            junction: null;
            _id: '63924e14f678d8770927007d';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '63924e14f678d8770927007f';
          }
        ];
        documents: [];
        _id: '63cf07e7e1a073e715a95ab5';
      },
      {
        title: 'drivers with less than 5 years experience';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62e80465fd37f0669c5acb3f';
              rating_title: 'Years of Driver Experience';
              system: 'System';
              custom_feild_name: 'experience_date';
              input_kind: 'Date';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:50:45.549Z';
              updated_at: '2022-09-01T02:15:30.611Z';
              selectors: [
                {
                  title: 'Is In Between';
                  description: 'If drivers experience in years is between two values ';
                  _id: '62e80494fd37f0669c5acb4d';
                },
                {
                  title: 'Is Less Than';
                  description: 'Is less than';
                  _id: '6391e47578236c2d423c9e81';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '62e80498fd37f0669c5acb4f' },
                { kind: 'All'; _id: '62e80498fd37f0669c5acb51' },
                { kind: 'Average'; _id: '62e80499fd37f0669c5acb53' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: null;
            selector: 'Is Less Than';
            inputs: [{ value: 5; _id: '63cf07dbe1a073e715a959e5' }];
            junction: null;
            _id: '6392537669184d4b2a4b5680';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.25;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '63cf07dbe1a073e715a959e6';
          }
        ];
        documents: [];
        _id: '63cf07dbe1a073e715a959e3';
      },
      {
        title: '# of employees > 0';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              account_id: null;
              _id: '62bfae99f6340dfa3e57b55f';
              rating_title: 'Number of Employees';
              system: 'System';
              rating_stage: 'DOT';
              access: [];
              active: true;
              description: '';
              hints: [];
              created_at: '2022-07-02T02:34:01.948Z';
              updated_at: '2022-09-27T17:08:53.578Z';
              selectors: [
                {
                  title: 'Is Greater Than';
                  description: 'If the number of employees is greater than {{value}}';
                  inputs: [
                    {
                      kind: 'Number';
                      dropdown_values: null;
                      _id: '62c06348307684227d061d32';
                    }
                  ];
                  _id: '62c06348307684227d061d31';
                }
              ];
              modifiers: [];
              __v: 0;
              custom_feild_name: 'number_of_employees';
              input_kind: 'Number';
              custom_field_default_value: 0;
            };
            modifier: null;
            selector: 'Is Greater Than';
            inputs: [{ value: 0; _id: '639253ec69184d4b2a4b6235' }];
            junction: null;
            _id: '639253ec69184d4b2a4b6234';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '639253ec69184d4b2a4b6236';
          }
        ];
        documents: [];
        _id: '639253ec69184d4b2a4b6233';
      },
      {
        title: 'Driver w/ exactly one major violation';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62e7f9d16749dc0abfc5223e';
              rating_title: 'Driver Major Violations';
              system: 'System';
              custom_feild_name: 'major_violations';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:37.719Z';
              updated_at: '2022-08-31T20:28:56.807Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb990668ec117e2e390e6';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc47acad909bc57118578' },
                { kind: 'All'; _id: '630fc47acad909bc5711857a' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: null;
            selector: 'Is Exactly';
            inputs: [{ value: 1; _id: '63d02f93bcd50627a8a2f2fc' }];
            junction: null;
            _id: '6392545469184d4b2a4b6666';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.15;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '6392a11fc7ac386f13b07f88';
          }
        ];
        documents: [];
        _id: '63d02f93bcd50627a8a2f2fa';
      },
      {
        title: 'Driver Accident At Fault = 2';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62e7f9e56749dc0abfc52240';
              rating_title: 'Driver Accident At Fault';
              system: 'System';
              custom_feild_name: 'accident_at_fault';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:57.474Z';
              updated_at: '2022-08-31T20:28:25.250Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb983668ec117e2e390e0';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc466cad909bc57118568' },
                { kind: 'All'; _id: '630fc467cad909bc5711856a' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: null;
            selector: 'Is Exactly';
            inputs: [{ value: 2; _id: '63c077f39998d757359f10b9' }];
            junction: null;
            _id: '6392a1f6c7ac386f13b099a7';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.755;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '6392a1f6c7ac386f13b099a9';
          }
        ];
        documents: [];
        _id: '63c077f39998d757359f10b7';
      },
      {
        title: 'Driver major Violations = 1';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62e7f9d16749dc0abfc5223e';
              rating_title: 'Driver Major Violations';
              system: 'System';
              custom_feild_name: 'major_violations';
              input_kind: 'Number';
              rating_stage: 'Drivers';
              access: [];
              account_id: null;
              active: true;
              description: null;
              created_at: '2022-08-01T16:05:37.719Z';
              updated_at: '2022-08-31T20:28:56.807Z';
              selectors: [
                {
                  title: 'Is Exactly';
                  description: 'Is Exactly {{value}}';
                  _id: '630fb990668ec117e2e390e6';
                }
              ];
              modifiers: [
                { kind: 'Any'; _id: '630fc47acad909bc57118578' },
                { kind: 'All'; _id: '630fc47acad909bc5711857a' }
              ];
              __v: 0;
              custom_field_default_value: null;
            };
            modifier: null;
            selector: 'Is Exactly';
            inputs: [{ value: 1; _id: '6392a53bc7ac386f13b0d3a1' }];
            junction: null;
            _id: '6392a273c7ac386f13b09e26';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Flat Rate';
            rate: 1000;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '6392a273c7ac386f13b09e28';
          }
        ];
        documents: [];
        _id: '6392a53bc7ac386f13b0d39f';
      },
      {
        title: 'Speed Gauge DOT Score';
        group: 'Standard';
        factor: [
          {
            rating_factor: {
              _id: '62c513d16d576cb876835ed3';
              rating_title: 'Speed Gauge DOT Score';
              system: 'Custom';
              custom_feild_name: 'speed_gauge_dot_score';
              input_kind: 'Number';
              rating_stage: 'DOT';
              access: ['Program Owner'];
              account_id: '62210d2630652cd01506b0ac';
              active: true;
              description: null;
              hints: [];
              created_at: '2022-07-06T04:47:13.971Z';
              updated_at: '2022-10-26T18:31:00.244Z';
              selectors: [
                {
                  title: 'Is Less Than';
                  description: 'If Score is less than {{value}}';
                  _id: '62c513f06d576cb876835edb';
                },
                {
                  title: 'Is In Between';
                  description: 'Score is between {{value_1}} and {{value_2}}';
                  _id: '62ed28ea9b27b4bf0ad08d01';
                }
              ];
              modifiers: [];
              __v: 0;
              custom_field_default_value: 650;
            };
            modifier: null;
            selector: 'Is Less Than';
            inputs: [{ value: 900; _id: '6392ab95c7ac386f13b0f8be' }];
            junction: null;
            _id: '6392ab95c7ac386f13b0f8bd';
          }
        ];
        actions: [
          {
            fee: {
              name: '';
              rate_type: 'Flat Rate';
              rate: 1;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            action: 'Adjust Rate';
            rate_type: 'Percentage';
            rate: 1.1;
            rate_application: 'On Policy';
            rate_group_type: null;
            _id: '6392ab95c7ac386f13b0f8bf';
          }
        ];
        documents: [];
        _id: '6392ab95c7ac386f13b0f8bc';
      }
    ];
    commodities: [
      {
        commodity: {
          _id: '62338146d0d6508d3ecb7bd0';
          category: 'dry goods';
          title: 'Cereal';
          sctg_code: '43126';
          created_at: '2022-03-17T18:43:18.678Z';
          updated_at: '2022-03-17T19:15:53.193Z';
          __v: 0;
        };
        custom_title: null;
        classifications: [
          {
            classification: 'Dry';
            percentage_allowed: 100;
            _id: '62ccbd9c25f267c684985aad';
          }
        ];
        actions: [
          {
            fee: {
              name: 'Fee';
              rate_type: 'Flat Rate';
              rate: 0;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            rate_group_type: null;
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.005;
            rate_application: 'On Policy';
            _id: '62547a853c22c84341de0ec2';
          }
        ];
        documents: [];
        _id: '62ccbd9c25f267c684985aac';
      },
      {
        commodity: {
          _id: '623388cdd0d6508d3ecb7c2d';
          category: 'Other';
          title: 'Other';
          sctg_code: '00000';
          created_at: '2022-03-17T19:15:25.781Z';
          updated_at: '2022-03-17T19:15:25.782Z';
          __v: 0;
        };
        custom_title: 'Dry Goods';
        classifications: [
          {
            classification: 'Dry';
            percentage_allowed: 100;
            _id: '628b7741fe0823bbc817ec04';
          }
        ];
        actions: [];
        documents: [];
        _id: '628b7741fe0823bbc817ec03';
      },
      {
        commodity: {
          _id: '6231169e650bb03940b66287';
          category: 'produce1';
          title: 'Green Beans and Watermelon';
          sctg_code: '45091';
          created_at: '2022-03-15T22:43:42.753Z';
          updated_at: '2022-03-17T19:40:04.075Z';
          __v: 0;
        };
        custom_title: null;
        classifications: [
          {
            classification: 'Reefer';
            percentage_allowed: 100;
            _id: '6287bd76fb8b341e0cb96c5c';
          }
        ];
        actions: [];
        documents: [];
        _id: '6287bd76fb8b341e0cb96c5b';
      },
      {
        commodity: {
          _id: '623388cdd0d6508d3ecb7c2d';
          category: 'Other';
          title: 'Other';
          sctg_code: '00000';
          created_at: '2022-03-17T19:15:25.781Z';
          updated_at: '2022-03-17T19:15:25.782Z';
          __v: 0;
        };
        custom_title: 'Pigs';
        classifications: [
          {
            classification: 'Dry';
            percentage_allowed: 50;
            _id: '62ccbd8e25f267c684985a9f';
          }
        ];
        actions: [
          {
            fee: {
              name: 'Fee';
              rate_type: 'Flat Rate';
              rate: 0;
              earned: 'Fully Earned';
              tax_exempt: false;
              rate_application: 'On Policy';
              required: true;
              selected: true;
            };
            rate_group_type: null;
            action: 'Adjust Rate';
            rate_type: 'Factor';
            rate: 1.012;
            rate_application: 'On Policy';
            _id: '62acdd79aadd3c6d2e6c5a71';
          }
        ];
        documents: [];
        _id: '62ccbd8e25f267c684985a9e';
      }
    ];
    lines_of_coverage: [
      {
        _id: '620bf653f6de300dd98c603b';
        active: false;
        line_of_coverage: 'Auto Liability';
        created_at: '2022-02-15T18:52:03.397Z';
        updated_at: '2022-02-20T13:13:13.238Z';
        coverage_options: [
          {
            limits: [];
            split_limits: [];
            deductibles: [];
            access: [];
            title: 'Med Pay';
            state: '';
            description: 'test description with more words to see if this ';
            required_inputs: ['Employees'];
            _id: '620db5777fd2f684f3d435af';
            states: [];
          },
          {
            limits: [];
            split_limits: [];
            deductibles: [];
            access: [];
            title: 'Um/Uim';
            description: 'Um/Uim';
            states: ['LA', 'NJ'];
            required_inputs: ['None'];
            _id: '6255a3d548484eace0ec1e8a';
          },
          {
            limits: [];
            split_limits: [];
            deductibles: [];
            access: [];
            title: 'Hired Autos';
            description: 'Hire Autos';
            states: null;
            required_inputs: ['Vehicles'];
            _id: '6255ac9348484eace0ec2371';
          },
          {
            limits: [];
            split_limits: [];
            deductibles: [];
            access: [];
            title: 'Non Owned';
            description: 'Non Owned';
            states: null;
            _id: '62d1d30c499a79b80e94289f';
          }
        ];
        __v: 0;
      }
    ];
    deductibles: [
      {
        deductible: 1500;
        rate_type: 'Factor';
        rate: 1.15;
        _id: '62d9b1f34ccbbbda5f0f448c';
      },
      {
        deductible: 2500;
        rate_type: 'Factor';
        rate: 1;
        _id: '629a432421945ff218a1a093';
      },
      {
        deductible: 5000;
        rate_type: 'Factor';
        rate: 0.95;
        _id: '62d9b1f04ccbbbda5f0f447f';
      }
    ];
    minimum_rate: 10000;
  };

  TEST_QUOTE: any = {
    program_owner: { account_id: '62210d2630652cd01506b0ac', users: [] },
    quote: {
      approved_date: {
        date: '2022-12-28T02:51:39.172Z',
        year: 2022,
        month: 12,
        day: 28,
      },
      stage: 'DOT',
      status: 'Approved',
    },
    policy: {
      pol_eff_date: {
        day: 29,
        month: 12,
        year: 2022,
        date: '2022-12-29T00:00:00.000Z',
      },
      pol_exp_date: {
        day: 29,
        month: 12,
        year: 2023,
        date: '2023-12-29T23:59:59.000Z',
      },
      policy_number: null,
      binder_number: null,
      status: 'Pending Bind',
      renewal_count: 0,
    },
    premium: {
      quote_pure_premium_per_unit: 16306.17,
      quote_pure_premium: 48918.51,
      quote_coverage_premiums: 0,
      quote_coverage_total_premium: 48918.51,
      total_fees: 3265.11,
      total_earned_premium: 330,
      total_taxable_premium: 48918.51,
      total_taxes: 2641.6,
      total_premium_per_unit: 18275.07,
      total_premium: 54825.22,
    },
    working_endorsement: {
      dot: {
        dot: { mailing_address: { state: null }, filings: [], documents: [] },
      },
      status: 'Indication',
      power_units: [],
      drivers: [],
      coverage_options: [],
      rating: [],
    },
    owner: {
      account_id: '62210d2630652cd01506b0ac',
      users: [
        {
          title: 'Producer',
          status: 'Active',
          user: {
            profile: {
              first_name: 'Test',
              last_name: 'Rename',
              profile_photo_url: null,
              birthday: null,
              gender: null,
              marital_status: null,
              full_name: 'Test Rename',
            },
            _id: '6229690373ef8a20ddda1cce',
            email: 'test@accounttype.com',
            id: '6229690373ef8a20ddda1cce',
          },
          _id: '63abaee28467fa07f109bea1',
          id: '63abaee28467fa07f109bea1',
        },
      ],
    },
    insured: {
      named_insured: 'M Test 12/27',
      account_id: '63a0cd1571f7901d55ca434a',
      account_type: 'Insured',
    },
    dot: {
      company_start_date: {
        year: 2012,
        month: 4,
        day: 12,
        date: '2012-04-12T00:00:00.000Z',
      },
      garage_address: {
        street: '344 hi',
        street_2: null,
        city: 'IDK',
        state: 'CA',
        code: '56342432',
        country: 'US',
      },
      mailing_address: {
        street: '344 hi',
        street_2: null,
        city: 'IDK',
        state: 'CA',
        code: '56342432',
        country: 'US',
      },
      dot_number: '112211222',
      legal_name: "Maddison's Test",
      mc_number: '1213454657632',
      traveling: 'Interstate',
      tax_id: '86754323',
      dba_name: 'M Test',
      telephone: '645232333',
      email_address: 'mtest@test.com',
      census: null,
      radius: 190,
      number_of_employees: 6,
      data: { speed_gauge_dot_score: 650 },
      filings: [
        {
          authority: 'Federal',
          number: null,
          _id: '63abaeec8467fa07f109c0d5',
          id: '63abaeec8467fa07f109c0d5',
        },
      ],
      documents: [],
      additional_insureds: [],
    },
    _id: '63abaee28467fa07f109be9f',
    stage: 'Quote',
    archive_date: null,
    status: 'Active',
    program: {
      commision: { rate_type: 'Percentage', rate: 18 },
      owner: {
        account_id: '62210d2630652cd01506b0ac',
        program_carrier_name: 'Skylab Specialty Program',
        account_type: 'Client',
        company_name: 'Stadnick MGA',
        program_manager: 'Bruce Wayne',
        program_manager_email: 'the@bwayne.com',
        program_manager_phone: '12345646',
      },
      taxes_and_fees: 'Premium Taxes Standard',
      compliance_management: 'Self Managed',
      financing_settings: [],
      _id: '6226cd52a1289b68f773e2de',
      title: 'Skylab Specialty Program',
      program_type: 'Distrubuted Locked',
      rating_config: 'Not Rated',
      status: 'Active',
      line_of_coverage: '620bf653f6de300dd98c603b',
      coverage_requirements: [],
      created_at: '2022-03-08T03:28:18.354Z',
      updated_at: '2022-12-08T21:14:14.363Z',
      __v: 0,
      documents: [
        {
          document: '622ca4e7742ebbc706860e77',
          required: false,
          signature_required: false,
          _id: '622ca4e8d2f2beabaa9b770d',
          id: '622ca4e8d2f2beabaa9b770d',
        },
        {
          document: '622cb105742ebbc706860eaf',
          required: false,
          signature_required: false,
          _id: '622cb106a49113eedd252a0d',
          id: '622cb106a49113eedd252a0d',
        },
      ],
      subscription: {
        _id: '62bafb4098e7a3a054a6ab1d',
        id: 'sub_1LFdufG3qvuZwHxfpEdOT1Eh',
        __v: 0,
        application: null,
        application_fee_percent: null,
        automatic_tax: { enabled: false },
        billing_cycle_anchor: 1662034448,
        billing_thresholds: null,
        cancel_at: null,
        cancel_at_period_end: false,
        canceled_at: null,
        collection_method: 'charge_automatically',
        created: 1656420785,
        created_at: '2022-06-28T12:59:44.305Z',
        current_period_end: 1675253648,
        current_period_start: 1672575248,
        customer: 'cus_LFpK6BX6ByGDhe',
        days_until_due: null,
        default_payment_method: null,
        default_source: null,
        default_tax_rates: [],
        description: null,
        discount: null,
        ended_at: null,
        items: {
          object: 'list',
          data: [
            {
              id: 'si_LxZ2hOghcUvjgV',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1656420785,
              plan: {
                id: 'price_1LFUOlG3qvuZwHxfAL9d4iZw',
                object: 'plan',
                active: true,
                aggregate_usage: null,
                amount: 625000,
                amount_decimal: '625000',
                billing_scheme: 'per_unit',
                created: 1656384211,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                nickname: null,
                product: 'prod_Lwde8rxuuZtX6e',
                tiers_mode: null,
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'licensed',
              },
              price: {
                id: 'price_1LFUOlG3qvuZwHxfAL9d4iZw',
                object: 'price',
                active: true,
                billing_scheme: 'per_unit',
                created: 1656384211,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                nickname: null,
                product: 'prod_Lwde8rxuuZtX6e',
                recurring: {
                  aggregate_usage: null,
                  interval: 'month',
                  interval_count: 1,
                  trial_period_days: null,
                  usage_type: 'licensed',
                },
                tax_behavior: 'exclusive',
                tiers_mode: null,
                transform_quantity: null,
                type: 'recurring',
                unit_amount: 625000,
                unit_amount_decimal: '625000',
              },
              quantity: 1,
              subscription: 'sub_1LFdufG3qvuZwHxfpEdOT1Eh',
              tax_rates: [],
            },
            {
              id: 'si_Lxj9Sxqk4CnE1o',
              object: 'subscription_item',
              billing_thresholds: null,
              created: 1656458379,
              plan: {
                id: 'price_1LFermG3qvuZwHxfbfl2HD5I',
                object: 'plan',
                active: true,
                aggregate_usage: 'last_during_period',
                amount: null,
                amount_decimal: null,
                billing_scheme: 'tiered',
                created: 1656424450,
                currency: 'usd',
                interval: 'month',
                interval_count: 1,
                livemode: false,
                metadata: { price_type: 'program' },
                nickname: 'Program',
                product: 'prod_Lxa1ZyNbULIJs2',
                tiers_mode: 'graduated',
                transform_usage: null,
                trial_period_days: null,
                usage_type: 'metered',
              },
              price: {
                id: 'price_1LFermG3qvuZwHxfbfl2HD5I',
                object: 'price',
                active: true,
                billing_scheme: 'tiered',
                created: 1656424450,
                currency: 'usd',
                custom_unit_amount: null,
                livemode: false,
                lookup_key: null,
                metadata: { price_type: 'program' },
                nickname: 'Program',
                product: 'prod_Lxa1ZyNbULIJs2',
                recurring: {
                  aggregate_usage: 'last_during_period',
                  interval: 'month',
                  interval_count: 1,
                  trial_period_days: null,
                  usage_type: 'metered',
                },
                tax_behavior: 'exclusive',
                tiers_mode: 'graduated',
                transform_quantity: null,
                type: 'recurring',
                unit_amount: null,
                unit_amount_decimal: null,
              },
              subscription: 'sub_1LFdufG3qvuZwHxfpEdOT1Eh',
              tax_rates: [],
            },
          ],
          has_more: false,
          total_count: 2,
          url: '/v1/subscription_items?subscription=sub_1LFdufG3qvuZwHxfpEdOT1Eh',
        },
        latest_invoice: 'in_1MLQX5G3qvuZwHxfctJTwcTM',
        livemode: false,
        metadata: { account_type: 'Client' },
        next_pending_invoice_item_invoice: null,
        object: 'subscription',
        pause_collection: null,
        payment_settings: {
          payment_method_options: null,
          payment_method_types: null,
          save_default_payment_method: 'off',
        },
        pending_invoice_item_interval: null,
        pending_setup_intent: null,
        pending_update: null,
        plan: null,
        quantity: null,
        schedule: null,
        start_date: 1656420785,
        status: 'active',
        test_clock: null,
        transfer_data: null,
        trial_end: 1662034448,
        trial_start: 1660168687,
        updated_at: '2023-01-01T12:20:56.471Z',
        currency: 'usd',
        on_behalf_of: null,
      },
      lines_of_coverage: [
        {
          _id: '620bf653f6de300dd98c603b',
          active: false,
          line_of_coverage: 'Auto Liability',
          created_at: '2022-02-15T18:52:03.397Z',
          updated_at: '2022-02-20T13:13:13.238Z',
          coverage_options: [
            {
              limits: [],
              split_limits: [],
              deductibles: [],
              access: [],
              title: 'Med Pay',
              state: '',
              description: 'test description with more words to see if this ',
              required_inputs: ['Employees'],
              _id: '620db5777fd2f684f3d435af',
              states: [],
              id: '620db5777fd2f684f3d435af',
            },
            {
              limits: [],
              split_limits: [],
              deductibles: [],
              access: [],
              title: 'Um/Uim',
              description: 'Um/Uim',
              states: ['LA', 'NJ'],
              required_inputs: ['None'],
              _id: '6255a3d548484eace0ec1e8a',
              id: '6255a3d548484eace0ec1e8a',
            },
            {
              limits: [],
              split_limits: [],
              deductibles: [],
              access: [],
              title: 'Hired Autos',
              description: 'Hire Autos',
              states: null,
              required_inputs: ['Vehicles'],
              _id: '6255ac9348484eace0ec2371',
              id: '6255ac9348484eace0ec2371',
            },
            {
              limits: [],
              split_limits: [],
              deductibles: [],
              access: [],
              title: 'Non Owned',
              description: 'Non Owned',
              states: null,
              _id: '62d1d30c499a79b80e94289f',
              id: '62d1d30c499a79b80e94289f',
            },
          ],
          __v: 0,
          id: '620bf653f6de300dd98c603b',
        },
      ],
      modules: [
        {
          authentication: {
            method: 'Bearer',
            user_name: 'r.stadnick@skylabinsurancesolutions.com',
            password: 'r.stadnick+test',
            api_key: null,
          },
          authentication_test: {
            method: 'Bearer',
            user_name: 'r.stadnick+test@skylabinsurancesolutions.com',
            password: 'r.stadnick+test',
            api_key: null,
          },
          rating_factors: [],
          module: '632380166e215394ac7fa616',
          module_title: 'Speed Gauge',
          status: 'Active',
          error: null,
          _id: '632492c1c5f0852592dff719',
          id: '632492c1c5f0852592dff719',
        },
      ],
      treaty_years: [
        {
          treaty_eff_date: {
            date: '2022-08-01T06:00:00.000Z',
            year: 2022,
            month: 7,
            day: 1,
          },
          treaty_exp_date: {
            date: '2023-07-30T06:00:00.000Z',
            year: 2023,
            month: 6,
            day: 30,
          },
          capacity: 20000000,
          max_policy_limit: 1000000,
          base_commision_rate_type: 'Percentage',
          base_commision_rate: 18,
          _id: '63691f908931d9c3df62bdc1',
          risk_participate: [],
          id: '63691f908931d9c3df62bdc1',
        },
      ],
      id: '6226cd52a1289b68f773e2de',
    },
    rating: [
      {
        rate_schedule_owner: {
          account_id: '62210d2630652cd01506b0ac',
          users: [],
        },
        selections: { limit: 1000000, deductible: 1500 },
        rate_schedule: {
          endorsement_settings: {
            endorsements: [
              {
                object: 'Power Units',
                action: ['Remove', 'Add'],
                prorate_type: 'Average Per Unit',
                rate: null,
                prorate: true,
                permissions: 'Self Service',
                _id: '62edd7617bd1a32b170a71bb',
                id: '62edd7617bd1a32b170a71bb',
              },
              {
                object: 'Power Units',
                action: ['Change'],
                prorate_type: 'No Rate',
                rate: null,
                prorate: true,
                permissions: 'Self Service',
                _id: '62edd7617bd1a32b170a71bc',
                id: '62edd7617bd1a32b170a71bc',
              },
              {
                object: 'Drivers',
                action: ['Change', 'Remove', 'Add'],
                prorate_type: 'No Rate',
                rate: null,
                prorate: true,
                permissions: 'Self Service',
                _id: '62edd7617bd1a32b170a71bd',
                id: '62edd7617bd1a32b170a71bd',
              },
              {
                object: 'DOT',
                action: ['Change', 'Remove', 'Add'],
                prorate_type: 'No Rate',
                rate: null,
                prorate: true,
                permissions: 'Self Service',
                _id: '62edd7617bd1a32b170a71be',
                id: '62edd7617bd1a32b170a71be',
              },
            ],
            fees: [],
          },
          policy_number_settings: {
            current_block: [],
            issued_by: 'Self Generating',
            custom_format: [
              {
                format: 'String',
                value: 'SKY',
                length: 1,
                _id: '63a20dcef3a45e434c5363d3',
                id: '63a20dcef3a45e434c5363d3',
              },
              {
                format: 'Separator',
                value: '-',
                length: 1,
                _id: '63a20dcef3a45e434c5363d4',
                id: '63a20dcef3a45e434c5363d4',
              },
              {
                format: 'Random Numbers',
                value: null,
                length: 7,
                _id: '63a20dcef3a45e434c5363d5',
                id: '63a20dcef3a45e434c5363d5',
              },
              {
                format: 'Separator',
                value: '-',
                length: 1,
                _id: '63a20dcef3a45e434c5363d6',
                id: '63a20dcef3a45e434c5363d6',
              },
              {
                format: 'Policy Sequence',
                value: null,
                length: 2,
                _id: '63a20dcef3a45e434c5363d7',
                id: '63a20dcef3a45e434c5363d7',
              },
            ],
          },
          owner: {
            account_id: '62210d2630652cd01506b0ac',
            account_type: 'Client',
            company_name: 'Stadnick MGA',
          },
          settings: {
            losses: { active: false },
            commodities: { active: true },
          },
          _id: '6229866307c7d3e5ef40aa43',
          status: 'Active',
          program: '6226cd52a1289b68f773e2de',
          base_rate: 10000,
          created_at: '2022-03-10T05:02:27.914Z',
          updated_at: '2022-12-29T22:17:53.072Z',
          start_date: '2022-04-11T23:24:17.526Z',
          limits: [
            {
              limit: 1000000,
              split_limit: null,
              rate_type: 'Factor',
              rate: 1.1,
              _id: '62ee7b0f32b6553af294cec4',
              id: '62ee7b0f32b6553af294cec4',
            },
            {
              limit: 250000,
              split_limit: null,
              rate_type: 'Factor',
              rate: 0.95,
              _id: '6356d672368d08dabab17074',
              id: '6356d672368d08dabab17074',
            },
            {
              limit: 750000,
              split_limit: null,
              rate_type: 'Factor',
              rate: 1,
              _id: '6356d677368d08dabab17084',
              id: '6356d677368d08dabab17084',
            },
          ],
          fees: [
            {
              selected: true,
              name: 'Policy',
              rate_type: 'Percentage',
              rate: 6,
              earned: 'Accrued',
              tax_exempt: false,
              rate_application: 'On Policy',
              required: true,
              _id: '623858d33f04363fae678834',
              id: '623858d33f04363fae678834',
            },
            {
              selected: true,
              name: 'Technology',
              rate_type: 'Flat Rate',
              rate: 150,
              earned: 'Fully Earned',
              tax_exempt: false,
              rate_application: 'On Policy',
              required: true,
              _id: '62ee7aa332b6553af294ce16',
              id: '62ee7aa332b6553af294ce16',
            },
          ],
          coverage_options: [
            {
              title: 'Hired Autos',
              custom_title: null,
              description: null,
              status: 'Offered',
              access: ['Rate Schedule Owner', 'Program Owner'],
              options: [
                {
                  limit: '1000',
                  split_limit: null,
                  rate_type: 'Flat Rate',
                  rate: 1000,
                  rate_application: 'On Policy',
                  rating_factor: {
                    custom_field_default_value: null,
                    _id: '62cc4fa6140cc1f9dde0cb6e',
                    rating_title: 'Number of Units',
                    system: 'System',
                    custom_feild_name: 'power_units',
                    input_kind: 'Count',
                    rating_stage: 'Power Units',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-07-11T16:28:22.743Z',
                    updated_at: '2022-07-12T11:47:29.630Z',
                    selectors: [
                      {
                        title: 'Is In Between',
                        description:
                          'Number of units is between {{value_1}} and {{value_2}}',
                        _id: '62cc4fd6140cc1f9dde0cf50',
                        id: '62cc4fd6140cc1f9dde0cf50',
                      },
                      {
                        title: 'Is Less Than',
                        description: 'Count is less than {{value}}',
                        _id: '62cc4ff0140cc1f9dde0d168',
                        id: '62cc4ff0140cc1f9dde0d168',
                      },
                      {
                        title: 'Is Greater Than',
                        description: 'Count is greater than {{value}}',
                        _id: '62cc4ffc140cc1f9dde0d25e',
                        id: '62cc4ffc140cc1f9dde0d25e',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    id: '62cc4fa6140cc1f9dde0cb6e',
                  },
                  selector: 'Is In Between',
                  inputs: [
                    {
                      value: 0,
                      _id: '6393ba4467fb1e2800a772ca',
                      id: '6393ba4467fb1e2800a772ca',
                    },
                    {
                      value: 1,
                      _id: '6393ba4467fb1e2800a772cb',
                      id: '6393ba4467fb1e2800a772cb',
                    },
                  ],
                  is_default: false,
                  _id: '6393ba4467fb1e2800a772c9',
                  id: '6393ba4467fb1e2800a772c9',
                },
                {
                  limit: '1000',
                  split_limit: null,
                  rate_type: 'Flat Rate',
                  rate: 2000,
                  rate_application: 'On Policy',
                  rating_factor: {
                    custom_field_default_value: null,
                    _id: '62cc4fa6140cc1f9dde0cb6e',
                    rating_title: 'Number of Units',
                    system: 'System',
                    custom_feild_name: 'power_units',
                    input_kind: 'Count',
                    rating_stage: 'Power Units',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-07-11T16:28:22.743Z',
                    updated_at: '2022-07-12T11:47:29.630Z',
                    selectors: [
                      {
                        title: 'Is In Between',
                        description:
                          'Number of units is between {{value_1}} and {{value_2}}',
                        _id: '62cc4fd6140cc1f9dde0cf50',
                        id: '62cc4fd6140cc1f9dde0cf50',
                      },
                      {
                        title: 'Is Less Than',
                        description: 'Count is less than {{value}}',
                        _id: '62cc4ff0140cc1f9dde0d168',
                        id: '62cc4ff0140cc1f9dde0d168',
                      },
                      {
                        title: 'Is Greater Than',
                        description: 'Count is greater than {{value}}',
                        _id: '62cc4ffc140cc1f9dde0d25e',
                        id: '62cc4ffc140cc1f9dde0d25e',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    id: '62cc4fa6140cc1f9dde0cb6e',
                  },
                  selector: 'Is In Between',
                  inputs: [
                    {
                      value: 2,
                      _id: '6393ba4467fb1e2800a772cd',
                      id: '6393ba4467fb1e2800a772cd',
                    },
                    {
                      value: 4,
                      _id: '6393ba4467fb1e2800a772ce',
                      id: '6393ba4467fb1e2800a772ce',
                    },
                  ],
                  is_default: false,
                  _id: '6393ba4467fb1e2800a772cc',
                  id: '6393ba4467fb1e2800a772cc',
                },
              ],
              documents: [],
              _id: '6393ba4467fb1e2800a772c8',
              id: '6393ba4467fb1e2800a772c8',
            },
            {
              title: 'Non Owned',
              custom_title: null,
              description: null,
              status: 'Offered',
              access: [],
              options: [
                {
                  limit: '1200',
                  split_limit: null,
                  rate_type: 'Flat Rate',
                  rate: 136,
                  rate_application: 'On Policy',
                  rating_factor: {
                    account_id: null,
                    _id: '62bfae99f6340dfa3e57b55f',
                    rating_title: 'Number of Employees',
                    system: 'System',
                    rating_stage: 'DOT',
                    access: [],
                    active: true,
                    description: '',
                    hints: [],
                    created_at: '2022-07-02T02:34:01.948Z',
                    updated_at: '2022-09-27T17:08:53.578Z',
                    selectors: [
                      {
                        title: 'Is Greater Than',
                        description:
                          'If the number of employees is greater than {{value}}',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '62c06348307684227d061d32',
                          },
                        ],
                        _id: '62c06348307684227d061d31',
                        id: '62c06348307684227d061d31',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    custom_feild_name: 'number_of_employees',
                    input_kind: 'Number',
                    custom_field_default_value: 0,
                    id: '62bfae99f6340dfa3e57b55f',
                  },
                  selector: 'Is In Between',
                  inputs: [
                    {
                      value: 1,
                      _id: '63c98665348e10d66cc34993',
                      id: '63c98665348e10d66cc34993',
                    },
                    {
                      value: 125,
                      _id: '63c98665348e10d66cc34994',
                      id: '63c98665348e10d66cc34994',
                    },
                  ],
                  is_default: false,
                  _id: '63c98665348e10d66cc34992',
                  id: '63c98665348e10d66cc34992',
                },
              ],
              documents: [],
              _id: '63c98665348e10d66cc34991',
              id: '63c98665348e10d66cc34991',
            },
          ],
          states: [
            {
              is_active: true,
              start_date: '2022-03-14T15:41:06.323Z',
              end_date: null,
              base_rate_adjustment: 0.952,
              base_rate_type: 'Factor',
              state: 'TX',
              fees_taxable: true,
              _id: '62518c1a2ee5dbc148240b6d',
              fees: [
                {
                  required: true,
                  selected: true,
                  name: 'Other Fee',
                  rate_type: 'Flat Rate',
                  rate: 150,
                  earned: 'Fully Earned',
                  tax_exempt: false,
                  rate_application: 'On Policy',
                  _id: '633189fa1a6d525a287b87f4',
                  id: '633189fa1a6d525a287b87f4',
                },
                {
                  required: true,
                  selected: true,
                  name: 'SL Service Charge',
                  rate_type: 'Percentage',
                  rate: 0.015,
                  earned: 'Fully Earned',
                  tax_exempt: false,
                  rate_application: 'On Policy',
                  _id: '63318a0a1a6d525a287b8800',
                  id: '63318a0a1a6d525a287b8800',
                },
              ],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'TX',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '626ae4b91a51da6168e9f702',
                  id: '626ae4b91a51da6168e9f702',
                },
                {
                  title: 'SL Tax',
                  jurisdiction: 'TX',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.11,
                  _id: '633189e71a6d525a287b87dc',
                  id: '633189e71a6d525a287b87dc',
                },
              ],
              documents: [
                {
                  merge_tag: { tag: 'Policy Deck', index: 0, base: false },
                  active: true,
                  title: 'Texas Surplus Disclosure',
                  description: null,
                  stages: ['Policy'],
                  required: false,
                  document: {
                    _id: '631737b61118f3ad663313c3',
                    updated_at: '2022-09-06T12:06:14.932Z',
                    created_by: '61f3f3103db0ca3687dc6b5f',
                    account_id: '62210d2630652cd01506b0ac',
                    is_deleted: false,
                    fieldname: 'file',
                    originalname: 'Texas UM_UIM Selection (1).pdf',
                    encoding: '7bit',
                    mimetype: 'application/pdf',
                    size: 104823,
                    acl: 'private',
                    contentType: 'application/pdf',
                    url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/94595/Texas UM_UIM Selection (1).pdf',
                    Location:
                      'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/94595/Texas UM_UIM Selection (1).pdf',
                    Key: '62210d2630652cd01506b0ac/94595/Texas UM_UIM Selection (1).pdf',
                    Bucket: 'skylabis-accounts',
                    region: 'us-west-2',
                    metadata: {
                      user_id: '61f3f3103db0ca3687dc6b5f',
                      account_id: '62210d2630652cd01506b0ac',
                    },
                    created_at: '2022-09-06T12:06:14.935Z',
                    __v: 0,
                    id: '631737b61118f3ad663313c3',
                  },
                  access: [
                    'Rate Schedule Owner',
                    'Program Owner',
                    'Quote Owner',
                  ],
                  _id: '631739e4279785a85816e654',
                  id: '631739e4279785a85816e654',
                },
              ],
              id: '62518c1a2ee5dbc148240b6d',
            },
            {
              is_active: true,
              start_date: '2022-03-14T15:41:06.323Z',
              end_date: null,
              base_rate_adjustment: 16011.72,
              base_rate_type: 'Flat Rate',
              state: 'FL',
              fees_taxable: false,
              _id: '62fbdae429955f11ccb7d4b4',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'FL',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '638e32b4e6fdd8039b936019',
                  id: '638e32b4e6fdd8039b936019',
                },
              ],
              documents: [],
              id: '62fbdae429955f11ccb7d4b4',
            },
            {
              base_rate_type: 'Factor',
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-14T17:31:39.747Z',
              base_rate_adjustment: 1,
              state: 'CO',
              _id: '622f7e0bda883cd78dfd2b85',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'CO',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '62aa5554758a932c5701afff',
                  id: '62aa5554758a932c5701afff',
                },
              ],
              documents: [],
              id: '622f7e0bda883cd78dfd2b85',
            },
            {
              base_rate_type: 'Factor',
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-14T17:31:39.747Z',
              base_rate_adjustment: 1.075,
              state: 'GA',
              _id: '622f7ef2da883cd78dfd2bad',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '622f7ef2da883cd78dfd2bad',
            },
            {
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-15T00:27:39.268Z',
              end_date: null,
              base_rate_adjustment: 0.95,
              base_rate_type: 'Factor',
              state: 'MT',
              _id: '6230a58113b685164f73b53c',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '6230a58113b685164f73b53c',
            },
            {
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-15T00:27:39.268Z',
              end_date: null,
              base_rate_adjustment: 0.85,
              base_rate_type: 'Factor',
              state: 'ID',
              _id: '62309b3e13b685164f73b0ac',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '62309b3e13b685164f73b0ac',
            },
            {
              base_rate_type: 'Factor',
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-15T00:27:39.268Z',
              base_rate_adjustment: 1,
              state: 'AR',
              _id: '622ffe6ded54f4a6681f71b7',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '622ffe6ded54f4a6681f71b7',
            },
            {
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-21T20:30:06.555Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'AK',
              _id: '6238ec45c58279e056ae4399',
              fees: [],
              coverage_options: [
                {
                  title: 'Um/Uim',
                  custom_title: null,
                  description: null,
                  status: 'Offered',
                  access: [],
                  options: [
                    {
                      limit: '10000',
                      split_limit: null,
                      rate_type: 'Flat Rate',
                      rate: 136,
                      rate_application: 'On Policy',
                      rating_factor: {
                        custom_field_default_value: null,
                        _id: '62cc4fa6140cc1f9dde0cb6e',
                        rating_title: 'Number of Units',
                        system: 'System',
                        custom_feild_name: 'power_units',
                        input_kind: 'Count',
                        rating_stage: 'Power Units',
                        access: [],
                        account_id: null,
                        active: true,
                        description: null,
                        created_at: '2022-07-11T16:28:22.743Z',
                        updated_at: '2022-07-12T11:47:29.630Z',
                        selectors: [
                          {
                            title: 'Is In Between',
                            description:
                              'Number of units is between {{value_1}} and {{value_2}}',
                            _id: '62cc4fd6140cc1f9dde0cf50',
                            id: '62cc4fd6140cc1f9dde0cf50',
                          },
                          {
                            title: 'Is Less Than',
                            description: 'Count is less than {{value}}',
                            _id: '62cc4ff0140cc1f9dde0d168',
                            id: '62cc4ff0140cc1f9dde0d168',
                          },
                          {
                            title: 'Is Greater Than',
                            description: 'Count is greater than {{value}}',
                            _id: '62cc4ffc140cc1f9dde0d25e',
                            id: '62cc4ffc140cc1f9dde0d25e',
                          },
                        ],
                        modifiers: [],
                        __v: 0,
                        id: '62cc4fa6140cc1f9dde0cb6e',
                      },
                      selector: 'Is Greater Than',
                      inputs: [
                        {
                          value: 0,
                          _id: '63446afd5c6ed82f7ea68ca7',
                          id: '63446afd5c6ed82f7ea68ca7',
                        },
                      ],
                      is_default: true,
                      _id: '63446afd5c6ed82f7ea68ca6',
                      id: '63446afd5c6ed82f7ea68ca6',
                    },
                  ],
                  documents: [
                    {
                      merge_tag: { tag: null, index: 1, base: false },
                      active: true,
                      title: 'AK UM PIP',
                      description: '',
                      stages: ['Application'],
                      required: false,
                      document: {
                        _id: '63173cdbce59a9e6da7919ef',
                        created_by: null,
                        account_id: '62210d2630652cd01506b0ac',
                        is_deleted: true,
                        data: {
                          account_id: '62210d2630652cd01506b0ac',
                          rate_owner: '62210d2630652cd01506b0ac',
                          policy_id: '62b7aa3e279878425f6a0266',
                        },
                        fieldname: 'Texas UM_UIM Selection.pdf',
                        originalname: 'Texas UM_UIM Selection.pdf',
                        mimetype: 'application/pdf',
                        size: 311797,
                        acl: 'private',
                        contentType: 'application/pdf',
                        url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf',
                        Location:
                          'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf',
                        Key: '62210d2630652cd01506b0ac/62b7aa3e279878425f6a0266/Texas UM_UIM Selection.pdf',
                        Bucket: 'skylabis-accounts',
                        region: 'us-west-2',
                        metadata: {
                          account_id: '62210d2630652cd01506b0ac',
                          rate_owner: '62210d2630652cd01506b0ac',
                          policy_id: '62b7aa3e279878425f6a0266',
                        },
                        created_at: '2022-09-06T12:28:11.896Z',
                        updated_at: '2022-09-06T12:28:11.896Z',
                        __v: 0,
                        id: '63173cdbce59a9e6da7919ef',
                      },
                      access: [
                        'Rate Schedule Owner',
                        'Program Owner',
                        'Quote Owner',
                      ],
                      _id: '63446afd5c6ed82f7ea68ca8',
                      id: '63446afd5c6ed82f7ea68ca8',
                    },
                  ],
                  _id: '634456bc7c3d5d53c907bed8',
                  id: '634456bc7c3d5d53c907bed8',
                },
              ],
              taxes: [],
              documents: [
                {
                  merge_tag: { tag: 'Policy Deck', index: 0, base: false },
                  active: true,
                  title: 'Texas Surplus Disclosure.pdf',
                  description: null,
                  stages: ['Policy'],
                  required: false,
                  document: {
                    _id: '6335e9ab66b30568a8907907',
                    created_by: null,
                    account_id: '62210d2630652cd01506b0ac',
                    is_deleted: false,
                    data: {
                      account_id: '62210d2630652cd01506b0ac',
                      rate_owner: '62210d2630652cd01506b0ac',
                      policy_id: '62bdd706d8bc868c083c2478',
                    },
                    fieldname: 'Texas Surplus Disclosure.pdf',
                    originalname: 'Texas Surplus Disclosure.pdf',
                    mimetype: 'application/pdf',
                    size: 316966,
                    acl: 'private',
                    contentType: 'application/pdf',
                    url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62bdd706d8bc868c083c2478/Texas Surplus Disclosure.pdf',
                    Location:
                      'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/62bdd706d8bc868c083c2478/Texas Surplus Disclosure.pdf',
                    Key: '62210d2630652cd01506b0ac/62bdd706d8bc868c083c2478/Texas Surplus Disclosure.pdf',
                    Bucket: 'skylabis-accounts',
                    region: 'us-west-2',
                    metadata: {
                      account_id: '62210d2630652cd01506b0ac',
                      rate_owner: '62210d2630652cd01506b0ac',
                      policy_id: '62bdd706d8bc868c083c2478',
                    },
                    created_at: '2022-09-29T18:53:31.792Z',
                    updated_at: '2022-09-29T18:53:31.792Z',
                    __v: 0,
                    id: '6335e9ab66b30568a8907907',
                  },
                  access: [
                    'Rate Schedule Owner',
                    'Program Owner',
                    'Quote Owner',
                  ],
                  _id: '63446a7517d8486f1faca883',
                  id: '63446a7517d8486f1faca883',
                },
              ],
              id: '6238ec45c58279e056ae4399',
            },
            {
              fees_taxable: false,
              is_active: true,
              start_date: '2022-03-21T20:30:06.555Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'NM',
              _id: '6238ecddc58279e056ae446a',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '6238ecddc58279e056ae446a',
            },
            {
              is_active: true,
              start_date: '2022-04-07T16:36:31.215Z',
              end_date: null,
              base_rate_adjustment: 1.5,
              base_rate_type: 'Factor',
              state: 'CA',
              fees_taxable: false,
              _id: '6324c9f77f080b5b8e103b72',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'CA',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '638e2e8fde83dbd2e312d4e1',
                  id: '638e2e8fde83dbd2e312d4e1',
                },
              ],
              documents: [],
              id: '6324c9f77f080b5b8e103b72',
            },
            {
              fees_taxable: false,
              is_active: true,
              start_date: '2022-04-07T16:36:31.215Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'KY',
              _id: '624f2ad320da8a3ca1280d1a',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '624f2ad320da8a3ca1280d1a',
            },
            {
              is_active: true,
              start_date: '2022-04-28T23:11:36.472Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'MD',
              fees_taxable: false,
              _id: '626b204a630558c31e8bd16b',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'MD',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.54,
                  _id: '626b2068630558c31e8bd1e5',
                  id: '626b2068630558c31e8bd1e5',
                },
              ],
              documents: [],
              id: '626b204a630558c31e8bd16b',
            },
            {
              is_active: true,
              start_date: '2022-06-16T23:28:37.485Z',
              end_date: null,
              base_rate_adjustment: 1.125,
              base_rate_type: 'Factor',
              state: 'TN',
              fees_taxable: false,
              _id: '62abc1967e1fc337ff571ba2',
              fees: [],
              coverage_options: [
                {
                  title: 'Um/Uim',
                  custom_title: null,
                  description: null,
                  status: 'Required',
                  access: [],
                  options: [
                    {
                      limit: '10000',
                      split_limit: null,
                      rate_type: 'Flat Rate',
                      rate: 129,
                      rate_application: 'Per Unit',
                      rating_factor: null,
                      selector: null,
                      inputs: [],
                      is_default: false,
                      _id: '633e0e59c05fe39c97d765b1',
                      id: '633e0e59c05fe39c97d765b1',
                    },
                  ],
                  documents: [],
                  _id: '633e0e59c05fe39c97d765b0',
                  id: '633e0e59c05fe39c97d765b0',
                },
              ],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'TN',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.054,
                  _id: '62abc1a27e1fc337ff571c1f',
                  id: '62abc1a27e1fc337ff571c1f',
                },
              ],
              documents: [],
              id: '62abc1967e1fc337ff571ba2',
            },
            {
              is_active: true,
              start_date: '2022-06-23T23:55:11.556Z',
              end_date: null,
              base_rate_adjustment: 1.25,
              base_rate_type: 'Factor',
              state: 'MI',
              fees_taxable: true,
              _id: '62b4ff6ce1eadfadd3c9d745',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'MI',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.54,
                  _id: '62b4ff78e1eadfadd3c9d74e',
                  id: '62b4ff78e1eadfadd3c9d74e',
                },
              ],
              documents: [],
              id: '62b4ff6ce1eadfadd3c9d745',
            },
            {
              is_active: true,
              start_date: '2022-06-26T00:33:03.793Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'AL',
              fees_taxable: false,
              _id: '62b7af4c279878425f6a04ff',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'AL',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '62b7af7b279878425f6a0508',
                  id: '62b7af7b279878425f6a0508',
                },
              ],
              documents: [],
              id: '62b7af4c279878425f6a04ff',
            },
            {
              is_active: true,
              start_date: '2022-07-08T18:50:18.097Z',
              end_date: null,
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'AZ',
              fees_taxable: false,
              _id: '62c87fe06d7c0717e2a57668',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'AZ',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.054,
                  _id: '62c87fe76d7c0717e2a57671',
                  id: '62c87fe76d7c0717e2a57671',
                },
              ],
              documents: [],
              id: '62c87fe06d7c0717e2a57668',
            },
            {
              is_active: true,
              start_date: '2022-07-19T16:16:53.316Z',
              end_date: null,
              base_rate_adjustment: 1.023,
              base_rate_type: 'Factor',
              state: 'IL',
              fees_taxable: false,
              _id: '62d6d9edcae8b3531561678d',
              fees: [],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'IL',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 0.54,
                  _id: '62d6d9f5cae8b35315616798',
                  id: '62d6d9f5cae8b35315616798',
                },
              ],
              documents: [],
              id: '62d6d9edcae8b3531561678d',
            },
            {
              is_active: true,
              start_date: '2022-07-21T19:58:58.479Z',
              end_date: null,
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'OR',
              fees_taxable: false,
              _id: '62d9b2b74ccbbbda5f0f4667',
              fees: [],
              coverage_options: [
                {
                  custom_title: null,
                  title: 'Um/Uim',
                  description: null,
                  status: 'Offered',
                  access: [],
                  options: [
                    {
                      limit: '85000',
                      rate_type: 'Flat Rate',
                      rate: 210,
                      rate_application: 'Per Unit',
                      rating_factor: null,
                      selector: null,
                      inputs: [],
                      is_default: false,
                      _id: '630e5c927e6ce699274e799d',
                      id: '630e5c927e6ce699274e799d',
                    },
                  ],
                  documents: [
                    {
                      merge_tag: { tag: null, index: 1, base: false },
                      active: true,
                      title: 'Oregon UM',
                      description: '',
                      stages: ['Application'],
                      required: true,
                      document: {
                        _id: '630e3da65602be3c5f5bb3ee',
                        updated_at: '2022-08-30T16:41:10.481Z',
                        created_by: '61f3f3103db0ca3687dc6b5f',
                        account_id: '62210d2630652cd01506b0ac',
                        is_deleted: false,
                        fieldname: 'file',
                        originalname: 'Oregon UM - Lower Limit.pdf',
                        encoding: '7bit',
                        mimetype: 'application/pdf',
                        size: 35024,
                        acl: 'private',
                        contentType: 'application/pdf',
                        url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf',
                        Location:
                          'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf',
                        Key: '62210d2630652cd01506b0ac/46e48/Oregon UM - Lower Limit.pdf',
                        Bucket: 'skylabis-accounts',
                        region: 'us-west-2',
                        metadata: {
                          user_id: '61f3f3103db0ca3687dc6b5f',
                          account_id: '62210d2630652cd01506b0ac',
                        },
                        created_at: '2022-08-30T16:41:10.483Z',
                        __v: 0,
                        id: '630e3da65602be3c5f5bb3ee',
                      },
                      access: [
                        'Rate Schedule Owner',
                        'Program Owner',
                        'Quote Owner',
                      ],
                      _id: '630e5c927e6ce699274e799e',
                      id: '630e5c927e6ce699274e799e',
                    },
                  ],
                  _id: '630e3bf17e6ce699274e75c1',
                  id: '630e3bf17e6ce699274e75c1',
                },
              ],
              taxes: [],
              documents: [],
              id: '62d9b2b74ccbbbda5f0f4667',
            },
            {
              is_active: true,
              start_date: '2022-08-06T18:30:26.667Z',
              end_date: null,
              base_rate_adjustment: 1.55,
              base_rate_type: 'Factor',
              state: 'NY',
              fees_taxable: false,
              _id: '62eed46221ff1500ba4bb397',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '62eed46221ff1500ba4bb397',
            },
            {
              is_active: true,
              start_date: '2022-09-07T10:25:06.714Z',
              end_date: null,
              base_rate_adjustment: 1.015,
              base_rate_type: 'Factor',
              state: 'NV',
              fees_taxable: false,
              _id: '631876d1c5b445f746ad057c',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              id: '631876d1c5b445f746ad057c',
            },
            {
              is_active: false,
              start_date: '2022-12-06T00:43:50.081Z',
              base_rate_adjustment: 1.2,
              base_rate_type: 'Factor',
              state: 'MO',
              fees_taxable: true,
              _id: '638e90a718ac567cf310c1b5',
              fees: [
                {
                  name: 'SL Service Charge',
                  rate_type: 'Flat Rate',
                  rate: 144,
                  earned: 'Fully Earned',
                  tax_exempt: false,
                  rate_application: 'On Policy',
                  required: true,
                  selected: true,
                  _id: '638e90d518ac567cf310c3e6',
                  id: '638e90d518ac567cf310c3e6',
                },
              ],
              coverage_options: [],
              taxes: [
                {
                  title: 'State Tax',
                  jurisdiction: 'MO',
                  jurisdiction_code: null,
                  rate_kind: 'Percentage',
                  rate: 5.4,
                  _id: '638e90c518ac567cf310c32a',
                  id: '638e90c518ac567cf310c32a',
                },
              ],
              documents: [],
              end_date: null,
              id: '638e90a718ac567cf310c1b5',
            },
            {
              is_active: true,
              start_date: '2023-01-12T13:27:52.340Z',
              base_rate_adjustment: 1,
              base_rate_type: 'Factor',
              state: 'WA',
              fees_taxable: false,
              _id: '63c07d679998d757359f1b5d',
              fees: [],
              coverage_options: [],
              taxes: [],
              documents: [],
              end_date: null,
              id: '63c07d679998d757359f1b5d',
            },
          ],
          access: [
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY4678' },
                _id: '6222c8c7d2c9f37f2055afe8',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62225e391b6395ab703472c1',
                connected_account_type: 'Agency',
                created_at: '2022-03-05T02:19:51.360Z',
                updated_at: '2022-12-21T21:45:16.199Z',
                notes: [],
                __v: 0,
                account_company_name: 'Stadnick MGA',
                account_status: 'Active',
                account_type: 'Client',
                connected_account_company_name: "Maggie's Agency",
                connected_account_owner_email: 'noemail@email.com',
                id: '6222c8c7d2c9f37f2055afe8',
              },
              account: '62225e391b6395ab703472c1',
              account_type: 'Agency',
              company_name: "Maggie's Agency",
              status: 'Active',
              permissions: 'Client',
              _id: '627279d7aebb6765fccae727',
              id: '627279d7aebb6765fccae727',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY2853' },
                _id: '62c7369943eedb43eaf01908',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c7366f3ac67bb7df34255c',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'debbiedavis@gmail.com',
                created_at: '2022-07-07T19:40:09.860Z',
                updated_at: '2022-12-21T21:43:08.964Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: "Deb's Agency",
                id: '62c7369943eedb43eaf01908',
              },
              account: '62c7366f3ac67bb7df34255c',
              account_type: 'Agency',
              company_name: "Deb's Agency",
              status: 'Active',
              permissions: 'Client',
              _id: '62c79842efd07ce28acdae32',
              id: '62c79842efd07ce28acdae32',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY1647' },
                _id: '62c735556d374fe97426d83d',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c734903ac67bb7df342514',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'bettyjo@gmail.com',
                created_at: '2022-07-07T19:34:45.711Z',
                updated_at: '2022-12-21T21:43:12.128Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: 'Betty Jo Insurance Agency',
                id: '62c735556d374fe97426d83d',
              },
              account: '62c734903ac67bb7df342514',
              account_type: 'Agency',
              company_name: 'Betty Jo Insurance Agency',
              status: 'Active',
              permissions: 'Client',
              _id: '62c799c1eb3a0305bd5725ae',
              id: '62c799c1eb3a0305bd5725ae',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY5568' },
                _id: '62c73617ba6aa0be36bad540',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c735cf3ac67bb7df34253f',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'thompsont@gmail.com',
                created_at: '2022-07-07T19:37:59.759Z',
                updated_at: '2022-12-21T21:43:11.158Z',
                notes: [],
                __v: 0,
                account_company_name: 'Stadnick MGA',
                account_status: 'Active',
                account_type: 'Client',
                connected_account_company_name: 'TT Incorporated',
                connected_account_status: 'Active',
                id: '62c73617ba6aa0be36bad540',
              },
              account: '62c735cf3ac67bb7df34253f',
              account_type: 'Agency',
              company_name: 'TT Incorporated',
              status: 'Active',
              permissions: 'Client',
              _id: '62c799c6eb3a0305bd5725b3',
              id: '62c799c6eb3a0305bd5725b3',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY1530' },
                _id: '62c736682e594bd0b7ca8000',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c736193ac67bb7df34254c',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'noemail@email.com',
                created_at: '2022-07-07T19:39:20.012Z',
                updated_at: '2022-12-22T15:18:25.165Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: 'Thomas Agency',
                id: '62c736682e594bd0b7ca8000',
              },
              account: '62c736193ac67bb7df34254c',
              account_type: 'Agency',
              company_name: 'Thomas Agency',
              status: 'Active',
              permissions: 'Client',
              _id: '62c799cdeb3a0305bd5725b8',
              id: '62c799cdeb3a0305bd5725b8',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY2743' },
                _id: '62c735780a56095219b45c40',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c735383ac67bb7df342521',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'millerdon@gmail.com',
                created_at: '2022-07-07T19:35:20.776Z',
                updated_at: '2022-12-21T21:43:11.640Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: 'Miller Inc.',
                id: '62c735780a56095219b45c40',
              },
              account: '62c735383ac67bb7df342521',
              account_type: 'Agency',
              company_name: 'Miller Inc.',
              status: 'Active',
              permissions: 'Client',
              _id: '62c799d2eb3a0305bd5725bd',
              id: '62c799d2eb3a0305bd5725bd',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY0897' },
                _id: '62c7364c0ac12ed5a9dc27e6',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c733123ac67bb7df3424ce',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'johnsmith@gmail.com',
                created_at: '2022-07-07T19:38:52.981Z',
                updated_at: '2022-12-21T21:43:04.380Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: 'John Smith Insurance',
                id: '62c7364c0ac12ed5a9dc27e6',
              },
              account: '62c733123ac67bb7df3424ce',
              account_type: 'Agency',
              company_name: 'John Smith Insurance',
              status: 'Active',
              permissions: 'Client',
              _id: '62c79a98eb3a0305bd57263f',
              id: '62c79a98eb3a0305bd57263f',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SK0000' },
                _id: '62d9b7fa6c17717421d111f4',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '62c733a83ac67bb7df3424f3',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'noemail@email.com',
                created_at: '2022-07-21T20:32:58.373Z',
                updated_at: '2022-12-22T15:36:30.120Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                connected_account_status: 'Active',
                account_type: 'Client',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: "Mary's Insurance",
                id: '62d9b7fa6c17717421d111f4',
              },
              account: '62c733a83ac67bb7df3424f3',
              account_type: 'Agency',
              company_name: "Mary's Insurance",
              status: 'Active',
              permissions: 'Client',
              _id: '62d9b82b291ac88f4a22fd07',
              id: '62d9b82b291ac88f4a22fd07',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY4805' },
                _id: '639a602ea139c4d837d9026e',
                status: 'Active',
                account: '62210d2630652cd01506b0ac',
                connected_account: '63993a8c41a547ad08b15d0c',
                connected_account_type: 'Agency',
                connected_account_owner_email: 'm.ambler+5@stadnick.dev',
                created_at: '2022-12-14T23:45:50.960Z',
                updated_at: '2022-12-21T21:43:07.042Z',
                notes: [],
                __v: 0,
                account_status: 'Active',
                account_type: 'Client',
                connected_account_status: 'Active',
                account_company_name: 'Stadnick MGA',
                connected_account_company_name: '123',
                id: '639a602ea139c4d837d9026e',
              },
              account: '63993a8c41a547ad08b15d0c',
              account_type: 'Agency',
              company_name: '123',
              status: 'Active',
              permissions: 'Client',
              _id: '639cba2e42f44d50212d3b0e',
              id: '639cba2e42f44d50212d3b0e',
            },
            {
              commision: { rate_type: 'Percentage', rate: 10 },
              connection: {
                account_data: { connection_code: 'SKY1388' },
                _id: '63a47697603b9e42ef2bb13a',
                account: '62210d2630652cd01506b0ac',
                account_status: 'Active',
                connected_account: '63a47654bcb9464c67593d42',
                connected_account_type: 'Agency',
                connected_account_company_name: 'Agency Name',
                connected_account_owner_email: 'noemail@email.com',
                created_at: '2022-12-22T15:24:07.630Z',
                updated_at: '2022-12-22T15:29:28.244Z',
                __v: 0,
                account_company_name: 'Stadnick MGA',
                account_type: 'Client',
                id: '63a47697603b9e42ef2bb13a',
              },
              account: '63a47654bcb9464c67593d42',
              account_type: 'Agency',
              company_name: 'Agency Name',
              status: 'Active',
              permissions: 'Client',
              _id: '63a477bca231115a7382eb37',
              id: '63a477bca231115a7382eb37',
            },
          ],
          __v: 4,
          title: 'Auto Liability 001',
          end_date: null,
          documents: [
            {
              merge_tag: { tag: 'Policy Deck', index: 1, base: true },
              active: true,
              title: 'Policy Forms (Merge Tag - policy-deck)',
              description: null,
              stages: ['Policy'],
              required: false,
              document: {
                _id: '62c7294dc2c58daeac200ff9',
                updated_at: '2022-07-07T18:43:25.312Z',
                created_by: '61f3f3103db0ca3687dc6b5f',
                account_id: '62210d2630652cd01506b0ac',
                is_deleted: false,
                fieldname: 'file',
                originalname: 'AL APPLICATION V1 (1).docx',
                encoding: '7bit',
                mimetype:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                size: 26996,
                acl: 'private',
                contentType:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx',
                Location:
                  'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx',
                Key: '62210d2630652cd01506b0ac/737e5/AL APPLICATION V1 (1).docx',
                Bucket: 'skylabis-accounts',
                region: 'us-west-2',
                metadata: {
                  user_id: '61f3f3103db0ca3687dc6b5f',
                  account_id: '62210d2630652cd01506b0ac',
                },
                created_at: '2022-07-07T18:43:25.315Z',
                __v: 0,
                id: '62c7294dc2c58daeac200ff9',
              },
              access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
              _id: '62deec57f388c62ebd9fbf8f',
              id: '62deec57f388c62ebd9fbf8f',
            },
            {
              merge_tag: { tag: 'Quote Indication', index: 0, base: false },
              title: 'MCS 90 - Prefilled Application',
              description: null,
              stages: ['Application'],
              required: false,
              active: true,
              document: {
                _id: '62df461227a733277c51e962',
                updated_at: '2022-07-26T01:40:34.590Z',
                created_by: '61f3f3103db0ca3687dc6b5f',
                account_id: '62210d2630652cd01506b0ac',
                is_deleted: false,
                fieldname: 'file',
                originalname: 'mcs-90-requirements from FMSCA (1).pdf',
                encoding: '7bit',
                mimetype: 'application/pdf',
                size: 199935,
                acl: 'private',
                contentType: 'application/pdf',
                url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf',
                Location:
                  'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf',
                Key: '62210d2630652cd01506b0ac/c2268/mcs-90-requirements from FMSCA (1).pdf',
                Bucket: 'skylabis-accounts',
                region: 'us-west-2',
                metadata: {
                  user_id: '61f3f3103db0ca3687dc6b5f',
                  account_id: '62210d2630652cd01506b0ac',
                },
                created_at: '2022-07-26T01:40:34.593Z',
                __v: 0,
                id: '62df461227a733277c51e962',
              },
              access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
              _id: '62df4614325436cf651e064c',
              id: '62df4614325436cf651e064c',
            },
            {
              merge_tag: { tag: 'Quote Indication', index: 1, base: true },
              title: 'Quote Application',
              description: null,
              stages: ['Indication'],
              required: false,
              active: true,
              document: {
                _id: '6359a096d16464295a6d00d5',
                updated_at: '2022-10-26T21:03:18.578Z',
                created_by: '61f3f3103db0ca3687dc6b5f',
                account_id: '62210d2630652cd01506b0ac',
                is_deleted: false,
                fieldname: 'file',
                originalname: 'Quote Indication Doc - Final (3).docx',
                encoding: '7bit',
                mimetype:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                size: 10365,
                acl: 'private',
                contentType:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx',
                Location:
                  'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx',
                Key: '62210d2630652cd01506b0ac/d2ac2/Quote Indication Doc - Final (3).docx',
                Bucket: 'skylabis-accounts',
                region: 'us-west-2',
                metadata: {
                  user_id: '61f3f3103db0ca3687dc6b5f',
                  account_id: '62210d2630652cd01506b0ac',
                },
                created_at: '2022-10-26T21:03:18.580Z',
                __v: 0,
                id: '6359a096d16464295a6d00d5',
              },
              access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
              _id: '6359a0a404a6e81dacbf0fed',
              id: '6359a0a404a6e81dacbf0fed',
            },
            {
              merge_tag: { tag: '', index: 1, base: false },
              title: 'Skylab Indication Template',
              description: null,
              stages: ['Indication'],
              required: false,
              active: true,
              document: {
                _id: '63cc1b64dedcb0977fbb207e',
                updated_at: '2023-01-21T17:05:40.697Z',
                created_by: '61f3f3103db0ca3687dc6b5f',
                account_id: '62210d2630652cd01506b0ac',
                is_deleted: false,
                fieldname: 'file',
                originalname: 'Skylab Template.docx',
                encoding: '7bit',
                mimetype:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                size: 10557,
                acl: 'private',
                contentType:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/a264c/Skylab Template.docx',
                Location:
                  'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/a264c/Skylab Template.docx',
                Key: '62210d2630652cd01506b0ac/a264c/Skylab Template.docx',
                Bucket: 'skylabis-accounts',
                region: 'us-west-2',
                metadata: {
                  user_id: '61f3f3103db0ca3687dc6b5f',
                  account_id: '62210d2630652cd01506b0ac',
                },
                created_at: '2023-01-21T17:05:40.706Z',
                __v: 0,
                id: '63cc1b64dedcb0977fbb207e',
              },
              access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
              _id: '63cc1b72e789c24368a19a56',
              id: '63cc1b72e789c24368a19a56',
            },
          ],
          rate_factors: [
            {
              title: 'New Venture - Driver Experience',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    custom_field_default_value: null,
                    access: [],
                    account_id: null,
                    _id: '622f9750aac602d9e53473db',
                    active: true,
                    rating_stage: 'DOT',
                    rating_title: 'Years In Business',
                    description: null,
                    hints: [],
                    created_at: '2022-03-14T19:28:16.084Z',
                    updated_at: '2022-07-05T16:39:35.510Z',
                    __v: 0,
                    selectors: [
                      {
                        title: 'Is In Between',
                        description:
                          'If the years in business are in between the two values this will be true.',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248812af726d0582fc53527',
                          },
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248812af726d0582fc53528',
                          },
                        ],
                        _id: '6248812af726d0582fc53526',
                        id: '6248812af726d0582fc53526',
                      },
                      {
                        title: 'Is Less Than',
                        description:
                          'If the years in business are less than the input value.',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248815bf726d0582fc53537',
                          },
                        ],
                        _id: '6248815bf726d0582fc53536',
                        id: '6248815bf726d0582fc53536',
                      },
                    ],
                    system: 'System',
                    custom_feild_name: 'company_start_date',
                    input_kind: 'Date',
                    modifiers: [],
                    id: '622f9750aac602d9e53473db',
                  },
                  modifier: 'Any',
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 1,
                      _id: '63bf475669d06883fcde4abe',
                      id: '63bf475669d06883fcde4abe',
                    },
                  ],
                  junction: null,
                  _id: '62c46d03e1f91d47061f11f8',
                  id: '62c46d03e1f91d47061f11f8',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Reject',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '6391e4be78236c2d423c9f3a',
                  id: '6391e4be78236c2d423c9f3a',
                },
              ],
              documents: [],
              _id: '63bf475669d06883fcde4abc',
              id: '63bf475669d06883fcde4abc',
            },
            {
              title: 'Accident/Violation 0/0 ',
              group: 'Driver Group',
              factor: [
                {
                  rating_factor: {
                    _id: '62e7f9e56749dc0abfc52240',
                    rating_title: 'Driver Accident At Fault',
                    system: 'System',
                    custom_feild_name: 'accident_at_fault',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:57.474Z',
                    updated_at: '2022-08-31T20:28:25.250Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb983668ec117e2e390e0',
                        id: '630fb983668ec117e2e390e0',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc466cad909bc57118568',
                        id: '630fc466cad909bc57118568',
                      },
                      {
                        kind: 'All',
                        _id: '630fc467cad909bc5711856a',
                        id: '630fc467cad909bc5711856a',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9e56749dc0abfc52240',
                  },
                  modifier: 'Any',
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 0,
                      _id: '638b529e51547ab1aabf3627',
                      id: '638b529e51547ab1aabf3627',
                    },
                  ],
                  junction: 'And',
                  _id: '630fba4e668ec117e2e3912d',
                  id: '630fba4e668ec117e2e3912d',
                },
                {
                  rating_factor: {
                    _id: '62e7f9bb6749dc0abfc5223c',
                    rating_title: 'Driver Minor Violations',
                    system: 'System',
                    custom_feild_name: 'minor_violations',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:15.352Z',
                    updated_at: '2022-08-31T20:28:36.159Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb998668ec117e2e390ec',
                        id: '630fb998668ec117e2e390ec',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc473cad909bc57118570',
                        id: '630fc473cad909bc57118570',
                      },
                      {
                        kind: 'All',
                        _id: '630fc473cad909bc57118572',
                        id: '630fc473cad909bc57118572',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9bb6749dc0abfc5223c',
                  },
                  modifier: 'Any',
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 0,
                      _id: '638b529e51547ab1aabf3629',
                      id: '638b529e51547ab1aabf3629',
                    },
                  ],
                  junction: null,
                  _id: '630fd8a19d9b23f2ed21a2fa',
                  id: '630fd8a19d9b23f2ed21a2fa',
                },
              ],
              actions: [
                {
                  fee: {
                    selected: true,
                    name: 'Fee',
                    rate_type: 'Flat Rate',
                    rate: 0,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    required: true,
                    rate_application: 'Per Driver',
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 0.85,
                  rate_application: 'Per Driver',
                  rate_group_type: 'Average',
                  _id: '630fca9bcea14f65d808516f',
                  id: '630fca9bcea14f65d808516f',
                },
              ],
              documents: [],
              _id: '638b529e51547ab1aabf3625',
              id: '638b529e51547ab1aabf3625',
            },
            {
              title: 'Violation/Accident 1/1',
              group: 'Driver Group',
              factor: [
                {
                  rating_factor: {
                    _id: '62e7f9e56749dc0abfc52240',
                    rating_title: 'Driver Accident At Fault',
                    system: 'System',
                    custom_feild_name: 'accident_at_fault',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:57.474Z',
                    updated_at: '2022-08-31T20:28:25.250Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb983668ec117e2e390e0',
                        id: '630fb983668ec117e2e390e0',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc466cad909bc57118568',
                        id: '630fc466cad909bc57118568',
                      },
                      {
                        kind: 'All',
                        _id: '630fc467cad909bc5711856a',
                        id: '630fc467cad909bc5711856a',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9e56749dc0abfc52240',
                  },
                  modifier: 'Any',
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 1,
                      _id: '638b52a351547ab1aabf36ec',
                      id: '638b52a351547ab1aabf36ec',
                    },
                  ],
                  junction: 'And',
                  _id: '630fba4e668ec117e2e3912d',
                  id: '630fba4e668ec117e2e3912d',
                },
                {
                  rating_factor: {
                    _id: '62e7f9bb6749dc0abfc5223c',
                    rating_title: 'Driver Minor Violations',
                    system: 'System',
                    custom_feild_name: 'minor_violations',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:15.352Z',
                    updated_at: '2022-08-31T20:28:36.159Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb998668ec117e2e390ec',
                        id: '630fb998668ec117e2e390ec',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc473cad909bc57118570',
                        id: '630fc473cad909bc57118570',
                      },
                      {
                        kind: 'All',
                        _id: '630fc473cad909bc57118572',
                        id: '630fc473cad909bc57118572',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9bb6749dc0abfc5223c',
                  },
                  modifier: 'Any',
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 1,
                      _id: '638b52a351547ab1aabf36ee',
                      id: '638b52a351547ab1aabf36ee',
                    },
                  ],
                  junction: null,
                  _id: '630fd8a19d9b23f2ed21a2fa',
                  id: '630fd8a19d9b23f2ed21a2fa',
                },
              ],
              actions: [
                {
                  fee: {
                    selected: true,
                    name: 'Fee',
                    rate_type: 'Flat Rate',
                    rate: 0,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    required: true,
                    rate_application: 'Per Driver',
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1.5,
                  rate_application: 'Per Driver',
                  rate_group_type: 'Average',
                  _id: '630fca9bcea14f65d808516f',
                  id: '630fca9bcea14f65d808516f',
                },
              ],
              documents: [],
              _id: '638b52a351547ab1aabf36ea',
              id: '638b52a351547ab1aabf36ea',
            },
            {
              title: 'Just Document',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    custom_field_default_value: null,
                    access: [],
                    account_id: null,
                    _id: '622f9750aac602d9e53473db',
                    active: true,
                    rating_stage: 'DOT',
                    rating_title: 'Years In Business',
                    description: null,
                    hints: [],
                    created_at: '2022-03-14T19:28:16.084Z',
                    updated_at: '2022-07-05T16:39:35.510Z',
                    __v: 0,
                    selectors: [
                      {
                        title: 'Is In Between',
                        description:
                          'If the years in business are in between the two values this will be true.',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248812af726d0582fc53527',
                          },
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248812af726d0582fc53528',
                          },
                        ],
                        _id: '6248812af726d0582fc53526',
                        id: '6248812af726d0582fc53526',
                      },
                      {
                        title: 'Is Less Than',
                        description:
                          'If the years in business are less than the input value.',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '6248815bf726d0582fc53537',
                          },
                        ],
                        _id: '6248815bf726d0582fc53536',
                        id: '6248815bf726d0582fc53536',
                      },
                    ],
                    system: 'System',
                    custom_feild_name: 'company_start_date',
                    input_kind: 'Date',
                    modifiers: [],
                    id: '622f9750aac602d9e53473db',
                  },
                  modifier: null,
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 20,
                      _id: '63923c39491d657400cb811b',
                      id: '63923c39491d657400cb811b',
                    },
                  ],
                  junction: null,
                  _id: '63359f4240b85735c92c458b',
                  id: '63359f4240b85735c92c458b',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '63923c39491d657400cb811c',
                  id: '63923c39491d657400cb811c',
                },
              ],
              documents: [
                {
                  merge_tag: { tag: null, index: 1, base: false },
                  title: 'Test Rate Factor Doc',
                  description: null,
                  stages: ['Indication', 'Application', 'Policy'],
                  required: false,
                  active: true,
                  document: {
                    _id: '630fb2500fde537d33c4b48d',
                    created_by: null,
                    account_id: '62210d2630652cd01506b0ac',
                    is_deleted: false,
                    data: {
                      account_id: '62210d2630652cd01506b0ac',
                      rate_owner: '62210d2630652cd01506b0ac',
                      policy_id: '630e3d2f7e6ce699274e7612',
                    },
                    fieldname: 'Oregon UM.pdf',
                    originalname: 'Oregon UM.pdf',
                    mimetype: 'application/pdf',
                    size: 158150,
                    acl: 'private',
                    contentType: 'application/pdf',
                    url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf',
                    Location:
                      'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf',
                    Key: '62210d2630652cd01506b0ac/630e3d2f7e6ce699274e7612/Oregon UM.pdf',
                    Bucket: 'skylabis-accounts',
                    region: 'us-west-2',
                    metadata: {
                      account_id: '62210d2630652cd01506b0ac',
                      rate_owner: '62210d2630652cd01506b0ac',
                      policy_id: '630e3d2f7e6ce699274e7612',
                    },
                    created_at: '2022-08-31T19:11:12.825Z',
                    updated_at: '2022-08-31T19:11:12.825Z',
                    __v: 0,
                    id: '630fb2500fde537d33c4b48d',
                  },
                  access: [],
                  _id: '63923c39491d657400cb811d',
                  id: '63923c39491d657400cb811d',
                },
              ],
              _id: '63923c39491d657400cb8119',
              id: '63923c39491d657400cb8119',
            },
            {
              title: 'Driver Safety Fee',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62c513d16d576cb876835ed3',
                    rating_title: 'Speed Gauge DOT Score',
                    system: 'Custom',
                    custom_feild_name: 'speed_gauge_dot_score',
                    input_kind: 'Number',
                    rating_stage: 'DOT',
                    access: ['Program Owner'],
                    account_id: '62210d2630652cd01506b0ac',
                    active: true,
                    description: null,
                    hints: [],
                    created_at: '2022-07-06T04:47:13.971Z',
                    updated_at: '2022-10-26T18:31:00.244Z',
                    selectors: [
                      {
                        title: 'Is Less Than',
                        description: 'If Score is less than {{value}}',
                        _id: '62c513f06d576cb876835edb',
                        id: '62c513f06d576cb876835edb',
                      },
                      {
                        title: 'Is In Between',
                        description:
                          'Score is between {{value_1}} and {{value_2}}',
                        _id: '62ed28ea9b27b4bf0ad08d01',
                        id: '62ed28ea9b27b4bf0ad08d01',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    custom_field_default_value: 650,
                    id: '62c513d16d576cb876835ed3',
                  },
                  modifier: null,
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 1000,
                      _id: '638e92fb85dd1eea984429d9',
                      id: '638e92fb85dd1eea984429d9',
                    },
                  ],
                  junction: null,
                  _id: '633adca6bbae39db24ca0bb7',
                  id: '633adca6bbae39db24ca0bb7',
                },
              ],
              actions: [
                {
                  fee: {
                    name: 'Safety Fee',
                    rate_type: 'Flat Rate',
                    rate: 180,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: false,
                    selected: true,
                  },
                  action: 'Add Fee',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '633adca6bbae39db24ca0bb9',
                  id: '633adca6bbae39db24ca0bb9',
                },
              ],
              documents: [],
              _id: '638e92fb85dd1eea984429d7',
              id: '638e92fb85dd1eea984429d7',
            },
            {
              title: 'Radius Less than 1000',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    custom_field_default_value: null,
                    access: [],
                    account_id: null,
                    _id: '61f3f4c45a0aa0799bc666e0',
                    active: true,
                    rating_stage: 'DOT',
                    rating_title: 'Radius',
                    description: null,
                    hints: [],
                    created_at: '2022-01-28T13:51:00.844Z',
                    updated_at: '2022-07-05T15:15:43.770Z',
                    __v: 0,
                    min_value: 0,
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description:
                          'Radius if it exactly matches the input value.',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '624880ddf726d0582fc5350b',
                          },
                        ],
                        _id: '624880ddf726d0582fc5350a',
                        id: '624880ddf726d0582fc5350a',
                      },
                      {
                        title: 'Is Less Than',
                        description: 'If the radius is less than this number',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '626333423e52d47d9c2d780e',
                          },
                        ],
                        _id: '626333423e52d47d9c2d780d',
                        id: '626333423e52d47d9c2d780d',
                      },
                    ],
                    system: 'System',
                    custom_feild_name: 'radius',
                    input_kind: 'Number',
                    modifiers: [],
                    id: '61f3f4c45a0aa0799bc666e0',
                  },
                  modifier: null,
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 250,
                      _id: '63924e35f678d87709270355',
                      id: '63924e35f678d87709270355',
                    },
                  ],
                  junction: null,
                  _id: '63924e14f678d8770927007d',
                  id: '63924e14f678d8770927007d',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '63924e14f678d8770927007f',
                  id: '63924e14f678d8770927007f',
                },
              ],
              documents: [],
              _id: '63924e35f678d87709270353',
              id: '63924e35f678d87709270353',
            },
            {
              title: 'drivers with less than 5 years experience',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62e80465fd37f0669c5acb3f',
                    rating_title: 'Years of Driver Experience',
                    system: 'System',
                    custom_feild_name: 'experience_date',
                    input_kind: 'Date',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:50:45.549Z',
                    updated_at: '2022-09-01T02:15:30.611Z',
                    selectors: [
                      {
                        title: 'Is In Between',
                        description:
                          'If drivers experience in years is between two values ',
                        _id: '62e80494fd37f0669c5acb4d',
                        id: '62e80494fd37f0669c5acb4d',
                      },
                      {
                        title: 'Is Less Than',
                        description: 'Is less than',
                        _id: '6391e47578236c2d423c9e81',
                        id: '6391e47578236c2d423c9e81',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '62e80498fd37f0669c5acb4f',
                        id: '62e80498fd37f0669c5acb4f',
                      },
                      {
                        kind: 'All',
                        _id: '62e80498fd37f0669c5acb51',
                        id: '62e80498fd37f0669c5acb51',
                      },
                      {
                        kind: 'Average',
                        _id: '62e80499fd37f0669c5acb53',
                        id: '62e80499fd37f0669c5acb53',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e80465fd37f0669c5acb3f',
                  },
                  modifier: null,
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 5,
                      _id: '6392537669184d4b2a4b5681',
                      id: '6392537669184d4b2a4b5681',
                    },
                  ],
                  junction: null,
                  _id: '6392537669184d4b2a4b5680',
                  id: '6392537669184d4b2a4b5680',
                },
              ],
              actions: [],
              documents: [],
              _id: '6392537669184d4b2a4b567f',
              id: '6392537669184d4b2a4b567f',
            },
            {
              title: '# of employees > 0',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    account_id: null,
                    _id: '62bfae99f6340dfa3e57b55f',
                    rating_title: 'Number of Employees',
                    system: 'System',
                    rating_stage: 'DOT',
                    access: [],
                    active: true,
                    description: '',
                    hints: [],
                    created_at: '2022-07-02T02:34:01.948Z',
                    updated_at: '2022-09-27T17:08:53.578Z',
                    selectors: [
                      {
                        title: 'Is Greater Than',
                        description:
                          'If the number of employees is greater than {{value}}',
                        inputs: [
                          {
                            kind: 'Number',
                            dropdown_values: null,
                            _id: '62c06348307684227d061d32',
                          },
                        ],
                        _id: '62c06348307684227d061d31',
                        id: '62c06348307684227d061d31',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    custom_feild_name: 'number_of_employees',
                    input_kind: 'Number',
                    custom_field_default_value: 0,
                    id: '62bfae99f6340dfa3e57b55f',
                  },
                  modifier: null,
                  selector: 'Is Greater Than',
                  inputs: [
                    {
                      value: 0,
                      _id: '639253ec69184d4b2a4b6235',
                      id: '639253ec69184d4b2a4b6235',
                    },
                  ],
                  junction: null,
                  _id: '639253ec69184d4b2a4b6234',
                  id: '639253ec69184d4b2a4b6234',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '639253ec69184d4b2a4b6236',
                  id: '639253ec69184d4b2a4b6236',
                },
              ],
              documents: [],
              _id: '639253ec69184d4b2a4b6233',
              id: '639253ec69184d4b2a4b6233',
            },
            {
              title: 'Driver w/ exactly one major violation',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62e7f9d16749dc0abfc5223e',
                    rating_title: 'Driver Major Violations',
                    system: 'System',
                    custom_feild_name: 'major_violations',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:37.719Z',
                    updated_at: '2022-08-31T20:28:56.807Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb990668ec117e2e390e6',
                        id: '630fb990668ec117e2e390e6',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc47acad909bc57118578',
                        id: '630fc47acad909bc57118578',
                      },
                      {
                        kind: 'All',
                        _id: '630fc47acad909bc5711857a',
                        id: '630fc47acad909bc5711857a',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9d16749dc0abfc5223e',
                  },
                  modifier: null,
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 1,
                      _id: '6392a1a4c7ac386f13b08fc0',
                      id: '6392a1a4c7ac386f13b08fc0',
                    },
                  ],
                  junction: null,
                  _id: '6392545469184d4b2a4b6666',
                  id: '6392545469184d4b2a4b6666',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '6392a11fc7ac386f13b07f88',
                  id: '6392a11fc7ac386f13b07f88',
                },
              ],
              documents: [],
              _id: '6392a1a4c7ac386f13b08fbe',
              id: '6392a1a4c7ac386f13b08fbe',
            },
            {
              title: 'Driver Accident At Fault = 2',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62e7f9e56749dc0abfc52240',
                    rating_title: 'Driver Accident At Fault',
                    system: 'System',
                    custom_feild_name: 'accident_at_fault',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:57.474Z',
                    updated_at: '2022-08-31T20:28:25.250Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb983668ec117e2e390e0',
                        id: '630fb983668ec117e2e390e0',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc466cad909bc57118568',
                        id: '630fc466cad909bc57118568',
                      },
                      {
                        kind: 'All',
                        _id: '630fc467cad909bc5711856a',
                        id: '630fc467cad909bc5711856a',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9e56749dc0abfc52240',
                  },
                  modifier: null,
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 2,
                      _id: '63c077f39998d757359f10b9',
                      id: '63c077f39998d757359f10b9',
                    },
                  ],
                  junction: null,
                  _id: '6392a1f6c7ac386f13b099a7',
                  id: '6392a1f6c7ac386f13b099a7',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1.755,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '6392a1f6c7ac386f13b099a9',
                  id: '6392a1f6c7ac386f13b099a9',
                },
              ],
              documents: [],
              _id: '63c077f39998d757359f10b7',
              id: '63c077f39998d757359f10b7',
            },
            {
              title: 'Driver major Violations = 1',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62e7f9d16749dc0abfc5223e',
                    rating_title: 'Driver Major Violations',
                    system: 'System',
                    custom_feild_name: 'major_violations',
                    input_kind: 'Number',
                    rating_stage: 'Drivers',
                    access: [],
                    account_id: null,
                    active: true,
                    description: null,
                    created_at: '2022-08-01T16:05:37.719Z',
                    updated_at: '2022-08-31T20:28:56.807Z',
                    selectors: [
                      {
                        title: 'Is Exactly',
                        description: 'Is Exactly {{value}}',
                        _id: '630fb990668ec117e2e390e6',
                        id: '630fb990668ec117e2e390e6',
                      },
                    ],
                    modifiers: [
                      {
                        kind: 'Any',
                        _id: '630fc47acad909bc57118578',
                        id: '630fc47acad909bc57118578',
                      },
                      {
                        kind: 'All',
                        _id: '630fc47acad909bc5711857a',
                        id: '630fc47acad909bc5711857a',
                      },
                    ],
                    __v: 0,
                    custom_field_default_value: null,
                    id: '62e7f9d16749dc0abfc5223e',
                  },
                  modifier: null,
                  selector: 'Is Exactly',
                  inputs: [
                    {
                      value: 1,
                      _id: '6392a53bc7ac386f13b0d3a1',
                      id: '6392a53bc7ac386f13b0d3a1',
                    },
                  ],
                  junction: null,
                  _id: '6392a273c7ac386f13b09e26',
                  id: '6392a273c7ac386f13b09e26',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Flat Rate',
                  rate: 1000,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '6392a273c7ac386f13b09e28',
                  id: '6392a273c7ac386f13b09e28',
                },
              ],
              documents: [],
              _id: '6392a53bc7ac386f13b0d39f',
              id: '6392a53bc7ac386f13b0d39f',
            },
            {
              title: 'Speed Gauge DOT Score',
              group: 'Standard',
              factor: [
                {
                  rating_factor: {
                    _id: '62c513d16d576cb876835ed3',
                    rating_title: 'Speed Gauge DOT Score',
                    system: 'Custom',
                    custom_feild_name: 'speed_gauge_dot_score',
                    input_kind: 'Number',
                    rating_stage: 'DOT',
                    access: ['Program Owner'],
                    account_id: '62210d2630652cd01506b0ac',
                    active: true,
                    description: null,
                    hints: [],
                    created_at: '2022-07-06T04:47:13.971Z',
                    updated_at: '2022-10-26T18:31:00.244Z',
                    selectors: [
                      {
                        title: 'Is Less Than',
                        description: 'If Score is less than {{value}}',
                        _id: '62c513f06d576cb876835edb',
                        id: '62c513f06d576cb876835edb',
                      },
                      {
                        title: 'Is In Between',
                        description:
                          'Score is between {{value_1}} and {{value_2}}',
                        _id: '62ed28ea9b27b4bf0ad08d01',
                        id: '62ed28ea9b27b4bf0ad08d01',
                      },
                    ],
                    modifiers: [],
                    __v: 0,
                    custom_field_default_value: 650,
                    id: '62c513d16d576cb876835ed3',
                  },
                  modifier: null,
                  selector: 'Is Less Than',
                  inputs: [
                    {
                      value: 900,
                      _id: '6392ab95c7ac386f13b0f8be',
                      id: '6392ab95c7ac386f13b0f8be',
                    },
                  ],
                  junction: null,
                  _id: '6392ab95c7ac386f13b0f8bd',
                  id: '6392ab95c7ac386f13b0f8bd',
                },
              ],
              actions: [
                {
                  fee: {
                    name: '',
                    rate_type: 'Flat Rate',
                    rate: 1,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  action: 'Adjust Rate',
                  rate_type: 'Percentage',
                  rate: 1.1,
                  rate_application: 'On Policy',
                  rate_group_type: null,
                  _id: '6392ab95c7ac386f13b0f8bf',
                  id: '6392ab95c7ac386f13b0f8bf',
                },
              ],
              documents: [],
              _id: '6392ab95c7ac386f13b0f8bc',
              id: '6392ab95c7ac386f13b0f8bc',
            },
          ],
          commodities: [
            {
              commodity: {
                _id: '62338146d0d6508d3ecb7bd0',
                category: 'dry goods',
                title: 'Cereal',
                sctg_code: '43126',
                created_at: '2022-03-17T18:43:18.678Z',
                updated_at: '2022-03-17T19:15:53.193Z',
                __v: 0,
                id: '62338146d0d6508d3ecb7bd0',
              },
              custom_title: null,
              classifications: [
                {
                  classification: 'Dry',
                  percentage_allowed: 100,
                  _id: '62ccbd9c25f267c684985aad',
                  id: '62ccbd9c25f267c684985aad',
                },
              ],
              actions: [
                {
                  fee: {
                    name: 'Fee',
                    rate_type: 'Flat Rate',
                    rate: 0,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  rate_group_type: null,
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1.005,
                  rate_application: 'On Policy',
                  _id: '62547a853c22c84341de0ec2',
                  id: '62547a853c22c84341de0ec2',
                },
              ],
              documents: [],
              _id: '62ccbd9c25f267c684985aac',
              id: '62ccbd9c25f267c684985aac',
            },
            {
              commodity: {
                _id: '623388cdd0d6508d3ecb7c2d',
                category: 'Other',
                title: 'Other',
                sctg_code: '00000',
                created_at: '2022-03-17T19:15:25.781Z',
                updated_at: '2022-03-17T19:15:25.782Z',
                __v: 0,
                id: '623388cdd0d6508d3ecb7c2d',
              },
              custom_title: 'Dry Goods',
              classifications: [
                {
                  classification: 'Dry',
                  percentage_allowed: 100,
                  _id: '628b7741fe0823bbc817ec04',
                  id: '628b7741fe0823bbc817ec04',
                },
              ],
              actions: [],
              documents: [],
              _id: '628b7741fe0823bbc817ec03',
              id: '628b7741fe0823bbc817ec03',
            },
            {
              commodity: {
                _id: '6231169e650bb03940b66287',
                category: 'produce1',
                title: 'Green Beans and Watermelon',
                sctg_code: '45091',
                created_at: '2022-03-15T22:43:42.753Z',
                updated_at: '2022-03-17T19:40:04.075Z',
                __v: 0,
                id: '6231169e650bb03940b66287',
              },
              custom_title: null,
              classifications: [
                {
                  classification: 'Reefer',
                  percentage_allowed: 100,
                  _id: '6287bd76fb8b341e0cb96c5c',
                  id: '6287bd76fb8b341e0cb96c5c',
                },
              ],
              actions: [],
              documents: [],
              _id: '6287bd76fb8b341e0cb96c5b',
              id: '6287bd76fb8b341e0cb96c5b',
            },
            {
              commodity: {
                _id: '623388cdd0d6508d3ecb7c2d',
                category: 'Other',
                title: 'Other',
                sctg_code: '00000',
                created_at: '2022-03-17T19:15:25.781Z',
                updated_at: '2022-03-17T19:15:25.782Z',
                __v: 0,
                id: '623388cdd0d6508d3ecb7c2d',
              },
              custom_title: 'Pigs',
              classifications: [
                {
                  classification: 'Dry',
                  percentage_allowed: 50,
                  _id: '62ccbd8e25f267c684985a9f',
                  id: '62ccbd8e25f267c684985a9f',
                },
              ],
              actions: [
                {
                  fee: {
                    name: 'Fee',
                    rate_type: 'Flat Rate',
                    rate: 0,
                    earned: 'Fully Earned',
                    tax_exempt: false,
                    rate_application: 'On Policy',
                    required: true,
                    selected: true,
                  },
                  rate_group_type: null,
                  action: 'Adjust Rate',
                  rate_type: 'Factor',
                  rate: 1.012,
                  rate_application: 'On Policy',
                  _id: '62acdd79aadd3c6d2e6c5a71',
                  id: '62acdd79aadd3c6d2e6c5a71',
                },
              ],
              documents: [],
              _id: '62ccbd8e25f267c684985a9e',
              id: '62ccbd8e25f267c684985a9e',
            },
          ],
          lines_of_coverage: [
            {
              _id: '620bf653f6de300dd98c603b',
              active: false,
              line_of_coverage: 'Auto Liability',
              created_at: '2022-02-15T18:52:03.397Z',
              updated_at: '2022-02-20T13:13:13.238Z',
              coverage_options: [
                {
                  limits: [],
                  split_limits: [],
                  deductibles: [],
                  access: [],
                  title: 'Med Pay',
                  state: '',
                  description:
                    'test description with more words to see if this ',
                  required_inputs: ['Employees'],
                  _id: '620db5777fd2f684f3d435af',
                  states: [],
                  id: '620db5777fd2f684f3d435af',
                },
                {
                  limits: [],
                  split_limits: [],
                  deductibles: [],
                  access: [],
                  title: 'Um/Uim',
                  description: 'Um/Uim',
                  states: ['LA', 'NJ'],
                  required_inputs: ['None'],
                  _id: '6255a3d548484eace0ec1e8a',
                  id: '6255a3d548484eace0ec1e8a',
                },
                {
                  limits: [],
                  split_limits: [],
                  deductibles: [],
                  access: [],
                  title: 'Hired Autos',
                  description: 'Hire Autos',
                  states: null,
                  required_inputs: ['Vehicles'],
                  _id: '6255ac9348484eace0ec2371',
                  id: '6255ac9348484eace0ec2371',
                },
                {
                  limits: [],
                  split_limits: [],
                  deductibles: [],
                  access: [],
                  title: 'Non Owned',
                  description: 'Non Owned',
                  states: null,
                  _id: '62d1d30c499a79b80e94289f',
                  id: '62d1d30c499a79b80e94289f',
                },
              ],
              __v: 0,
              id: '620bf653f6de300dd98c603b',
            },
          ],
          deductibles: [
            {
              deductible: 1500,
              rate_type: 'Factor',
              rate: 1.15,
              _id: '62d9b1f34ccbbbda5f0f448c',
              id: '62d9b1f34ccbbbda5f0f448c',
            },
            {
              deductible: 2500,
              rate_type: 'Factor',
              rate: 1,
              _id: '629a432421945ff218a1a093',
              id: '629a432421945ff218a1a093',
            },
            {
              deductible: 5000,
              rate_type: 'Factor',
              rate: 0.95,
              _id: '62d9b1f04ccbbbda5f0f447f',
              id: '62d9b1f04ccbbbda5f0f447f',
            },
          ],
          minimum_rate: 10000,
          id: '6229866307c7d3e5ef40aa43',
        },
        rate_adjustments: [
          {
            error: { message: null, error: null },
            factor_title: ['Adjust Rate'],
            rate_factors: [
              {
                _id: '638b529e51547ab1aabf3625',
                title: 'Accident/Violation 0/0 ',
                id: '638b529e51547ab1aabf3625',
              },
              {
                _id: '638b52a351547ab1aabf36ea',
                title: 'Violation/Accident 1/1',
                id: '638b52a351547ab1aabf36ea',
              },
            ],
            rate_type: 'Factor',
            rate: 0.85,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 12750,
            previous_quote_pure_premium_per_unit: 15000,
            total_counted: 2,
            count: 2,
            evaluation_factors: [
              {
                pass: false,
                data: [
                  {
                    custom_field: 'accident_at_fault',
                    value: 0,
                    final_value: 0,
                    pass: false,
                    junction: 'And',
                    _id: '63abaf388467fa07f109cb14',
                    id: '63abaf388467fa07f109cb14',
                  },
                  {
                    custom_field: 'minor_violations',
                    value: 0,
                    final_value: 0,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb15',
                    id: '63abaf388467fa07f109cb15',
                  },
                ],
                _id: '63abaf388467fa07f109cb13',
                id: '63abaf388467fa07f109cb13',
              },
              {
                pass: false,
                data: [
                  {
                    custom_field: 'accident_at_fault',
                    value: 0,
                    final_value: 0,
                    pass: false,
                    junction: 'And',
                    _id: '63abaf388467fa07f109cb17',
                    id: '63abaf388467fa07f109cb17',
                  },
                  {
                    custom_field: 'minor_violations',
                    value: 0,
                    final_value: 0,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb18',
                    id: '63abaf388467fa07f109cb18',
                  },
                ],
                _id: '63abaf388467fa07f109cb16',
                id: '63abaf388467fa07f109cb16',
              },
            ],
            actions: ['Adjust Rate'],
            _id: '63abaf388467fa07f109cb12',
            id: '63abaf388467fa07f109cb12',
          },
          {
            error: { message: null, error: null },
            factor_title: ['Adjust Rate'],
            rate_factors: [
              {
                _id: '63923c39491d657400cb8119',
                title: 'Just Document',
                id: '63923c39491d657400cb8119',
              },
            ],
            rate_type: 'Factor',
            rate: 1,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 12750,
            previous_quote_pure_premium_per_unit: 12750,
            total_counted: 1,
            count: 1,
            evaluation_factors: [
              {
                pass: false,
                data: [
                  {
                    custom_field: 'company_start_date',
                    value: {
                      year: 2012,
                      month: 4,
                      day: 12,
                      date: '2012-04-12T00:00:00.000Z',
                    },
                    final_value: 10,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb1b',
                    id: '63abaf388467fa07f109cb1b',
                  },
                ],
                _id: '63abaf388467fa07f109cb1a',
                id: '63abaf388467fa07f109cb1a',
              },
            ],
            actions: ['Adjust Rate'],
            _id: '63abaf388467fa07f109cb19',
            id: '63abaf388467fa07f109cb19',
          },
          {
            error: { message: null, error: null },
            factor_title: ['Adjust Rate'],
            rate_factors: [
              {
                _id: '63924e35f678d87709270353',
                title: 'Radius Less than 1000',
                id: '63924e35f678d87709270353',
              },
            ],
            rate_type: 'Factor',
            rate: 1,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 12750,
            previous_quote_pure_premium_per_unit: 12750,
            total_counted: 1,
            count: 1,
            evaluation_factors: [
              {
                pass: false,
                data: [
                  {
                    custom_field: 'radius',
                    value: 190,
                    final_value: 190,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb1e',
                    id: '63abaf388467fa07f109cb1e',
                  },
                ],
                _id: '63abaf388467fa07f109cb1d',
                id: '63abaf388467fa07f109cb1d',
              },
            ],
            actions: ['Adjust Rate'],
            _id: '63abaf388467fa07f109cb1c',
            id: '63abaf388467fa07f109cb1c',
          },
          {
            error: { message: null, error: null },
            factor_title: ['Adjust Rate'],
            rate_factors: [
              {
                _id: '639253ec69184d4b2a4b6233',
                title: '# of employees > 0',
                id: '639253ec69184d4b2a4b6233',
              },
            ],
            rate_type: 'Factor',
            rate: 1,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 12750,
            previous_quote_pure_premium_per_unit: 12750,
            total_counted: 1,
            count: 1,
            evaluation_factors: [
              {
                pass: false,
                data: [
                  {
                    custom_field: 'number_of_employees',
                    value: 6,
                    final_value: 6,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb21',
                    id: '63abaf388467fa07f109cb21',
                  },
                ],
                _id: '63abaf388467fa07f109cb20',
                id: '63abaf388467fa07f109cb20',
              },
            ],
            actions: ['Adjust Rate'],
            _id: '63abaf388467fa07f109cb1f',
            id: '63abaf388467fa07f109cb1f',
          },
          {
            error: { message: null, error: null },
            factor_title: ['Adjust Rate'],
            rate_factors: [
              {
                _id: '6392ab95c7ac386f13b0f8bc',
                title: 'Speed Gauge DOT Score',
                id: '6392ab95c7ac386f13b0f8bc',
              },
            ],
            rate_type: 'Percentage',
            rate: 1.1,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 12890.25,
            previous_quote_pure_premium_per_unit: 12750,
            total_counted: 1,
            count: 1,
            evaluation_factors: [
              {
                pass: false,
                data: [
                  {
                    custom_field: 'speed_gauge_dot_score',
                    value: 650,
                    final_value: 650,
                    pass: false,
                    junction: null,
                    _id: '63abaf388467fa07f109cb24',
                    id: '63abaf388467fa07f109cb24',
                  },
                ],
                _id: '63abaf388467fa07f109cb23',
                id: '63abaf388467fa07f109cb23',
              },
            ],
            actions: ['Adjust Rate'],
            _id: '63abaf388467fa07f109cb22',
            id: '63abaf388467fa07f109cb22',
          },
          {
            error: { message: null, error: null },
            factor_title: [],
            rate_factors: [
              { _id: null, title: 'Limit Selection 1000000', id: null },
            ],
            rate_type: 'Factor',
            rate: 1.1,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 14179.28,
            previous_quote_pure_premium_per_unit: 12890.25,
            total_counted: null,
            count: null,
            evaluation_factors: [],
            actions: [],
            _id: '63abaf388467fa07f109cb25',
            id: '63abaf388467fa07f109cb25',
          },
          {
            error: { message: null, error: null },
            factor_title: [],
            rate_factors: [
              { _id: null, title: 'Deductible Selection 1500', id: null },
            ],
            rate_type: 'Factor',
            rate: 1.15,
            rate_application: 'On Policy',
            quote_pure_premium_per_unit: 16306.17,
            previous_quote_pure_premium_per_unit: 14179.28,
            total_counted: null,
            count: null,
            evaluation_factors: [],
            actions: [],
            _id: '63abaf388467fa07f109cb26',
            id: '63abaf388467fa07f109cb26',
          },
        ],
        coverage_options: [
          {
            option: {
              limit: '1000',
              split_limit: null,
              rate_type: 'Flat Rate',
              rate: 2000,
              rate_application: 'On Policy',
              rating_factor: '62cc4fa6140cc1f9dde0cb6e',
              selector: 'Is In Between',
              inputs: [
                {
                  value: 2,
                  _id: '6393ba4467fb1e2800a772cd',
                  id: '6393ba4467fb1e2800a772cd',
                },
                {
                  value: 4,
                  _id: '6393ba4467fb1e2800a772ce',
                  id: '6393ba4467fb1e2800a772ce',
                },
              ],
              is_default: false,
            },
            title: 'Hired Autos',
            option_id: '6393ba4467fb1e2800a772cc',
            selected: true,
            rate: 2000,
            rate_type: 'Flat Rate',
            rate_application: 'On Policy',
            rate_application_count: 1,
            total: 2000,
            _id: '63abaf388467fa07f109cb27',
            id: '63abaf388467fa07f109cb27',
          },
          {
            option: {
              limit: '1000',
              rate_type: 'Flat Rate',
              rate: 136,
              rate_application: 'On Policy',
              rating_factor: '62bfae99f6340dfa3e57b55f',
              selector: 'Is In Between',
              inputs: [
                {
                  value: 1,
                  _id: '63332fbd72405f268828a9fb',
                  id: '63332fbd72405f268828a9fb',
                },
                {
                  value: 125,
                  _id: '63332fbd72405f268828a9fc',
                  id: '63332fbd72405f268828a9fc',
                },
              ],
              is_default: false,
            },
            title: 'Non Owned',
            option_id: '63332fbd72405f268828a9fa',
            selected: true,
            rate: 136,
            rate_type: 'Flat Rate',
            rate_application: 'On Policy',
            rate_application_count: 1,
            total: 136,
            _id: '63abaf388467fa07f109cb2a',
            id: '63abaf388467fa07f109cb2a',
          },
        ],
        fees: [
          {
            name: 'Policy',
            rate_type: 'Percentage',
            rate: 6,
            earned: 'Accrued',
            tax_exempt: false,
            rate_application: 'On Policy',
            required: true,
            selected: true,
            total: 2935.11,
            _id: '623858d33f04363fae678834',
            id: '623858d33f04363fae678834',
          },
          {
            name: 'Technology',
            rate_type: 'Flat Rate',
            rate: 150,
            earned: 'Fully Earned',
            tax_exempt: false,
            rate_application: 'On Policy',
            required: true,
            selected: true,
            total: 150,
            _id: '62ee7aa332b6553af294ce16',
            id: '62ee7aa332b6553af294ce16',
          },
          {
            name: 'Safety Fee',
            rate_type: 'Flat Rate',
            rate: 180,
            earned: 'Fully Earned',
            tax_exempt: false,
            rate_application: 'On Policy',
            required: false,
            selected: true,
            total: 180,
            _id: '63abaf388467fa07f109cb2f',
            id: '63abaf388467fa07f109cb2f',
          },
        ],
        taxes: [
          {
            title: 'State Tax',
            jurisdiction: 'CA',
            jurisdiction_code: null,
            rate_kind: 'Percentage',
            rate: 5.4,
            selected: true,
            total: 2641.6,
            _id: '638e2e8fde83dbd2e312d4e1',
            id: '638e2e8fde83dbd2e312d4e1',
          },
        ],
        quote_units: 3,
        quote_pure_premium_per_unit: 16306.17,
        quote_pure_premium: 48918.51,
        quote_coverage_premiums: 0,
        quote_coverage_total_premium: 48918.51,
        total_fees: 3265.11,
        total_taxable_premium: 48918.51,
        total_taxes: 2641.6,
        total_premium_per_unit: 18275.07,
        total_premium: 54825.22,
        credits: [],
        admin_locked: false,
        _id: '63abaee28467fa07f109bea0',
        id: '63abaee28467fa07f109bea0',
      },
    ],
    power_units: [
      {
        vin_response: {
          ABS: '',
          ActiveSafetySysNote: '',
          AdaptiveCruiseControl: '',
          AdaptiveDrivingBeam: '',
          AdaptiveHeadlights: '',
          AdditionalErrorText: '',
          AirBagLocCurtain: '',
          AirBagLocFront: '',
          AirBagLocKnee: '',
          AirBagLocSeatCushion: '',
          AirBagLocSide: '',
          AutoReverseSystem: '',
          AutomaticPedestrianAlertingSound: '',
          AxleConfiguration: '',
          Axles: '',
          BasePrice: '',
          BatteryA: '',
          BatteryA_to: '',
          BatteryCells: '',
          BatteryInfo: '',
          BatteryKWh: '',
          BatteryKWh_to: '',
          BatteryModules: '',
          BatteryPacks: '',
          BatteryType: '',
          BatteryV: '',
          BatteryV_to: '',
          BedLengthIN: '',
          BedType: '',
          BlindSpotIntervention: '',
          BlindSpotMon: '',
          BodyCabType: 'MDHD: Conventional',
          BodyClass: 'Truck-Tractor',
          BrakeSystemDesc: '',
          BrakeSystemType: 'Air and Hydraulic',
          BusFloorConfigType: 'Not Applicable',
          BusLength: '',
          BusType: 'Not Applicable',
          CAN_AACN: '',
          CIB: '',
          CashForClunkers: '',
          ChargerLevel: '',
          ChargerPowerKW: '',
          CoolingType: '',
          CurbWeightLB: '',
          CustomMotorcycleType: 'Not Applicable',
          DaytimeRunningLight: '',
          DestinationMarket: '',
          DisplacementCC: '14800.0',
          DisplacementCI: '903.15141260203',
          DisplacementL: '14.8',
          Doors: '',
          DriveType: '6x4',
          DriverAssist: '',
          DynamicBrakeSupport: '',
          EDR: '',
          ESC: '',
          EVDriveUnit: '',
          ElectrificationLevel: '',
          EngineConfiguration: 'In-Line',
          EngineCycles: '',
          EngineCylinders: '6',
          EngineHP: '',
          EngineHP_to: '',
          EngineKW: '',
          EngineManufacturer: '',
          EngineModel: 'Detroit Diesel DD15',
          EntertainmentSystem: '',
          ErrorCode: '0',
          ErrorText:
            '0 - VIN decoded clean. Check Digit (9th position) is correct',
          ForwardCollisionWarning: '',
          FuelInjectionType: '',
          FuelTypePrimary: 'Diesel',
          FuelTypeSecondary: '',
          GCWR: '',
          GCWR_to: '',
          GVWR: 'Class 8: 33,001 lb and above (14,969 kg and above)',
          GVWR_to: '',
          KeylessIgnition: '',
          LaneCenteringAssistance: '',
          LaneDepartureWarning: '',
          LaneKeepSystem: '',
          LowerBeamHeadlampLightSource: '',
          Make: 'FREIGHTLINER',
          MakeID: '450',
          Manufacturer: 'DAIMLER TRUCKS NORTH AMERICA LLC',
          ManufacturerId: '1024',
          Model: 'Cascadia',
          ModelID: '2501',
          ModelYear: '2013',
          MotorcycleChassisType: 'Not Applicable',
          MotorcycleSuspensionType: 'Not Applicable',
          NCSABodyType: '',
          NCSAMake: '',
          NCSAMapExcApprovedBy: '',
          NCSAMapExcApprovedOn: '',
          NCSAMappingException: '',
          NCSAModel: '',
          NCSANote: '',
          NonLandUse: '',
          Note: '125" sleepercab',
          OtherBusInfo: '',
          OtherEngineInfo: '',
          OtherMotorcycleInfo: '',
          OtherRestraintSystemInfo: '',
          OtherTrailerInfo: '',
          ParkAssist: '',
          PedestrianAutomaticEmergencyBraking: '',
          PlantCity: 'CLEVELAND',
          PlantCompanyName: '',
          PlantCountry: 'UNITED STATES (USA)',
          PlantState: 'NORTH CAROLINA',
          PossibleValues: '',
          Pretensioner: '',
          RearAutomaticEmergencyBraking: '',
          RearCrossTrafficAlert: '',
          RearVisibilitySystem: '',
          SAEAutomationLevel: '',
          SAEAutomationLevel_to: '',
          SeatBeltsAll: '',
          SeatRows: '',
          Seats: '',
          SemiautomaticHeadlampBeamSwitching: '',
          Series: '',
          Series2: '',
          SteeringLocation: '',
          SuggestedVIN: '',
          TPMS: '',
          TopSpeedMPH: '',
          TrackWidth: '',
          TractionControl: '',
          TrailerBodyType: 'Not Applicable',
          TrailerLength: '',
          TrailerType: 'Not Applicable',
          TransmissionSpeeds: '',
          TransmissionStyle: '',
          Trim: '',
          Trim2: '',
          Turbo: '',
          VIN: '1FUJGLDRXDLBR8628',
          ValveTrainDesign: '',
          VehicleDescriptor: '1FUJGLDR*DL',
          VehicleType: 'TRUCK ',
          WheelBaseLong: '',
          WheelBaseShort: '',
          WheelBaseType: '',
          WheelSizeFront: '',
          WheelSizeRear: '',
          Wheels: '',
          Windows: '',
        },
        vin: '1FUJGLDRXDLBR8628',
        unit_type: 'Truck',
        year: 2013,
        make: 'FREIGHTLINER',
        model: 'Cascadia',
        owned: true,
        listed: true,
        included: true,
        grwv: 33001,
        total_insured_value: null,
        documents: [],
        _id: '63abaea98467fa07f109bcf3',
        id: '63abaea98467fa07f109bcf3',
      },
      {
        vin_response: {
          ABS: '',
          ActiveSafetySysNote: '',
          AdaptiveCruiseControl: '',
          AdaptiveDrivingBeam: '',
          AdaptiveHeadlights: '',
          AdditionalErrorText: '',
          AirBagLocCurtain: '',
          AirBagLocFront: '',
          AirBagLocKnee: '',
          AirBagLocSeatCushion: '',
          AirBagLocSide: '',
          AutoReverseSystem: '',
          AutomaticPedestrianAlertingSound: '',
          AxleConfiguration: '',
          Axles: '',
          BasePrice: '',
          BatteryA: '',
          BatteryA_to: '',
          BatteryCells: '',
          BatteryInfo: '',
          BatteryKWh: '',
          BatteryKWh_to: '',
          BatteryModules: '',
          BatteryPacks: '',
          BatteryType: '',
          BatteryV: '',
          BatteryV_to: '',
          BedLengthIN: '',
          BedType: '',
          BlindSpotIntervention: '',
          BlindSpotMon: '',
          BodyCabType: 'MDHD: Conventional',
          BodyClass: 'Truck-Tractor',
          BrakeSystemDesc: '',
          BrakeSystemType: 'Air',
          BusFloorConfigType: 'Not Applicable',
          BusLength: '',
          BusType: 'Not Applicable',
          CAN_AACN: '',
          CIB: '',
          CashForClunkers: '',
          ChargerLevel: '',
          ChargerPowerKW: '',
          CoolingType: '',
          CurbWeightLB: '',
          CustomMotorcycleType: 'Not Applicable',
          DaytimeRunningLight: '',
          DestinationMarket: '',
          DisplacementCC: '14000',
          DisplacementCI: '854.3324173262',
          DisplacementL: '14',
          Doors: '',
          DriveType: '6x4',
          DriverAssist: '',
          DynamicBrakeSupport: '',
          EDR: '',
          ESC: '',
          EVDriveUnit: '',
          ElectrificationLevel: '',
          EngineConfiguration: 'In-Line',
          EngineCycles: '',
          EngineCylinders: '6',
          EngineHP: '',
          EngineHP_to: '',
          EngineKW: '',
          EngineManufacturer: '',
          EngineModel: 'Detroit Series 60',
          EntertainmentSystem: '',
          ErrorCode: '0',
          ErrorText:
            '0 - VIN decoded clean. Check Digit (9th position) is correct',
          ForwardCollisionWarning: '',
          FuelInjectionType: '',
          FuelTypePrimary: 'Diesel',
          FuelTypeSecondary: '',
          GCWR: '',
          GCWR_to: '',
          GVWR: 'Class 8: 33,001 lb and above (14,969 kg and above)',
          GVWR_to: '',
          KeylessIgnition: '',
          LaneCenteringAssistance: '',
          LaneDepartureWarning: '',
          LaneKeepSystem: '',
          LowerBeamHeadlampLightSource: '',
          Make: 'FREIGHTLINER',
          MakeID: '450',
          Manufacturer: 'DAIMLER TRUCKS NORTH AMERICA LLC',
          ManufacturerId: '1024',
          Model: 'CST120',
          ModelID: '2742',
          ModelYear: '2005',
          MotorcycleChassisType: 'Not Applicable',
          MotorcycleSuspensionType: 'Not Applicable',
          NCSABodyType: '',
          NCSAMake: '',
          NCSAMapExcApprovedBy: '',
          NCSAMapExcApprovedOn: '',
          NCSAMappingException: '',
          NCSAModel: '',
          NCSANote: '',
          NonLandUse: '',
          Note: '',
          OtherBusInfo: '',
          OtherEngineInfo: '',
          OtherMotorcycleInfo: '',
          OtherRestraintSystemInfo: '',
          OtherTrailerInfo: '',
          ParkAssist: '',
          PedestrianAutomaticEmergencyBraking: '',
          PlantCity: 'CLEVELAND',
          PlantCompanyName: '',
          PlantCountry: 'UNITED STATES (USA)',
          PlantState: 'NORTH CAROLINA',
          PossibleValues: '',
          Pretensioner: '',
          RearAutomaticEmergencyBraking: '',
          RearCrossTrafficAlert: '',
          RearVisibilitySystem: '',
          SAEAutomationLevel: '',
          SAEAutomationLevel_to: '',
          SeatBeltsAll: '',
          SeatRows: '',
          Seats: '',
          SemiautomaticHeadlampBeamSwitching: '',
          Series: '',
          Series2: '',
          SteeringLocation: '',
          SuggestedVIN: '',
          TPMS: '',
          TopSpeedMPH: '',
          TrackWidth: '',
          TractionControl: '',
          TrailerBodyType: 'Not Applicable',
          TrailerLength: '',
          TrailerType: 'Not Applicable',
          TransmissionSpeeds: '',
          TransmissionStyle: '',
          Trim: '',
          Trim2: '',
          Turbo: '',
          VIN: '1FUJBBCK65LU55036',
          ValveTrainDesign: '',
          VehicleDescriptor: '1FUJBBCK*5L',
          VehicleType: 'TRUCK ',
          WheelBaseLong: '',
          WheelBaseShort: '',
          WheelBaseType: '',
          WheelSizeFront: '',
          WheelSizeRear: '',
          Wheels: '',
          Windows: '',
        },
        vin: '1FUJBBCK65LU55036',
        unit_type: 'Truck',
        year: 2005,
        make: 'FREIGHTLINER',
        model: 'CST120',
        owned: true,
        listed: true,
        included: true,
        grwv: 33001,
        total_insured_value: null,
        documents: [],
        _id: '63abaeb38467fa07f109bcfb',
        id: '63abaeb38467fa07f109bcfb',
      },
      {
        vin_response: {
          ABS: '',
          ActiveSafetySysNote: '',
          AdaptiveCruiseControl: '',
          AdaptiveDrivingBeam: '',
          AdaptiveHeadlights: '',
          AdditionalErrorText: '',
          AirBagLocCurtain: '',
          AirBagLocFront: '',
          AirBagLocKnee: '',
          AirBagLocSeatCushion: '',
          AirBagLocSide: '',
          AutoReverseSystem: '',
          AutomaticPedestrianAlertingSound: '',
          AxleConfiguration: '',
          Axles: '',
          BasePrice: '',
          BatteryA: '',
          BatteryA_to: '',
          BatteryCells: '',
          BatteryInfo: '',
          BatteryKWh: '',
          BatteryKWh_to: '',
          BatteryModules: '',
          BatteryPacks: '',
          BatteryType: '',
          BatteryV: '',
          BatteryV_to: '',
          BedLengthIN: '',
          BedType: '',
          BlindSpotIntervention: '',
          BlindSpotMon: '',
          BodyCabType: 'MDHD: Conventional',
          BodyClass: 'Truck-Tractor',
          BrakeSystemDesc: '',
          BrakeSystemType: 'Air',
          BusFloorConfigType: 'Not Applicable',
          BusLength: '',
          BusType: 'Not Applicable',
          CAN_AACN: '',
          CIB: '',
          CashForClunkers: '',
          ChargerLevel: '',
          ChargerPowerKW: '',
          CoolingType: '',
          CurbWeightLB: '',
          CustomMotorcycleType: 'Not Applicable',
          DaytimeRunningLight: '',
          DestinationMarket: '',
          DisplacementCC: '14900.0',
          DisplacementCI: '909.25378701151',
          DisplacementL: '14.9',
          Doors: '',
          DriveType: '6x4',
          DriverAssist: '',
          DynamicBrakeSupport: '',
          EDR: '',
          ESC: '',
          EVDriveUnit: '',
          ElectrificationLevel: '',
          EngineConfiguration: 'In-Line',
          EngineCycles: '',
          EngineCylinders: '6',
          EngineHP: '',
          EngineHP_to: '',
          EngineKW: '',
          EngineManufacturer: '',
          EngineModel: 'Cummins ISX',
          EntertainmentSystem: '',
          ErrorCode: '0',
          ErrorText:
            '0 - VIN decoded clean. Check Digit (9th position) is correct',
          ForwardCollisionWarning: '',
          FuelInjectionType: '',
          FuelTypePrimary: 'Diesel',
          FuelTypeSecondary: '',
          GCWR: '',
          GCWR_to: '',
          GVWR: 'Class 8: 33,001 lb and above (14,969 kg and above)',
          GVWR_to: '',
          KeylessIgnition: '',
          LaneCenteringAssistance: '',
          LaneDepartureWarning: '',
          LaneKeepSystem: '',
          LowerBeamHeadlampLightSource: '',
          Make: 'FREIGHTLINER',
          MakeID: '450',
          Manufacturer: 'DAIMLER TRUCKS NORTH AMERICA LLC',
          ManufacturerId: '1024',
          Model: 'Cascadia',
          ModelID: '2501',
          ModelYear: '2012',
          MotorcycleChassisType: 'Not Applicable',
          MotorcycleSuspensionType: 'Not Applicable',
          NCSABodyType: '',
          NCSAMake: '',
          NCSAMapExcApprovedBy: '',
          NCSAMapExcApprovedOn: '',
          NCSAMappingException: '',
          NCSAModel: '',
          NCSANote: '',
          NonLandUse: '',
          Note: '125" sleepercab',
          OtherBusInfo: '',
          OtherEngineInfo: '',
          OtherMotorcycleInfo: '',
          OtherRestraintSystemInfo: '',
          OtherTrailerInfo: '',
          ParkAssist: '',
          PedestrianAutomaticEmergencyBraking: '',
          PlantCity: 'SALTILLO',
          PlantCompanyName: '',
          PlantCountry: 'MEXICO',
          PlantState: 'COAHUILA',
          PossibleValues: '',
          Pretensioner: '',
          RearAutomaticEmergencyBraking: '',
          RearCrossTrafficAlert: '',
          RearVisibilitySystem: '',
          SAEAutomationLevel: '',
          SAEAutomationLevel_to: '',
          SeatBeltsAll: '',
          SeatRows: '',
          Seats: '',
          SemiautomaticHeadlampBeamSwitching: '',
          Series: '',
          Series2: '',
          SteeringLocation: '',
          SuggestedVIN: '',
          TPMS: '',
          TopSpeedMPH: '',
          TrackWidth: '',
          TractionControl: '',
          TrailerBodyType: 'Not Applicable',
          TrailerLength: '',
          TrailerType: 'Not Applicable',
          TransmissionSpeeds: '',
          TransmissionStyle: '',
          Trim: '',
          Trim2: '',
          Turbo: '',
          VIN: '1FUJGLBG5CSBJ5855',
          ValveTrainDesign: '',
          VehicleDescriptor: '1FUJGLBG*CS',
          VehicleType: 'TRUCK ',
          WheelBaseLong: '',
          WheelBaseShort: '',
          WheelBaseType: '',
          WheelSizeFront: '',
          WheelSizeRear: '',
          Wheels: '',
          Windows: '',
        },
        vin: '1FUJGLBG5CSBJ5855',
        unit_type: 'Truck',
        year: 2012,
        make: 'FREIGHTLINER',
        model: 'Cascadia',
        owned: true,
        listed: true,
        included: true,
        grwv: 33001,
        total_insured_value: null,
        documents: [],
        _id: '63abaec28467fa07f109bd04',
        id: '63abaec28467fa07f109bd04',
      },
    ],
    drivers: [
      {
        profile: {
          date_of_birth: {
            date: '2001-01-12T00:00:00.000Z',
            year: 2001,
            month: 1,
            day: 12,
          },
          first_name: 'asdf',
          last_name: 'asdf',
          gender: 'Male',
          phone: null,
          marital_status: null,
        },
        hire_date: {
          date: '2022-12-02T00:00:00.000Z',
          year: 2022,
          month: 12,
          day: 2,
        },
        experience_date: {
          date: '2009-12-23T00:00:00.000Z',
          year: 2009,
          month: 12,
          day: 23,
        },
        dl_number: 'asdf234234',
        dl_state: 'DE',
        included: true,
        listed: true,
        minor_violations: 0,
        major_violations: 0,
        accident_at_fault: 0,
        accident_not_at_fault: 0,
        documents: [
          {
            created_by: {
              user: '6229690373ef8a20ddda1cce',
              full_name: 'Test Rename',
            },
            title: 'Alaska UM SelRej.pdf',
            document: {
              _id: '63abaf0b48c1c4af8473f98f',
              updated_at: '2022-12-28T02:50:51.644Z',
              created_by: '6229690373ef8a20ddda1cce',
              account_id: '62210d2630652cd01506b0ac',
              is_deleted: false,
              fieldname: 'file',
              originalname: 'Alaska UM SelRej.pdf',
              encoding: '7bit',
              mimetype: 'application/pdf',
              size: 65809,
              acl: 'private',
              contentType: 'application/pdf',
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/7ff3a/Alaska UM SelRej.pdf',
              Location:
                'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/7ff3a/Alaska UM SelRej.pdf',
              Key: '62210d2630652cd01506b0ac/7ff3a/Alaska UM SelRej.pdf',
              Bucket: 'skylabis-accounts',
              region: 'us-west-2',
              metadata: {
                user_id: '6229690373ef8a20ddda1cce',
                account_id: '62210d2630652cd01506b0ac',
              },
              created_at: '2022-12-28T02:50:51.644Z',
              __v: 0,
              id: '63abaf0b48c1c4af8473f98f',
            },
            access: [],
            stages: [],
            _id: '63abaf0c8467fa07f109c31a',
            created_at: '2022-12-28T02:50:52.620Z',
            id: '63abaf0c8467fa07f109c31a',
          },
        ],
        _id: '63a222269238b5d316485384',
        id: '63a222269238b5d316485384',
      },
      {
        profile: {
          date_of_birth: {
            date: '1990-03-02T00:00:00.000Z',
            year: 1990,
            month: 3,
            day: 2,
          },
          first_name: 'Mad',
          last_name: 'Mad',
          gender: 'Male',
          phone: null,
          marital_status: null,
        },
        hire_date: {
          date: '2022-12-16T00:00:00.000Z',
          year: 2022,
          month: 12,
          day: 16,
        },
        experience_date: {
          date: '2022-12-13T00:00:00.000Z',
          year: 2022,
          month: 12,
          day: 13,
        },
        dl_number: '8765433',
        dl_state: 'CA',
        included: true,
        listed: true,
        minor_violations: 0,
        major_violations: 0,
        accident_at_fault: 1,
        accident_not_at_fault: 0,
        documents: [
          {
            created_by: {
              user: '6229690373ef8a20ddda1cce',
              full_name: 'Test Rename',
            },
            title: 'Alaska UM SelRej.pdf',
            document: {
              _id: '63abaf1748c1c4af8473f991',
              updated_at: '2022-12-28T02:51:03.091Z',
              created_by: '6229690373ef8a20ddda1cce',
              account_id: '62210d2630652cd01506b0ac',
              is_deleted: false,
              fieldname: 'file',
              originalname: 'Alaska UM SelRej.pdf',
              encoding: '7bit',
              mimetype: 'application/pdf',
              size: 65809,
              acl: 'private',
              contentType: 'application/pdf',
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/053ab/Alaska UM SelRej.pdf',
              Location:
                'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/053ab/Alaska UM SelRej.pdf',
              Key: '62210d2630652cd01506b0ac/053ab/Alaska UM SelRej.pdf',
              Bucket: 'skylabis-accounts',
              region: 'us-west-2',
              metadata: {
                user_id: '6229690373ef8a20ddda1cce',
                account_id: '62210d2630652cd01506b0ac',
              },
              created_at: '2022-12-28T02:51:03.092Z',
              __v: 0,
              id: '63abaf1748c1c4af8473f991',
            },
            access: [],
            stages: [],
            _id: '63abaf188467fa07f109c563',
            created_at: '2022-12-28T02:51:04.248Z',
            id: '63abaf188467fa07f109c563',
          },
        ],
        _id: '63abae738467fa07f109bce6',
        id: '63abae738467fa07f109bce6',
      },
      {
        profile: {
          date_of_birth: {
            date: '1985-05-05T00:00:00.000Z',
            year: 1985,
            month: 5,
            day: 5,
          },
          first_name: 'Hi',
          last_name: 'Maddi',
          gender: 'Male',
          phone: null,
          marital_status: null,
        },
        hire_date: {
          date: '2022-12-03T00:00:00.000Z',
          year: 2022,
          month: 12,
          day: 3,
        },
        experience_date: {
          date: '2022-12-22T00:00:00.000Z',
          year: 2022,
          month: 12,
          day: 22,
        },
        dl_number: '7675634524',
        dl_state: 'FL',
        included: true,
        listed: true,
        minor_violations: 0,
        major_violations: 0,
        accident_at_fault: 0,
        accident_not_at_fault: 1,
        documents: [
          {
            created_by: {
              user: '6229690373ef8a20ddda1cce',
              full_name: 'Test Rename',
            },
            title: 'Alaska UM SelRej.pdf',
            document: {
              _id: '63abaf3248c1c4af8473f993',
              updated_at: '2022-12-28T02:51:30.186Z',
              created_by: '6229690373ef8a20ddda1cce',
              account_id: '62210d2630652cd01506b0ac',
              is_deleted: false,
              fieldname: 'file',
              originalname: 'Alaska UM SelRej.pdf',
              encoding: '7bit',
              mimetype: 'application/pdf',
              size: 65809,
              acl: 'private',
              contentType: 'application/pdf',
              url: 'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/59478/Alaska UM SelRej.pdf',
              Location:
                'https://skylabis-accounts.s3.us-west-2.amazonaws.com/62210d2630652cd01506b0ac/59478/Alaska UM SelRej.pdf',
              Key: '62210d2630652cd01506b0ac/59478/Alaska UM SelRej.pdf',
              Bucket: 'skylabis-accounts',
              region: 'us-west-2',
              metadata: {
                user_id: '6229690373ef8a20ddda1cce',
                account_id: '62210d2630652cd01506b0ac',
              },
              created_at: '2022-12-28T02:51:30.186Z',
              __v: 0,
              id: '63abaf3248c1c4af8473f993',
            },
            access: [],
            stages: [],
            _id: '63abaf338467fa07f109c7ae',
            created_at: '2022-12-28T02:51:31.233Z',
            id: '63abaf338467fa07f109c7ae',
          },
        ],
        _id: '63abae978467fa07f109bcec',
        id: '63abae978467fa07f109bcec',
      },
    ],
    starting_rates: [],
    endorsements: [],
    losses: [],
    commodities: [],
    documents: [],
    created_at: '2022-12-28T02:50:10.897Z',
    updated_at: '2023-01-20T22:02:44.043Z',
    __v: 0,
    notes: [
      {
        created_by: {
          user: '61f3f3103db0ca3687dc6b5f',
          account: '62210d2630652cd01506b0ac',
          full_name: 'Robert Stadnick',
        },
        subject: '',
        text: 'Notes Test',
        private: false,
        created_at: '2023-01-20T22:02:44.013Z',
        updated_at: '2023-01-20T19:32:55.043Z',
        send_notifications: false,
        sent_notifications: false,
        mentions: [],
        _id: '63cb0f84b39db54518463a9e',
        id: '63cb0f84b39db54518463a9e',
      },
    ],
    transactions: [],
    program_company: {
      address: {
        street: '11234 Test Street',
        street_2: 'Street Two',
        city: 'Boise',
        state: 'ID',
        code: '83675',
        country: 'US',
      },
      connections: {
        last_code: null,
        connection_code: [
          {
            format: 'String',
            value: 'SKY',
            length: 0,
            _id: '63a37c452a99793c834802b2',
            id: '63a37c452a99793c834802b2',
          },
          {
            format: 'Random Numbers',
            value: '',
            length: 4,
            _id: '63a37c452a99793c834802b3',
            id: '63a37c452a99793c834802b3',
          },
        ],
      },
      _id: '62210d2630652cd01506b0ac',
      status: 'Trialing',
      account_type: 'Client',
      company_name: 'Stadnick MGA',
      account_owner: '61f3f3103db0ca3687dc6b5f',
      phone: '1234561234',
      stripe_customer: {
        id: 'cus_LFpK6BX6ByGDhe',
        object: 'customer',
        address: {
          city: 'Meridian',
          country: 'US',
          line1: '615 E Trinidad Dr',
          line2: null,
          postal_code: '83642',
          state: 'ID',
        },
        balance: 0,
        created: 1646333223,
        currency: 'usd',
        default_currency: 'usd',
        default_source: 'src_1LTcs0G3qvuZwHxfJm0Rpsvt',
        delinquent: false,
        description: null,
        discount: null,
        email: 'robstadnick@gmail.com',
        invoice_prefix: '128FB6A7',
        invoice_settings: {
          custom_fields: null,
          default_payment_method: 'pm_1LFdueG3qvuZwHxfCWJj8frB',
          footer: null,
          rendering_options: null,
        },
        livemode: false,
        metadata: { account: 'Client' },
        name: 'Stadnick MGA',
        next_invoice_sequence: 11,
        phone: '1234561234',
        preferred_locales: [],
        shipping: null,
        tax_exempt: 'none',
        test_clock: null,
      },
      created_at: '2022-03-03T18:47:02.472Z',
      updated_at: '2023-01-01T13:26:58.590Z',
      __v: 0,
      subscriptions: [],
      products: [
        {
          status: 'Active',
          product: '62234def991b8d16af9b0cc4',
          subscriptions: ['62bafb4098e7a3a054a6ab1d'],
          _id: '62bb63d6f7a4944cf31e4d21',
          id: '62bb63d6f7a4944cf31e4d21',
        },
      ],
      payment_methods: [
        {
          id: 'pm_1LFdueG3qvuZwHxfCWJj8frB',
          object: 'payment_method',
          billing_details: {
            address: {
              city: 'Meridian',
              country: 'US',
              line1: '615 E Trinidad Dr',
              line2: null,
              postal_code: '83642',
              state: 'ID',
            },
            email: 'robstadnick@gmail.com',
            name: 'Stadnick MGA',
            phone: null,
          },
          created: 1656420784,
          customer: 'cus_LFpK6BX6ByGDhe',
          livemode: false,
          type: 'us_bank_account',
          us_bank_account: {
            account_holder_type: 'individual',
            account_type: 'checking',
            bank_name: 'STRIPE TEST BANK',
            financial_connections_account: 'fca_1LFduIG3qvuZwHxfULzNzLEP',
            fingerprint: 't2qqjg6guVF6IULT',
            last4: '6789',
            networks: {
              preferred: 'ach',
              supported: ['ach', 'us_domestic_wire'],
            },
            routing_number: '110000000',
          },
        },
      ],
      email: 'robstadnick@gmail.com',
      licences: [
        {
          licence_type: 'Surplus License',
          owner: 'Individual',
          license_number: '4242424',
          state: 'AK',
          _id: '63a37c452a99793c834802ae',
          id: '63a37c452a99793c834802ae',
        },
        {
          licence_type: 'Property Casualty License',
          owner: 'Agency',
          license_number: '5656565',
          state: 'AL',
          _id: '63a37c452a99793c834802af',
          id: '63a37c452a99793c834802af',
        },
        {
          licence_type: 'Surplus License',
          owner: 'Individual',
          license_number: '234234234',
          state: 'Open this select menu',
          _id: '63a37c452a99793c834802b0',
          id: '63a37c452a99793c834802b0',
        },
        {
          licence_type: 'Life Health License',
          owner: 'Individual',
          license_number: 'q234234234',
          state: 'Open this select menu',
          _id: '63a37c452a99793c834802b1',
          id: '63a37c452a99793c834802b1',
        },
      ],
      id: '62210d2630652cd01506b0ac',
    },
    owner_company: {
      address: {
        street: '11234 Test Street',
        street_2: 'Street Two',
        city: 'Boise',
        state: 'ID',
        code: '83675',
        country: 'US',
      },
      connections: {
        last_code: null,
        connection_code: [
          {
            format: 'String',
            value: 'SKY',
            length: 0,
            _id: '63a37c452a99793c834802b2',
            id: '63a37c452a99793c834802b2',
          },
          {
            format: 'Random Numbers',
            value: '',
            length: 4,
            _id: '63a37c452a99793c834802b3',
            id: '63a37c452a99793c834802b3',
          },
        ],
      },
      _id: '62210d2630652cd01506b0ac',
      status: 'Trialing',
      account_type: 'Client',
      company_name: 'Stadnick MGA',
      account_owner: '61f3f3103db0ca3687dc6b5f',
      phone: '1234561234',
      created_at: '2022-03-03T18:47:02.472Z',
      updated_at: '2023-01-01T13:26:58.590Z',
      __v: 0,
      subscriptions: [],
      products: [
        {
          status: 'Active',
          product: '62234def991b8d16af9b0cc4',
          subscriptions: ['62bafb4098e7a3a054a6ab1d'],
          _id: '62bb63d6f7a4944cf31e4d21',
          id: '62bb63d6f7a4944cf31e4d21',
        },
      ],
      email: 'robstadnick@gmail.com',
      licences: [
        {
          licence_type: 'Surplus License',
          owner: 'Individual',
          license_number: '4242424',
          state: 'AK',
          _id: '63a37c452a99793c834802ae',
          id: '63a37c452a99793c834802ae',
        },
        {
          licence_type: 'Property Casualty License',
          owner: 'Agency',
          license_number: '5656565',
          state: 'AL',
          _id: '63a37c452a99793c834802af',
          id: '63a37c452a99793c834802af',
        },
        {
          licence_type: 'Surplus License',
          owner: 'Individual',
          license_number: '234234234',
          state: 'Open this select menu',
          _id: '63a37c452a99793c834802b0',
          id: '63a37c452a99793c834802b0',
        },
        {
          licence_type: 'Life Health License',
          owner: 'Individual',
          license_number: 'q234234234',
          state: 'Open this select menu',
          _id: '63a37c452a99793c834802b1',
          id: '63a37c452a99793c834802b1',
        },
      ],
      id: '62210d2630652cd01506b0ac',
    },
    id: '63abaee28467fa07f109be9f',
  };

  documents = [
    {
      origin: 'Rate Schedule State',
      document: {
        merge_tag: { tag: 'Policy Deck', index: 0, base: false },
        title: 'GA UM Selction.pdf',
        description: null,
        stages: ['Application'],
        required: false,
        active: true,
        document: {
          mimetype: 'application/pdf',
          size: 84969,
          acl: 'private',
          contentType: 'application/pdf',
          url: 'https://media.skylabinsurancesolutions.com/media/62210d2630652cd01506b0ac/62504fe9ed69aaf351152eb1/62504fe9ed69aaf351152eb1.pdf',
        },
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
        _id: '63d983fc2de481cb6d4c401c',
      },
    },
    {
      origin: 'Rate Schedule',
      document: {
        merge_tag: { tag: 'Policy Deck', index: 1, base: false },
        title: 'COMPLETE POLICY.docx',
        description: null,
        stages: ['Application'],
        required: false,
        active: true,
        document: {
          mimetype:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          size: 243610,
          acl: 'private',
          contentType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          url: 'https://media.skylabinsurancesolutions.com/media/63e4075598df7365cd351e6d/63e4075598df7365cd351e6d.docx',
        },
        access: ['Rate Schedule Owner', 'Program Owner', 'Quote Owner'],
        _id: '63d985a42de481cb6d4c44f0',
      },
    },
  ];

  jsonReplacementData = {
    policy_number: 'TBD',
    pol_eff_date: 'Thu, Dec 29, 2022',
    pol_exp_date: 'Fri, Dec 29, 2023',
    pol_bind_date: 'TBD',
    date: 'Wed Feb 08 2023',
    date_year: '2023',
    date_month: '1',
    date_day: '8',
    date_time: '02:07 pm',
    quote_date: '2022-12-28T02:50:10.897Z',
    applicant_name: 'M Test 12/27',
    agency_address: '11234 Test Street Street Two, Boise, ID 83675',
    agency_name: 'Stadnick MGA',
    agency_code: 'TBD',
    agency_commision: '',
    agency_commision_rate: '',
    surplus_licence: '',
    surplus_licence_agency: '',
    surplus_licence_individual: '4242424',
    producer_name: 'Test Rename',
    carrier_name: 'Skylab Specialty Program',
    dot_number: '112211222',
    mc_number: '1213454657632',
    telephone: '645232333',
    email_address: 'mtest@test.com',
    radius: '190',
    company_start_date: '2012-4-12',
    employee_count: '6',
    legal_name: "Maddison's Test",
    dba_name: 'M Test',
    named_insured: 'M Test 12/27',
    years_in_business: '10',
    garage_address: '344 hi , IDK,CA 56342432',
    mailing_address: '344 hi , IDK,CA 56342432',
    state: 'CA',
    drivers_count: '3',
    drivers: [
      {
        number: '1',
        dl_number: 'asdf234234',
        first_name: 'asdf',
        last_name: 'asdf',
        included: 'Yes',
        date_of_birth: '2001-1-12',
        hire_date: '2022-12-2',
        experience_date: '2009-12-23',
        minor_violations: '0',
        major_violations: '0',
        accident_at_fault: '0',
        accident_not_at_fault: '0',
      },
      {
        number: '2',
        dl_number: '8765433',
        first_name: 'Mad',
        last_name: 'Mad',
        included: 'Yes',
        date_of_birth: '1990-3-2',
        hire_date: '2022-12-16',
        experience_date: '2022-12-13',
        minor_violations: '0',
        major_violations: '0',
        accident_at_fault: '1',
        accident_not_at_fault: '0',
      },
      {
        number: '3',
        dl_number: '7675634524',
        first_name: 'Hi',
        last_name: 'Maddi',
        included: 'Yes',
        date_of_birth: '1985-5-5',
        hire_date: '2022-12-3',
        experience_date: '2022-12-22',
        minor_violations: '0',
        major_violations: '0',
        accident_at_fault: '0',
        accident_not_at_fault: '1',
      },
    ],
    excluded_drivers_count: '0',
    excluded_drivers: [],
    power_unit_count: '3',
    power_units: [
      {
        number: '1',
        vin: '1FUJGLDRXDLBR8628',
        year: '2013',
        unit_type: 'Truck',
        make: 'FREIGHTLINER',
        model: 'Cascadia',
        included: 'Yes',
        gvw: '33001',
      },
      {
        number: '2',
        vin: '1FUJBBCK65LU55036',
        year: '2005',
        unit_type: 'Truck',
        make: 'FREIGHTLINER',
        model: 'CST120',
        included: 'Yes',
        gvw: '33001',
      },
      {
        number: '3',
        vin: '1FUJGLBG5CSBJ5855',
        year: '2012',
        unit_type: 'Truck',
        make: 'FREIGHTLINER',
        model: 'Cascadia',
        included: 'Yes',
        gvw: '33001',
      },
    ],
    trailers: [],
    trailers_count: '0',
    selected_deductible: '$1,500.00',
    line_of_coverage: 'Auto Liability',
    coverage_options: [
      {
        title: 'Hired Autos',
        selected: 'Selected',
        total: '$2,000.00',
        limit: '$1,000.00',
        split_limit: '',
        deductible: '',
      },
      {
        title: 'Non Owned',
        selected: 'Selected',
        total: '$136.00',
        limit: '$1,000.00',
        split_limit: '',
        deductible: '',
      },
    ],
    all_coverage_options: [
      {
        title: 'Hired Autos',
        selected: 'Selected',
        total: '$2,000.00',
        limit: '$1,000.00',
        split_limit: '',
        deductible: '',
      },
      {
        title: 'Non Owned',
        selected: 'Selected',
        total: '$136.00',
        limit: '$1,000.00',
        split_limit: '',
        deductible: '',
      },
    ],
    commodities: [],
    taxes: [{ name: 'State Tax', total: '$2,641.60' }],
    fees: [
      { name: 'Policy', total: '$2,935.11' },
      { name: 'Technology', total: '$150.00' },
      { name: 'Safety Fee', total: '$180.00' },
    ],
    quote_pure_premium: '$48,918.51',
    quote_coverage_premiums: '',
    total_premium: '$54,825.22',
    dot_speed_gauge_dot_score: '650',
    ho_selected: 'X',
    ho_rejected: '',
    ho_limit: '$1,000.00',
    ho_split_limit: '',
    ho_total: '$2,000.00',
    no_selected: 'X',
    no_rejected: '',
    no_limit: '',
    no_split_limit: '',
    no_total: '$136.00',
    p_lim_1: '$1,000,000.00',
    s_lim_1: '',
    L1: 'X',
    A1: 'X',
    selected_per_person_limit: '$1,000,000.00',
    SP: 'X',
    selected_per_accident_limit: '',
    SA: 'X',
    limits: [
      { limit: '$1,000,000.00', selection: '' },
      { limit: '$950,000.00', selection: '' },
      { limit: '$750,000.00', selection: '' },
    ],
    p_lim_2: '$950,000.00',
    s_lim_2: '',
    L2: '',
    A2: '',
    p_lim_3: '$750,000.00',
    s_lim_3: '',
    L3: '',
    A3: '',
    deductible_1: '$NaN',
    F1: '',
    deductibles: [
      { deductible: '$1,500.00', selection: '' },
      { deductible: '$2,500.00', selection: '' },
      { deductible: '$5,000.00', selection: '' },
    ],
    deductible_2: '$NaN',
    F2: '',
    deductible_3: '$NaN',
    F3: '',
  };
}
