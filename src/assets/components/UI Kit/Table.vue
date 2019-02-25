<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card-box">
                    <h4 class="m-t-0 header-title">Filtering</h4>
                    <p class="text-muted m-b-30 font-13">
                        include filtering in your FooTable.
                    </p>
                    <div class="form-inline m-b-20">
                        <div class="row">
                            <div class="col-md-6 text-xs-center">
                                <div class="form-group">
                                    <label class="control-label m-r-5">Status</label>
                                    <select id="demo-foo-filter-status" class="form-control input-sm">
                                        <option value="">Show all</option>
                                        <option value="active">Active</option>
                                        <option value="disabled">Disabled</option>
                                        <option value="suspended">Suspended</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 text-center text-right">
                                <div class="form-group float-right">
                                    <input id="demo-foo-search" type="text" placeholder="Search" class="form-control" autocomplete="on">
                                </div>
                            </div>
                        </div>
                    </div>
                    <table id="demo-foo-filtering" class="table table-striped table-bordered" data-page-size="7">
                        <thead>
                        <tr>
                            <th data-toggle="true" v-for="(header, index) in headers" :key="index">{{ header.title }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(test, index) in paginatedData" :key="index">
                            <td>{{ test.FirstName }}</td>
                            <td>{{ test.LastName }}</td>
                            <td>{{ test.Job }}</td>
                            <td>{{ test.DOB }}</td>
                            <td>
                                <span class="badge label-table badge-success" v-if="test.Status === 'Active'">{{ test.Status }}</span>
                                <span class="badge label-table badge-danger" v-else>{{ test.Status }}</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="text-xs-center text-center pt-2">
                    <button
                            :disabled="pageNumber === 0"
                            @click="prevPage">
                        Previous
                    </button>
                    <button
                            :disabled="pageNumber >= pageCount -1"
                            @click="nextPage">
                        Next
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data () {
            return {
                size: 10,
                headers: [
                    {title: 'First Name'},
                    {title: 'Last Name'},
                    {title: 'Job Title'},
                    {title: 'DOB'},
                    {title: 'Status'}
                ],
                data: [
                    {FirstName: 'Monika',
                     LastName: 'Belucci',
                     Job: 'Driver',
                     DOB: '12/02/1992',
                     Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Hemodialysis Technician',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Doctor',
                        DOB: '12/02/2002',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Driver',
                        DOB: '12/02/1990',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Hemodialysis Technician',
                        DOB: '12/02/1992',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Drywall Stripper',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Driver',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Business Services Sales Representative',
                        DOB: '10/02/1982',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Doctor',
                        DOB: '12/02/1996',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Doctor',
                        DOB: '12/02/1999',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Hemodialysis Technician',
                        DOB: '12/02/1997',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Drywall Stripper',
                        DOB: '12/02/1987',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Driver',
                        DOB: '12/02/1965',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Driver',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Drywall Stripper',
                        DOB: '12/02/1964',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Business Services Sales Representative',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Driver',
                        DOB: '12/02/1966',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Doctor',
                        DOB: '12/02/1992',
                        Status: 'Disabled'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Hemodialysis Technician',
                        DOB: '12/02/1992',
                        Status: 'Active'
                    },
                    {FirstName: 'Monika',
                        LastName: 'Belucci',
                        Job: 'Business Services Sales Representative',
                        DOB: '12/02/1992',
                        Status: 'Disabled'
                    }
                ],
                pageNumber: 0
            }
        },
        computed: {
            pageCount () {
                let l = this.data.length;
                console.log(l, 'l');
                let s = this.size;
                console.log(Math.floor(l / s));
                return Math.floor(l / s);
            },
            paginatedData () {
                let start = this.pageNumber * this.size;
                let end = start + this.size;
                return this.data
                    .slice(start, end);
            }
        },
        methods: {
            nextPage() {
                this.pageNumber++;
            },
            prevPage() {
                this.pageNumber--;
                console.log('bla');
            }
        }
    }
</script>

<style scoped>
    #demo-foo-filter-status {
        height: 38px !important;
    }
</style>